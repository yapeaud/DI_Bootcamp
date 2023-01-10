let btn = document.getElementById("btn");
let div = document.querySelector("div");

btn.addEventListener("click", clickEvent)
btn.addEventListener("mouseover", mouseoverEvent);
btn.addEventListener("mouseout", mouseoutEvent);

function clickEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    let text = document.createElement("h1");
    text.innerHTML = "Welcome in the Alien Zone !";
    text.style.color = "#" + randomColor;
    div.appendChild(text);
}

function mouseoutEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    div.style.background ="#" + randomColor
}

function mouseoverEvent(){
    div.style.background = "url(https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/03/05/11/Lancee-en-1977-la-sonde-spatiale-Voyager-2-vient-d-atteindre-l-espace-interstellaire.jpg?VersionId=r6QSiugFu6Wz90BmPNsBDSGmG1GJm.hD)";
}