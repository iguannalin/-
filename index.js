window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  let characters = [];
  const fan = document.querySelector(".fan");
  const jian = document.querySelector(".jian");

  // data from https://www.tutormandarin.net/en/list-of-different-simplified-and-traditional-characters/
  fetch("characters.json")
    .then((response) => response.json())
    .then(data => {
      characters = data;
      generate();
    });

  function display(ch) {
    jian.innerText = ch.jian;
    fan.innerText = ch.fan;
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

  document.addEventListener('keydown', (e) => {
      if (e.key === " ") {
          generate();
      }
  });
  document.addEventListener('keydown', (e) => {
      if (e.key === "r") {
          reflect();
      }
  });

  setInterval(generate, 5000);
});
