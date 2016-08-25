## Install homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

## Install Atom
curl https://atom-installer.github.com/v1.7.3/atom-mac.zip > ~/Downloads/atom-mac.zip && unzip ~/Downloads/atom-mac.zip

## Move Atom to Applications folder
sudo mv ~/Atom.app /Applications/

## Clone Floppybird to desktop
git clone https://github.com/nebez/floppybird.git ~/Desktop/floppybird

## Install atom packages for ez JS
apm install eval-javascript
apm install atom-ternjs

## Open Floppybird in atom
atom ~/Desktop/floppybird/

echo prince lives