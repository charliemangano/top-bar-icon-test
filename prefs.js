const { GObject, Gtk } = imports.gi;

function init () {}

function buildPrefsWidget() {
	let widget = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL, spacing: 10 });

	// preference widgets
	let label = new Gtk.Label({ label: "Example Preference" });
	widget.add(label);

	widget.show_all();
	return widget;
}

function enable () {}

function disable() {}
