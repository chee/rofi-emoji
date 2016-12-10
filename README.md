# rofi-emoji

depends on:

* xdotool
* rofi
* xsel

offers you a list of all the emoji and then when you
pick one it types it into the focused input 4 u

it also now copies it to the clipboard because xdotool
doesn't support printing emoji into some windows

install it by

```sh
npm i -g rofi-emoji
```

bind it to a key like

```ini
[keybindings]
M-S-e = rofi-emoji
```
