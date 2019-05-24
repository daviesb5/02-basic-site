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