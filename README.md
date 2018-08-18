# Final Fantasy MiniWiki

### View quick facts about your favorite Final Fantasy characters.

This is a React / Redux app that lets Final Fantasy fans view quick facts about their favorite characters from the series.  It is a remake of a vanilla-spa that I made without any frameworks (see [this repo](https://github.com/klcantrell/finalfantasy-miniwiki-vanillaspa)). Just by clicking on each picture, the user can select the character they're interested in and the app will load that characters info.  Users can also switch games and get a whole set of new characters to choose from. Although navigating the app doesn't trigger a page refresh, it provides the user URLs for each game and each character so that they can quickly revisit the view containing a specific character's info.

User can:

* View new character information at the click of a picture
* Save a URL to revisit the site with a specific character's info loaded
* Switch games to get new character options for that particular game

Tech Highlights:

* Used **React** for rendering the UI
* Used **Redux** to manage the app's state such as page number and selected game
* Used **Redux-Thunk** to allow asynchronous actions like AJAX calls inside of Redux
* Used **React Router** to bind views with routes based on the selected game and character

#### Visit the site!
#### https://ff-miniwiki.surge.sh/