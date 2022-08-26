
// create cards
const cards = [
    { name: "austria", imgSrc: "/img/austria.png"},
    { name: "belgium", imgSrc: "/img/belgium.png"},
    { name: "china", imgSrc: "/img/china.png"},
    { name: "denmark", imgSrc: "/img/denmark.png"},
    { name: "england", imgSrc: "/img/england.png"},
    { name: "finland", imgSrc: "/img/finland.png"},
    { name: "france", imgSrc: "/img/france.png"},
    { name: "germany", imgSrc: "/img/germany.png"},
    { name: "hungary", imgSrc: "/img/hungary.png"},
    { name: "iceland", imgSrc: "/img/iceland.png"},
    { name: "kenya", imgSrc: "/img/kenya.png"},
    { name: "italy", imgSrc: "/img/italy.png"},
    { name: "japan", imgSrc: "/img/japan.png"},
    { name: "peru", imgSrc: "/img/peru.png"},
    { name: "spain", imgSrc: "/img/spain.png"},
    { name: "thailand", imgSrc: "/img/thailand.png"},
    { name: "united-kingdom", imgSrc: "/img/united-kingdom.png"},
    { name: "united-states", imgSrc: "/img/united-states.png"},
]

const cardsPair = [...cards]
const wholeCardsList = [...cardsPair, ...cards]

window.addEventListener('DOMContentLoaded', () => {
    const board_container = document.querySelector('.board_container');
    let displayCards = wholeCardsList.map((item) => {
        return `
        <div class="card">
            <img src=${item.imgSrc} alt="${item.name} flag icon">
        </div>`;      
    }).join("");

    board_container.innerHTML = displayCards;
});
