/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popover.js
class Tooltip {
  constructor() {}
  showTooltip(header, message, element) {
    const tooltipElement = document.createElement("DIV");
    const tooltipHeader = document.createElement("h2");
    const tooltipMessage = document.createElement("div");
    tooltipHeader.textContent = header;
    tooltipMessage.textContent = message;
    tooltipElement.classList.add("popover");
    tooltipHeader.classList.add("popover-header");
    tooltipMessage.classList.add("popover-message");
    document.body.appendChild(tooltipElement);
    tooltipElement.prepend(tooltipHeader);
    tooltipElement.append(tooltipMessage);
    const {
      right,
      top
    } = element.getBoundingClientRect();
    tooltipElement.style.left = right - element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + "px";
    tooltipElement.style.top = top - tooltipElement.offsetHeight - 5 + "px";
    return tooltipElement;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const app_form = document.querySelector(".form");
const popovers = {
  submit: {
    header: "Popover title",
    message: "И вот потрясающий контент. Это очень увлекательно. Верно?"
  }
};
const tooltipFactory = new Tooltip();
app_form.querySelector("button").addEventListener("focus", e => {
  e.target.addEventListener("click", e => {
    e.preventDefault();
    console.log(app_form.querySelector(".popover"));
    if (document.querySelector(".popover") === null) {
      tooltipFactory.showTooltip(popovers[e.target.type].header, popovers[e.target.type].message, e.target);
    } else {
      document.querySelector(".popover").classList.toggle("deactive");
    }
  });
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;