const { GObject, Gtk } = imports.gi;

function init () {}

function buildPrefsWidget() {
	let widget = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL, spacing: 10 });

	// preference widgets
	let label = new Gtk.Label({ label: "Example Preference" });
	widget.append(label);

	label.show();
	widget.show();
	return widget;
}

function enable () {}

function disable() {}
