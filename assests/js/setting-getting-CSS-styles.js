const mainContainer = document.querySelector(".main__container");

// single style
mainContainer.style.width = "100%";

// multiple style
mainContainer.style.cssText = "box-sizing: border-box; font-weight: 400;";

// multiple style and attributes
mainContainer.setAttribute("style", "width:100%");

function setAttributes(element, attributes) {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

setAttributes(mainContainer, { style: "font-weight:400; width:100%", "text-align": "initial", id: "main__container", "data-block": "container" });

// getting style
console.log(window.getComputedStyle(mainContainer));
