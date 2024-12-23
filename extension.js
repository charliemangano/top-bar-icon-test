const {St, Clutter} = imports.gi;
const Main = imports.ui.main;

let panelButton;
let panelButtonText;
let dialog;

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

	// create dialog with close button
	dialog = new ModalDialog();
	let content = new St.BoxLayout({ vertical: true });
	content.add(new St.Label({ text: "this is my dialog" }));
	dialog.contentLayout.add(content);
	dialog.setButtons([
		{
			label: "close",
			action: () => { dialog.close(); },
			key: Clutter.KEY_Escape
		}
	]);
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

	// open the dialog
	dialog.open();
};