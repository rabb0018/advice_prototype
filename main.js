"use strict"

// import { calcMyCarbon } from './carboncalc'
// import './rangeslider'
const inputForm = document.getElementById("siteinput");
let URLvalue
let fieldValue
let monthly
inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    URLvalue = inputForm.elements.urlname.value;
    fieldValue = inputForm.elements.industryfield.value;
    monthly = inputForm.elements.monthlyvisitors.value;
    localStorage.setItem('URLvalue', URLvalue);
    localStorage.setItem('fieldValue', fieldValue);
    localStorage.setItem('monthly', monthly);

    setTimeout(changeLocation, 1000)
        // changeLocation();

    // calcMyCo2(URLvalue);
});

function changeLocation() {
    location.href = `carbonresult.html`;

}