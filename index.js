const lista = document.getElementById("lista-de-compras");

const inputItem = document.getElementById("input-item");

const adicionarItem = document.getElementById("adicionar-item");

let contador = 0;

adicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();

    if (inputItem.value === "") {
        alert("Campo vazio! Por favor digite algum item para inserir.");
        return;
    }
        

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerHTML = inputItem.value;

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    lista.appendChild(itemDaLista);

});