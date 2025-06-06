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


    const diaDaSemana = new Date().toLocaleDateString("pt-br", {
        weekday: "long", 
    });
    const data = new Date().toLocaleDateString("pt-BR");
    
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    });
    const dateCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    const dataHora = document.createElement("p");
    dataHora.classList.add("texto-data");
    dataHora.innerText = dateCompleta;
    itemDaLista.appendChild(dataHora);
    console.log(dateCompleta);


    lista.appendChild(itemDaLista);

    inputItem.value = "";
    
    verificarListaVazia()
});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
    const itensDaLista = lista.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}