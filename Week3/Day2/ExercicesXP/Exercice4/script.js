let form = document.forms[0];

let btn = document.getElementById("submit");

btn.addEventListener("click", volume);

function volume(e) {
  e.preventDefault();
  let radio = form.elements.radius.value;
  let volume = (4 / 3) * 3.14 * radio;
  document.getElementById("volume").value = volume;
}
