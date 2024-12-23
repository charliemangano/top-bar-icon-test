const {St, Clutter} = imports.gi;
const PopupMenu = imports.ui.popupMenu;
const Main = imports.ui.main;

let panelButton;
let panelButtonText;
let menu;

function init () {
	// create a Button with "Hello World" text
	panelButton = new St.Bin({
		style_class : "panel-button",
		reactive: true,
	});
	panelButtonText = new St.Label({
		text : "Hello World",
		y_align: Clutter.ActorAlign.CENTER,
	});
	panelButton.set_child(panelButtonText);

	// connect the button to click event
	panelButton.connect('button-press-event', onClick)

	// create popup with close button
	menu = new PopupMenu.PopupMenu(
		panelButton,
		0.25,
		St.Side.TOP
	);
	Main.uiGroup.add_actor(menu.actor);
	let menuItem = new PopupMenu.PopupMenuItem("this is my popup menu");
	menu.addMenuItem(menuItem);
	let closeItem = new PopupMenu.PopupMenuItem("close");
	closeItem.connect('activate', () => {
		menu.close();
	});
	menu.addMenuItem(closeItem);

	menu.close() // so it's not open by default
}

function enable () {
	// add the button to the panel
	Main.panel._rightBox.insert_child_at_index(panelButton, 0);
}

function disable () {
	// remove the added button from panel
	Main.panel._rightBox.remove_child(panelButton);
}

function onClick() {
	// change the text of the button
	if (panelButtonText.get_text() == "Bye Universe")
		panelButtonText.set_text("Hello World")
	else
	panelButtonText.set_text("Bye Universe")

	// open or close the popup menu
	if (menu.isOpen)
		menu.close();
	else
		menu.open();
};