import BotaoConclui from "./components/concluiTarefa.js";
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




// Criação de Elementos 
{/* <li><p></p></li> */}

// appendChild(); -> Insere um elemento dentro da tag anterior
// innerHTML(); -> Insere html através do js.