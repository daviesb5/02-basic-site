/*
"Unchecked" default for hamburger menu.
----------------------
Credit: David Fariña
*/

var checkBoxes = document.getElementsByTagName('input');

function hamMenu() {
    if (checkBoxes[0].type == 'checkbox') {
        checkBoxes[0].checked = false;
    }
}

//Media Query – JS
function checkWidth(size1, size2, size3) {
    if (size1.matches) {
        hashDif = 80;
        alert("hashDif = " + hashDif);
    } else if (size2.matches) {
        hashDif = 90;
        alert("hashDif = " + hashDif);
    } else if (size3.matches) {
        hashDif = 500;
        alert("hashDif = " + hashDif);
    }
}

/*
Changes Background Images
----------------------
Credit: the Net Ninja
*/
var webpage;

function setImage(webpage) {
    var root_img = document.querySelector(':root');
    if (webpage == "about") {
        root_img.style.setProperty('--bg-image', 'url(https://upload.wikimedia.org/wikipedia/commons/3/3f/Germany_-_Berlin_and_Potsdam%2C_Kolonnaden_Communs_Pdm._%2828213041075%29.jpg)');
    } else if (webpage == "credits") {
        root_img.style.setProperty('--bg-image', 'url(https://upload.wikimedia.org/wikipedia/commons/b/be/Chalkboard_at_school.jpg)');
    } else if (webpage == "error") {
        root_img.style.setProperty('--bg-image', "src='img/waldo/jpg/header-img.jpg)'");
    } else {
        alert("No image found");
    }
}

/*
GIVES DETAILS
*/
var itemImg;

function appDetails(itemImg) {
    if (itemImg == 'calc') {
        document.getElementById("details").innerHTML = "Knowing about my interest in programming, my brother challenged me to make a calculator.  This was my project where I tried using Javascript.  Works fine with whole numbers.  However, the 64-bit math doesn't always give correct answers for problems with decimals."
    } else {
        alert("Oops, something is broken...");
    }
}

function sampleDetails(itemImg) {
    if (itemImg == 'housing') {
        document.getElementById("details").innerHTML = "This is a sample website for a fictional company called Zimmermann Housing.  Right now, it only has a main page with a responsive layout.  I'm planning to have a slideshow for the main page."
    } else {
        alert("Oops, something is broken...");
    }
}