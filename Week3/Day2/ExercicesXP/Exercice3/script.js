let allBoldItems = [];

let boldItems = document.getElementsByTagName("strong");

function getBoldItems() {
  for (let item of boldItems) {
    allBoldItems.push(item);
  }
}

getBoldItems();

function highlight() {
  for (let item of allBoldItems) {
    item.style.color = "blue";
  }
}

function returnNormal() {
  for (let item of allBoldItems) {
    item.style.color = "black";
  }
}

let par = document.querySelector("p");

par.addEventListener("mouseover", highlight);

par.addEventListener("mouseout", returnNormal);
