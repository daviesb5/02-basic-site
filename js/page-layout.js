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
function setImage(webpage){
    var root_img = document.querySelector(':root');

    if (webpage = "about"){
        /* alert("webpage: " + webpage); */
        root_img.style.setProperty('--bg-color', 'rgba(24, 24, 24, 0.75)');
        root_img.style.setProperty('--bg-image', 'url(https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/My_Book_about_ME_cover.jpg/220px-My_Book_about_ME_cover.jpg)');

    } else {
        alert("No image found");
    }
}