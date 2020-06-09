const dataContainer = document.querySelector(".data__filtering ");
const arrToRender = [];
const element = `<div class="data__filtering--item"></div>`;

for (let i = 0; i < 10; i++) {
    arrToRender.push(element);
}

const renderHTML = () => {
    dataContainer.innerHTML = arrToRender.join("");
};

renderHTML();

const filterData = (index) => {
    arrToRender.splice(arrToRender.indexOf(index, 1));
};

const items = document.querySelectorAll(".data__filtering--item");
items.forEach((el, index) => {
    el.addEventListener("click", () => {
        filterData(index);
        // renderHTML();
        console.log(arrToRender);
    });
});
