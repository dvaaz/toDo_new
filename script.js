// EVENTO
// Onde vai acontecer -> botão
// Qual evento vai acontecer -> click
// O que vai acontecer -> aparece a frase "fui clicado"
const criarTarefa = (evento) => {
    // preventDefault() => Previne o comportamento padrão do form.
    evento.preventDefault();

    // querySelector() -> busca o CSS selector
    const lista = document.querySelector("[data-list]");
    
    const input= document.querySelector("[data-form-input]");
    const valor = input.value;

    // createElement(); -> cria um elemento HTML
    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    const conteudo = `<p class="content">${valor}</p>`; // construção do template
    

    tarefa.innerHTML = conteudo;
    
    lista.appendChild(tarefa);
    tarefa.appendChild(BotaoConclui());
    input.value = ""; // retorna "" para o data-input

};

const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener('click', criarTarefa); // addEventListener sempre que for criar um evento,
//  não há "()" pois não queremos que ela seja invocada imediatamente, apenas quando houver o click

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

const concluirTarefa = (evento) => {
    const finalizar = evento.target; // devolvera o button button => button
    const tarefaCompleta = finalizar.parentElement;
    tarefaCompleta.classList.toggle('done'); // toggle devolve um True or False
}



// Criação de Elementos 
{/* <li><p></p></li> */}

// appendChild(); -> Insere um elemento dentro da tag anterior
// innerHTML(); -> Insere html através do js.