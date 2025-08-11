const novaTarefa = document.querySelector("[data-form-button]");


novaTarefa.addEventListener("click", () => {
    const tarefa= document.querySelector("[data-form-input]");
    const valor = tarefa.value;
    console.log(valor);
});



// EVENTO
// Onde vai acontecer -> botão
// Qual evento vai acontecer -> click
// O que vai acontecer -> aparece a frase "fui clicado"

// Relembrando Funções
// function somar(num1,num2) {
//     return (num1+num2);
// }

// // arrow function
// const multiplicar = (num1, num2) => num1*num2;

// console.log(somar(10,10));
// console.log(multiplicar(10,10));