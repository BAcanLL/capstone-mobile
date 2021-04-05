![Home Screen - Emotional](https://user-images.githubusercontent.com/23129036/113631671-c9539d80-9637-11eb-99d0-b16a98b69190.png)  

![Logo](assets/brand.png)

A mental health and anxiety monitoring application that takes advantage of vital signals from wearable technologies.

## Platform

[Calme Portal](https://github.com/BAcanLL/capstone) - The therapist web portal.

[Calme Server](https://github.com/BAcanLL/capstone-server) - Backend server and database.

## Environment Setup
Make sure you're environment is at least up to date with the following.

* **Node** version >= 10.19.0
* **yarn** version >= 2.4.0

Before you start development, run the following commands.
```
git clone https://github.com/BAcanLL/capstone-mobile.git
cd capstone-mobile
yarn
```

_NOTE: We are still using node_modules despite being on yarn 2, as PnP doesn't support React Native._
## Starting the Application
To start the application, run the following command in the project directory.
```
yarn start
```
This will start [Expo](https://docs.expo.io/). By default, the application runs on port 19000 and the DevTools run on port 19002. 

To see the app once it's running, there are two options.

#### On a Physical Device

This is the preferred way to run the application. To run the app on your mobile device:
1. Download the Expo app on your device.
2. Scan the Expo QR code with your camera. The QR code is printed in terminal after running the start command as well as available in the DevTools.
3. Open the Expo app when prompted.

#### In a Simulator

To run the app on a simulator within your computer instead, follow Expo's documentation:
* [Android](https://docs.expo.io/workflow/android-studio-emulator/)
* [iOS](https://docs.expo.io/workflow/ios-simulator/)

_NOTE: Simulators have certain limitations, so running the app on your device is recommended._

## Storybook
To see components in Storybook, run the following command in the project directory. Storybook will default to running on port 6006. Open this port on your mobile device to view components there.
```
yarn storybook
```

## Pre-Commit Hooks
All commits are run through the following pre-commit commands to lint and format the code.
```
eslint --fix
prettier --write
```

## Screenshots
![Authentication Screen](https://user-images.githubusercontent.com/23129036/113631732-e1c3b800-9637-11eb-9b02-22a4e4a54ff1.png)
![Home Screen](https://user-images.githubusercontent.com/23129036/113631716-dbcdd700-9637-11eb-99cb-3561d5dd0430.png)
![Home Screen - Emotional - Submitted](https://user-images.githubusercontent.com/23129036/113631721-dec8c780-9637-11eb-945f-9a8a19cd598f.png)
![Physical Data Collection](https://user-images.githubusercontent.com/23129036/113631783-f6a04b80-9637-11eb-9372-8f40492bda8d.png)
![Profile Screen](https://user-images.githubusercontent.com/23129036/113631801-ff911d00-9637-11eb-8e33-7d780e016791.png)
![Profile Screen - Edit](https://user-images.githubusercontent.com/23129036/113631790-fb64ff80-9637-11eb-84e3-620c8323a24c.png)

