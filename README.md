# Keyboard Configuration

## Ergonomic keyboard layout with vim in mind

This is an analysis from [keysolve](https://clemenpine.github.io/keysolve-web/)
![Keysolve analysis](yrst-analysis.png)

* Caps -> Escape
* Ralt -> BackSpace

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

It is named colemak so that it can be changed from the system settings

```Bash
setxkbmap -layout us -variant colemak
```
