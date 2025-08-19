const BotaoDeleta =() => {
    const criarBotao = document.createElement("button");
    criarBotao.classList.add("check-button");

    criarBotao.innerText = "deletar"; 

    criarBotao.addEventListener('click', deletarTarefa);

    criarBotao.addEventListener('click', () => {
        console.log("Deletado com sucesso");
    })

    return criarBotao;
}

const deletarTarefa = (event) => {
    const finish = event.target;
    const del = finish.parentElement;
    del.remove();
}

export default BotaoDeleta;
