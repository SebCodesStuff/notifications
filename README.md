# areo-notifications
Notification system for BrioVR. Shows a list of all likes and comments a user has on each of their worlds. Unviewed notifications are highlighted and users are prompted any time a new notification comes in by providing a red dot on the notifications icon.

!["Sample"](https://github.com/SpinVR/areo-notifications/blob/master/assets/NotificationMenu1.png)

### Contains:
* __Notifications__ - Front end for UI for the notifications menu
* __Infitinte Scroll__ - Util to load more results paginated results as you scroll down a list
* __MomentHelper__ - A time and date formatter utility to display a moment object properly

# Notes
This repo contains the front end UI and the all utils required to display notifications across both the landing page and the builder. The react components have actions passed into them and they are then picked up in their respective stores. We chose to go this route rather than implementing our own store here to simplify this repo and to save time. This did however mean some code duplication across repos. It did however save the time of setting up redux, and api calls. It also added the flexibility of allowing the rest of the app to interact with the notifications state.

To use any of files simply add `"areo-notifications": "spinvr/areo-notifications#v"` where v is the release version you need to the package.json and run an npm install. You can then import any file you want by  importing from `areo-notifications/build` and then selecting which specific file you want (see src/index.js for options).