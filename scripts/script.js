import { data } from "./data.js";

for (let el of data) {
  el.keywords = [...new Set(el.keywords.split(" "))].join(" ");
}

const input = document.querySelector(".find__input");

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "emoji__card";
  card.innerHTML = `<p class="emoji__pic">${obj.symbol}</p>
                     <h3>${obj.title}</h3>
                    <p class="keywords">${obj.keywords}</p>`;
  return card;
}
data.forEach((card) =>
  document.querySelector(".emoji__cards").append(createCard(card))
);

function inputSearch(event) {
  document.querySelector(".emoji__cards").innerHTML = "";
  data
    .filter(
      (item) =>
        item.title.toLowerCase().trim().includes(event.target.value) ||
        item.keywords.toLowerCase().trim().includes(event.target.value)
    )
    .forEach((item) =>
      document.querySelector(".emoji__cards").append(createCard(item))
    );
}

input.addEventListener("input", inputSearch);
