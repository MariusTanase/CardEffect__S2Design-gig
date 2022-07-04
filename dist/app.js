const cardContainer = document.querySelector("#cards");


const item = [{
        name: "Dormitory Design",
        image: "./assets/images/Image 1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2019"
    }, {
        name: "Garden Design",
        image: "./assets/images/Image 2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2018"
    }, {
        name: "Forest Gardern Design",
        image: "./assets/images/Image 3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2017"
    }, {
        name: "Library Corner Design",
        image: "./assets/images/Image 4.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2016"
    },
    {
        name: "page 5",
        image: "./assets/images/Image 1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
        date: "12/12/2015"
    }
];


//create a card based on counter and show it on the screen
function createCard(item) {
    //Create card section
    const card = document.createElement("section");
    card.classList.add("card");
    //Creating the image
    const image = document.createElement("img");
    image.classList.add("card__image");
    image.src = item.image;

    //Creating the title
    const title = document.createElement("h2");
    title.classList.add("card__title");
    title.innerText = item.name;
    //Creating the card description
    const description = document.createElement("p");
    description.classList.add("card__text");
    description.innerText = item.description;
    //creating the date of the card
    const date = document.createElement("p");
    date.classList.add("card__date");
    date.innerText = item.date;
    //appending the image, title, description and date to the card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(date);
    cardContainer.appendChild(card);
}

//create cards based on json file data and apprend them to dom and show only 4 cards at a time
function createCards(item) {
    //show only 4 cards at a time
    for (let i = 0; i < 4; i++) {
        createCard(item[i]);
    }
}

// Creating animation to remove first element and add it to the end of the array at each 3 seconds


let counter = 4;

function removeFirstElement() {
    const firstElement = document.querySelector(".card");
    cardContainer.removeChild(firstElement);
    createCard(item[counter]);
    cardContainer.lastChild.classList.add("card__intro");
    counter++;
    if (counter === item.length) {
        counter = 0;
    }

    setTimeout(() => {
        cardContainer.lastChild.classList.remove("card__intro");

    }, 2000);
}

// Calling all the functions
createCards(item);

//Calling the intervals

setInterval(() => {
    const element = document.querySelector("#cards > section:nth-child(1)")
    element.classList.add("card__outro");
    // event listener when animation ends
    element.addEventListener("animationend", () => {
        element.classList.remove("card__outro");
        removeFirstElement();

    })
}, 6000);