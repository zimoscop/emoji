import { data } from "./data.js";

function creatArray(arr) {
  for (let el of data) {
    createCard(el);
  }
}

creatArray(data);

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "emoji__card";
  const title = document.createElement("h3");
  title.textContent = obj.title;
  title.className = "h3";
  const symbol = document.createElement("p");
  symbol.textContent = obj.symbol;
  symbol.className = "emoji__pic";
  const keywords = document.createElement("p");
  keywords.textContent = obj.keywords;
  keywords.className = "keywords";
  card.append(symbol, title, keywords);
  document.querySelector(".emoji__cards").append(card);
}
