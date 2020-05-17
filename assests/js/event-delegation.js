// Event Delegation - Event Propagation - Event Bubbling

// Events that dont bubble up: focus, blur and scroll

// Cancel Event Bubbling: .stopPropagation()

document.querySelector(".main__container").addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.className === "card") {
        console.log("a");
    }
});
