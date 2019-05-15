var maxNum = 30;
var fileArray = [];
var a;
var i;
var j;
var x;
var text = "";

//loads numbers in order
function loadNumbers(denomNum){
    for (i = 0; i < denomNum; i++){
        fileArray[i] = i;
    }
}
//triggers function
loadNumbers(maxNum);

//randomizes numbers
function shuffle(a){
    /*
    CREDIT: Jeff on StackOverflow -- https://stackoverflow.com/users/353278/jeff
    */
    var j, x, i
    for (i = a.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        //if numbers < 10
        a[j] = x;
    }
    return a;
}
//triggers function
shuffle(fileArray);

//adds 0 in front of numbers less than 10
function formatNumbers(jVal){
    //format number
    if (jVal < 10) {
        jVal = "0" + jVal;
    } else {
        jVal = jVal;
    }
    return jVal;
}

//has numbers formatted
function readNumbers(newArray){
    //alert("[#1] readNumbers(): newArray = " + newArray);
    for (i = 0; i < newArray.length; i++){
        newArray[i] = formatNumbers(newArray[i]);
    }
    //alert("[#2] readNumbers(): newArray = " + newArray);
}
readNumbers(fileArray);

//uses arrays to set up images
function changeImage(newArray){
    alert("[#1] changeImage(): newArray = " + newArray);
    /*
    for (i = 0; i < newArray.length; i++){

    }
    */
}
changeImage(fileArray);

function testChange(){
    var image = document.getElementById('img-02');
   image.src = "img/waldo/png/braedo-02.png";
}