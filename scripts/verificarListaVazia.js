//Aqui foi selecionado a tage p através da classe e atribuído a variável mensagemListaVazia
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

//Aqui foi criado uma função para verificar se a lista realmente está vazia.
function verificarListaVazia(lista) {
    //Aqui iremos selecionar todas tag's li disponíveis dentro da lu e atribuir a variável itens da lista
    const itensDaLista = lista.querySelectorAll("li");
    //Após selecionar todas e atribuir uma array a variável itensDaLista, a gente verigica se a quantidade é zero.
    if (itensDaLista.length === 0) {
        //Caso a quantidade seja zero a gente exibe a mensagem de lista vazia
        mensagemListaVazia.style.display = "block";
    } else {
        //Caso tenha um ou mais a gente não exibe.
        mensagemListaVazia.style.display = "none";
    }
};

export default verificarListaVazia;