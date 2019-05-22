var checkBoxes = document.getElementsByTagName('input');

/*
"Unchecked" default for hamburger menu
*/
function hamMenu(){
    if(checkBoxes[0].type == 'checkbox') {
        checkBoxes[0].checked = false;
    }
}