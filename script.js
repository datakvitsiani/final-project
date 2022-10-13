"use strict";


// event
document.getElementById("clickMe").addEventListener ("click", function () {
    alert("you clicked this button");
});

document.getElementById('clickMe').addEventListener ("mouseover", function () {
    clickMe.style.background = 'red';
})
document.getElementById('clickMe').addEventListener ("mouseout", function () {
    clickMe.style.background = 'white';
})

document.getElementById("btnWrapper").addEventListener ("click", function () {
    alert("sign up complete");
});

document.getElementById('btnWrapper').addEventListener ("mouseover", function () {
    btnWrapper.style.background = 'white';
})
document.getElementById('btnWrapper').addEventListener ("mouseout", function () {
    btnWrapper.style.background = 'red';
})

// burger bar
let navBar = document.getElementById('navBar');
let toggleBar = document.getElementById('toggleBar');
toggleBar.addEventListener ('click', function () {
    navBar.classList.toggle ('navActive')
})