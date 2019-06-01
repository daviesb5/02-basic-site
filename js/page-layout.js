/*
"Unchecked" default for hamburger menu.
----------------------
Credit: David Fariña
*/

var checkBoxes = document.getElementsByTagName('input');

function hamMenu(){
    if(checkBoxes[0].type == 'checkbox') {
        checkBoxes[0].checked = false;
    }
}

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

/*
Changes Background Images
----------------------
Credit: the Net Ninja
*/
var webpage = "";
var root_img = document.querySelector(':root');

function setImage(webpage){
    if (webpage = "about"){
        /* root_img.style.setProperty('--bg-color', 'rgba(24, 24, 24, 0.75)'); */
        root_img.style.setProperty('--bg-image', 'url(https://upload.wikimedia.org/wikipedia/commons/3/3f/Germany_-_Berlin_and_Potsdam%2C_Kolonnaden_Communs_Pdm._%2828213041075%29.jpg)');

    } else if (webpage = "web-apps") {
        root_img.style.setProperty('--bg-image', "'../vid/khet-game-1.MP4' type='video/mp4'");
    } else {
        alert("No image found");
    }
}