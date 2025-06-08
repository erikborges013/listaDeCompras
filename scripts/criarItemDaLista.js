import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

export const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
    

    if (inputItem.value === "") {
        alert("Campo vazio! Por favor digite algum item para inserir.");
        return;
    }
        

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckBox = document.createElement("input");
    inputCheckBox.addEventListener("click", function() {
        if (inputCheckBox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    })
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerHTML = inputItem.value;

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    const dateCompleta = gerarDiaDaSemana();

    const dataHora = document.createElement("p");
    dataHora.classList.add("texto-data");
    dataHora.innerText = dateCompleta;
    itemDaLista.appendChild(dataHora);

    
    

    
    return itemDaLista;
}