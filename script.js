// EVENTO
// Onde vai acontecer -> botão
// Qual evento vai acontecer -> click
// O que vai acontecer -> aparece a frase "fui clicado"




const criarTarefa = (event) => {
    // preventDefault() => Previne o comportamento padrão do form.
    event.preventDefault();

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

    input.value = "";

};

const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener('click', criarTarefa); // Referência de função.

// Criação de Elementos 
{/* <li><p></p></li> */}

// appendChild(); -> Insere um elemento dentro da tag anterior
// innerHTML(); -> Insere html através do js.