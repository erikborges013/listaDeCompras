function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString("pt-br", {
        weekday: "long", 
    });
    const data = new Date().toLocaleDateString("pt-BR");
    
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    });
    const dateCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    

    return dateCompleta;
}

export default gerarDiaDaSemana;
