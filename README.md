# Final Fantasy MiniWiki

### View quick facts about your favorite Final Fantasy characters.

This is a React/Redux app that lets Final Fantasy fans view quick facts about their favorite Final Fantasy characters.  It is a remake of a vanilla-spa that I made without any frameworks (see [this repo](https://github.com/klcantrell/finalfantasy-miniwiki-vanillaspa)) Just by clicking on each picture, the user can select the character they're interested in and the app will load that characters info. Although the app doesn't trigger a page refresh, it provides the user URLs for each character so that they can quickly revisit the view containing a specific character's info.

User can:

* View new character information at the click of a picture
* Save a URL to visit the site with a specific character's info loaded

Tech Highlights:

* Used **AJAX** to fetch new character info
* Used **React** to for view rendering
* Used **React Router** to bind views with routes based on the selected character
* Used **Redux** to manage application and UI state