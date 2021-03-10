![Logo](assets/brand.png)

A mental health and anxiety monitoring [application](https://user-images.githubusercontent.com/23129036/110562522-a789f800-8117-11eb-89a7-fe827fc8550d.mp4) that takes advantage of vital signals from wearable technologies.

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
