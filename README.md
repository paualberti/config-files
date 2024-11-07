# Keyboard Configuration
## Ergonomic keyboard layout with vim in mind
![Alt text](yrst-vim.png)
## How to use
### Setup
```
git clone https://github.com/paualberti/.config-files ~/.config-files
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
