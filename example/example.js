// LICENSE : MIT
"use strict";
var waitForElement = require("wait-for-element");
var fixtureElement = document.getElementById("js-placeholder");
// appended element
var appendedElement = document.createElement("div");
appendedElement.setAttribute("id", "js-element");
appendedElement.textContent = "#js-element";
setTimeout(function () {
    fixtureElement.appendChild(appendedElement);
}, 100);
waitForElement("#js-element").then(function (element) {
    alert("Found #js-element");
}).catch(console.error.bind(console));