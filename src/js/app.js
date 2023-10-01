import { Tooltip } from "./popover";

const form = document.querySelector(".form");

const popovers = {
  submit: {
    header: "Popover title",
    message: "И вот потрясающий контент. Это очень увлекательно. Верно?",
  },
};

const tooltipFactory = new Tooltip();
form.querySelector("button").addEventListener("focus", (e) => {
  e.target.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(form.querySelector(".popover"));
    if (document.querySelector(".popover") === null) {
      tooltipFactory.showTooltip(
        popovers[e.target.type].header,
        popovers[e.target.type].message,
        e.target
      );
    } else {
      document.querySelector(".popover").classList.toggle("deactive");
    }
  });
});
