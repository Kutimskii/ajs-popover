export class Tooltip {
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
    const { right, top } = element.getBoundingClientRect();
    tooltipElement.style.left =
      right - element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + "px";
    tooltipElement.style.top = top - tooltipElement.offsetHeight - 5 + "px";

    return tooltipElement;
  }
}
