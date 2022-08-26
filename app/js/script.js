
// create cards
const cards = [
    { id: 1, name: "austria", imgSrc: "/img/austria.png"},
    { id: 2, name: "belgium", imgSrc: "/img/belgium.png"},
    { id: 3, name: "china", imgSrc: "/img/china.png"},
    { id: 4, name: "denmark", imgSrc: "/img/denmark.png"},
    { id: 5, name: "england", imgSrc: "/img/england.png"},
    { id: 6, name: "finland", imgSrc: "/img/finland.png"},
    { id: 7, name: "france", imgSrc: "/img/france.png"},
    { id: 8, name: "germany", imgSrc: "/img/germany.png"},
    { id: 9, name: "hungary", imgSrc: "/img/hungary.png"},
    { id: 10, name: "iceland", imgSrc: "/img/iceland.png"},
    { id: 11, name: "kenya", imgSrc: "/img/kenya.png"},
    { id: 12, name: "italy", imgSrc: "/img/italy.png"},
    { id: 13, name: "japan", imgSrc: "/img/japan.png"},
    { id: 14, name: "peru", imgSrc: "/img/peru.png"},
    { id: 15, name: "spain", imgSrc: "/img/spain.png"},
    { id: 16, name: "thailand", imgSrc: "/img/thailand.png"},
    { id: 17, name: "united-kingdom", imgSrc: "/img/united-kingdom.png"},
    { id: 18, name: "united-states", imgSrc: "/img/united-states.png"},
]

const cardsPair = [...cards]
const wholeCardsList = [...cardsPair, ...cards]
const shuffledCards = wholeCardsList.sort(() => 0.5 - Math.random());

let actualcard = null

function initBoard() {
    const board_container = document.querySelector('.board_container');
    let displayCards = shuffledCards.map((item) => {
        return `
        <div class="card_container">
            <div class="card">
                <div class="face-side">
                    <img src="/img/question.png" alt="Question mark">
                </div>
                <div class="back-side">
                    <img src=${item.imgSrc} alt="${item.name} flag icon">
                </div>
            </div>
        </div>`;      
    }).join("");

    board_container.innerHTML = displayCards;

    const card = document.querySelectorAll(".card");
    card.forEach((e) => {
        e.addEventListener("click", () => {
            e.parentElement.classList.toggle("flipped")
            if ()
        })
    })
};

initBoard()


