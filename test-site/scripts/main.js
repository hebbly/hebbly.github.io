var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === "images/c64-smaller.jpg") {
        myImage.setAttribute ('src', 'images/commodore-64-computer-small.jpg');
    } else {
        myImage.setAttribute ('src', 'images/c64-smaller.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Skriv in ditt namn.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Välkommen ' + myName + '!';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Välkommen ' + storedName + '!';
} 

myButton.onclick = function() {
    setUserName();
}