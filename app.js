const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const textBox = document.getElementById("text-box");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");
const synth = window.speechSynthesis;

const data = [
  {
    image: "./img/drink.jpg",
    text: "Tenho sede",
  },
  {
    image: "./img/food.jpg",
    text: "Tenho fome",
  },
  {
    image: "./img/tired.jpg",
    text: "Estou cansado",
  },
  {
    image: "./img/hurt.jpg",
    text: "Aleijei-me",
  },
  {
    image: "./img/happy.jpg",
    text: "Estou contente",
  },
  {
    image: "./img/angry.jpg",
    text: "Estou zangado",
  },
  {
    image: "./img/sad.jpg",
    text: "Estou triste",
  },
  {
    image: "./img/scared.jpg",
    text: "Estou assustado",
  },
  {
    image: "./img/outside.jpg",
    text: "Quero ir passear",
  },
  {
    image: "./img/home.jpg",
    text: "Quero ir para casa",
  },
  {
    image: "./img/school.jpg",
    text: "Quero ir para a escola",
  },
  {
    image: "./img/grandma.jpg",
    text: "Quero ir para a avó",
  },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
        <img src="${image}" alt="${text}">
        <p class="info">${text}</p>
    `;
  main.appendChild(box);
}

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.innerText = `${voice.name} - ${voice.lang}`;

    if (voice.default) {
      option.innerText += " -- DEFAULT";
    }

    voicesSelect.appendChild(option);
  });
}

// Voices changed
speechSynthesis.addEventListener("voiceschanged", populateVoiceList);

// toggle text box
toggleBtn.addEventListener("click", () => {
  populateVoiceList();
  textBox.style.transform = "translate(-50%,0)";
});

// close text box
closeBtn.addEventListener("click", () => {
  textBox.style.transform = "translate(-50%,-800px)";
});

textarea.addEventListener("submit", (e) => {});
