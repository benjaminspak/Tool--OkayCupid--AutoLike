// Load page https://www.okcupid.com/doubletake
// Post script in console (F12) and press enter.

var intervalID = setInterval(clickLike, 2000);

function clickLike() {
    jQuery(".cardactions-action--like").click();
}