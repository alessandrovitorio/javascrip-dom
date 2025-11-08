//Titulo na pagina
const titulo = document.createElement("h1");
titulo.setAttribute("id", "titulo");
titulo.textContent = "Meus Cartões";

document.body.appendChild(titulo);

//Container
const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

// Botão
const btn = document.createElement("button");
btn.setAttribute("type", "button");
btn.textContent = "Add Card";
btn.classList.add("btn-add");
container.appendChild(btn);

btn.onclick = function (event) {
    let cont = 1;
  event.preventDefault();
  let newCard = card.cloneNode(true);
  let tittulo = document.querySelector("h3");
  tittulo.innerText = "Meu cartão - " + cont
  let deleteCard = document.createElement("button");
  deleteCard.type = "button";
  deleteCard.textContent = "apagar";
  deleteCard.classList.add = "delete-card";
  newCard.appendChild(deleteCard);
   deleteCard.addEventListener("click",(event)=>{

   newCard.remove();
   }) 
   cont++;
  container.appendChild(newCard);
};

// Card

const card = document.createElement("div");
card.classList.add("card");
card.style.width = "300px";
card.style.height = "450px";
card.style.backgroundColor = "#fff";
card.style.padding = "1rem";
card.style.borderRadius = "10px";
card.style.boxShadow = "0 0 10px rgba(0,0,0,0.6)";

// Titulo do card
const tituloCard = document.createElement("h3");
tituloCard.innerText = "Meu Cartão";
tituloCard.style.color = "#000";
tituloCard.style.textAlign = "center";

card.appendChild(tituloCard);

//imagem no card
let avatar = document.createElement("img");
avatar.src = "https://avatars.githubusercontent.com/u/221563114?v=4";
avatar.classList.add("avatar");
card.appendChild(avatar);

container.appendChild(card);

card.remove();
