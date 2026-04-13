import app from "ags/gtk4/app"
import style from "./style.scss"
import Bar from "./widget/Bar"
import Applauncher from "./widget/Applauncher"
import Wallpaper from "./widget/Wallpaper"
import GLib from "gi://GLib"
import Gtk from "gi://Gtk?version=4.0"
import { createBinding, For, This } from "ags"

app.start({
  instanceName: "ags",
  css: style,
  gtkTheme: "Adwaita-dark",
  main() {
    const applauncher = Applauncher() as Gtk.Window
    app.add_window(applauncher)
    const monitors = createBinding(app, "monitors")

    return (
      <For each={monitors}>
        {(monitor) => (
          <This this={app}>
            <Bar gdkmonitor={monitor} />
            <Wallpaper gdkmonitor={monitor} />
          </This>
        )}
      </For>
    )
  },
})

