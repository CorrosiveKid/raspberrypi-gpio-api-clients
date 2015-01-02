# Raspberry Pi GPIO API Client #

This repository currently contains two client projects to use the [Raspberry Pi GPIO API](https://github.com/CorrosiveKid/raspberrypi-gpio-api) in order to control GPIO pins of a Raspberry Pi with your Mobile Phone or Smart Watch. 

## PhoneGap Client ##
This client application is developed as a cross platform application using JQuery mobile. Currently, the Raspberry PI IP address is hard-coded, change it according to your IP address and import it as an existing PhoneGap project or build your own Android/iOS/Windows Phone client using http://build.phonegap.com/

## Pebble Watch Client ##
This is a Pebble watch app developed using pebble.js. Currently, the Raspberry Pi IP address is hard-coded, change it according to your IP address and build the project on your Pebble watch to test it out.

Note: I'm planning to update the code to remove the hard-coded IP addresses and add settings pages to add the values from the applications itself in the future.