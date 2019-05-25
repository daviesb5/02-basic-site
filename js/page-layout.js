/*
"Unchecked" default for hamburger menu.
Credit: David Fariña
*/

var checkBoxes = document.getElementsByTagName('input');

function hamMenu(){
    if(checkBoxes[0].type == 'checkbox') {
        checkBoxes[0].checked = false;
    }
}

/*
//Media Query – JS
function checkWidth(size1, size2, size3){
    if (size1.matches){
        hashDif = 80;
        alert ("hashDif = " + hashDif);
    } else if (size2.matches){
        hashDif = 90;
        alert ("hashDif = " + hashDif);
    } else if (size3.matches){
        hashDif = 500;
        alert ("hashDif = " + hashDif);
    }
}

//Width Options
var hashDif;
var size1 = window.matchMedia("(max-width: 700px)");
var size2 = window.matchMedia("(max-width: 950px)");
var size3 = window.matchMedia("(min-width: 950px)");
*/

/*
Adjusts Anchor a few pixels up.
Credit: Eric Olson
*/
window.addEventListener("hashchange", function() {
    window.scrollTo(window.scrollX, window.scrollY - 150);
});

//The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 150);
    }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too.  Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1);
// The delay of 1 is arbitrary and may not always work right
// (although it did during Eric's testing).