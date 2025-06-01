//Aqui abaico a gente captura o valor digitado no campo de digitação
const inputItem = document.getElementById("input-item");
//Aqui embaixo a gente captura o evento do botão clicado
const adicionarItem = document.getElementById("adicionar-item");

console.log(inputItem.value);

//Aqui embaixo a gente executa uma função através de um evento que nesse caso está sendo evento de clique
//adicionarItem.addEventListener("click", (evento) => {
    //Aqui embaixo esse código impede que a página recarregue quando o botão for clicado
    //evento.preventDefault();
    //E  aqui embaixo a gente exibe o valor digitado no input através do .value
    //console.log(inputItem.value);
//});