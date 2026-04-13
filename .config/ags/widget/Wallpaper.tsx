import app from "ags/gtk4/app"
import Astal from "gi://Astal?version=4.0"
import Gdk from "gi://Gdk?version=4.0"
import { onCleanup } from "ags"
import GLib from "gi://GLib?version=2.0"

export default function Wallpaper({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
  let win: Astal.Window
  const { TOP, LEFT, RIGHT, BOTTOM } = Astal.WindowAnchor


  const path = "/home/rallidars/dotfiles/.config/backgrounds/lockscreen.jpg"
  const uri = GLib.filename_to_uri(path, null)

  onCleanup(() => {
    // Root components (windows) are not automatically destroyed.
    // When the monitor is disconnected from the system, this callback
    // is run from the parent <For> which allows us to destroy the window
    win.destroy()
  })

  return (
    <window
      $={(self) => (win = self)}
      visible
      layer={Astal.Layer.BACKGROUND}
      namespace="Kovin-wallpaper"
      name={`wallpaper-${gdkmonitor.connector}`}
      gdkmonitor={gdkmonitor}
      anchor={TOP | BOTTOM | LEFT | RIGHT}
      application={app}
    >
      <box
        hexpand
        vexpand
        css={`background-image: url("${uri}");
        background-size: cover;
        background-position: center;`}
      />
    </window>
  )
}
