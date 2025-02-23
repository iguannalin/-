window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const fan = document.getElementById("fan");
  const jian = document.getElementById("jian");
  let characters = [];

  // data from https://www.tutormandarin.net/en/list-of-different-simplified-and-traditional-characters/
  fetch("characters.json")
    .then((response) => response.json())
    .then(data => {
      characters = data;
      generate();
    });

  function display(ch) {
    container.innerHTML = "";
    console.log(ch);
    const elem1 = document.createElement("div");
    elem1.className = "jian";
    elem1.innerText = ch.jian;
    const elem2 = document.createElement("div");
    elem2.className = "fan";
    elem2.innerText = ch.fan;
    container.appendChild(elem1);
    container.appendChild(elem2);
  }

  function generate() {
    display(characters[getRandomInt(0, characters.length)]);
  }

  function reflect() {
    if (fan.classList.contains("reflect")) {
      jian.classList.add("reflect");
      fan.classList.remove("reflect");
    } else {
      fan.classList.add("reflect");
      jian.classList.remove("reflect");
    }
  }

  document.getElementById("generate").addEventListener("click", generate);
  document.addEventListener('keydown', (e) => {
      if (e.key === " ") {
          generate();
      }
  });
  document.getElementById("reflect").addEventListener("click", reflect);
  document.addEventListener('keydown', (e) => {
      if (e.key === "r") {
          reflect();
      }
  });
});
