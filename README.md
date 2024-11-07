# Keyboard Configuration
## Ergonomic keyboard layout with vim in mind
![Alt text](yrst-vim.png)
## Where
This script only changes the layout from a software perspective. It has been tested in a Linux system and should work in a Mac 'theoretically'
## How to use
### Setup
```
git clone https://github.com/paualberti/yrst-vim ~/yrst-vim
```
#### BackUp existing layout
```
mv /usr/share/X11/xkb/symbols/us /usr/share/X11/xkb/symbols/us.bak
mv /etc/default/keyboard /etc/default/keyboard.bak
```
#### Apply new layout
```
sudo cp ~/.config-files/us /usr/share/X11/xkb/symbols/us
sudo cp ~/.config-files/keyboard /etc/default/keyboard
```
#### Use the new layout
It is named colemak so that it can be changed from the system settings
```
setxkbmap -layout us -variant colemak
```
