// Run on https://www.okcupid.com/doubletake

var intervalID = setInterval(clickLike, 2000);

function clickLike() {
    jQuery(".cardactions-action--like").click();
}