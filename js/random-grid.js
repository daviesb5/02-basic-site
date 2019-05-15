var maxNum = 24;
var idArray = [];
var srcArray = [];
var a;
var i;
var j;
var x;
var text = "";

/*
//loads numbers in order
function loadNumbers(denomNum) {
    for (i = 0; i < denomNum; i++) {
        idArray[i] = i;
        srcArray[i] = i;
    }
}
//triggers function
loadNumbers(maxNum);

//randomizes numbers
function shuffle(a) {
    //CREDIT: Jeff on StackOverflow -- https://stackoverflow.com/users/353278/jeff
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        //if numbers < 10
        a[j] = x;
    }
    return a;
}
//triggers function
shuffle(srcArray);

//adds 0 in front of numbers less than 10
function formatNumbers(jVal) {
    //format number
    if (jVal < 10) {
        jVal = "0" + jVal;
    } else {
        jVal = jVal;
    }
    return jVal;
}

//has numbers formatted
function readNumbers(newArray) {
    for (i = 0; i < newArray.length; i++) {
        newArray[i] = formatNumbers(newArray[i]);
    }
    //alert("newArray: " + newArray);
}
readNumbers(idArray);
readNumbers(srcArray);

//uses arrays to set up images
function changeImage(newArray) {
    for (i = 0; i < newArray.length; i++){
        //image = document.getElementById('img-' + idArray[i]);
        //image.src = "img/waldo/png/braedo-" + newArray[i] + ".png";
        alert("file name: img-" + idArray[i]);
        alert("file name: img/waldo/png/braedo-" + newArray[i] + ".png");
    }
    var image = document.getElementById('img-' + idArray[i]);
    image.src = "img/waldo/png/braedo-" + newArray[i] + ".png";
}
changeImage(srcArray);

function testChange() {
    var image = document.getElementById('img-00');
    image.src = "img/waldo/png/braedo-02.png";
}
*/

/*
TEMPORARY SET-UP
*/
var correctImg;

function setCorrectImg(){
    correctImg = "img-04";
}
setCorrectImg();

function checkImg(currentImg){
    //alert("currentImg: " + currentImg);
    if (currentImg == correctImg) {
        alert("Congrats, you found Braedo!");
    } else {
        alert("Sorry, guess again");
    }
}