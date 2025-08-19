

// Criando um componente, por convençao PascalCase
const BotaoConclui = () => {
    const criarBotao = document.createElement("button");
    criarBotao.classList.add("check-button");

    // const icone = document.createElement("span");
    // icone.classList.add("material-symbols-outlined");
    // const botaoConcluido = `check_box`;
    // icone.innerHTML = botaoConcluido;
    

    criarBotao.innerText = "concluir"; // .innerText é um atributo

    criarBotao.addEventListener('click', concluirTarefa);

    criarBotao.addEventListener('click', () => {
        console.log("Fui clicado");
    })

    return criarBotao;
}

// Criamos um método, por convenção snakeCase
const concluirTarefa = (evento) => {
    const finalizar = evento.target; // devolvera o button button => button
    const tarefaCompleta = finalizar.parentElement;
    tarefaCompleta.classList.toggle('done'); // toggle devolve um True or False
}

export default BotaoConclui;