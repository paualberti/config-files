# Keyboard Configuration

## Ergonomic keyboard layout with vim in mind

Alternative layouts [document](https://docs.google.com/document/d/1Ic-h8UxGe5-Q0bPuYNgE3NoWiI8ekeadvSQ5YysrwII/edit?tab=t.0)

Analysis from [keysolve](https://clemenpine.github.io/keysolve-web/)

![Keysolve analysis](yrst-analysis.png)

To analyze it yourself this is the layout:

p l w m g z f o u '<br>
y r s t k j n a e i<br>
q x c d v b h , ; .<br>

***

> [!Important]
>
> Additional remappings of this layout
>
> * Caps -> Escape
> * Ralt -> BackSpace

## Where

This script only changes the layout from a software perspective. It has been tested in a Linux machine and should 'theoretically' work in a Mac

## How to use

### Download the configuration

```Bash
git clone https://github.com/paualberti/yrst-vim ~/.config/yrst-vim
```

### BackUp existing layout

```Bash
mv /usr/share/X11/xkb/symbols/us /usr/share/X11/xkb/symbols/us.bak
mv /etc/default/keyboard /etc/default/keyboard.bak
```

### Apply new layout

```Bash
sudo cp ~/.config/yrst-vim/us /usr/share/X11/xkb/symbols/us
sudo cp ~/.config/yrst-vim/keyboard /etc/default/keyboard
```

### Use the new layout

```Bash
setxkbmap -layout us -variant yrst-vim
```

### Delete old layout (optional)

```
sudo rm /usr/share/X11/xkb/symbols/us.bak
sudo rm /etc/default/keyboard.bak
```
