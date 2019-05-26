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