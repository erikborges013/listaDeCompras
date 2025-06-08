import { criarItemDaLista, inputItem } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const lista = document.getElementById("lista-de-compras");
const adicionarItem = document.getElementById("adicionar-item");



adicionarItem.addEventListener("click", (evento) => {
    evento.preventDefault();
    
    const itemDaLista = criarItemDaLista();
    lista.appendChild(itemDaLista);
    inputItem.value = "";
    verificarListaVazia(lista);
    
});

    //Aqui a gente chama a função já para abrir verificando se a lista está vazia mesmo.
    verificarListaVazia(lista);