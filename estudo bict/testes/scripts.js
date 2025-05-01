
const tarefa1 = prompt("Qual é a tarefa 1?")
const tarefa2 = prompt("Qual é a tarefa 2?")
const tarefa3 = prompt("Qual é a tarefa 3?")


const lista = document.querySelector("ul")

lista.innerHTML = lista.innerHTML + `<li>${tarefa1}</li>`
lista.innerHTML = lista.innerHTML + `<li>${tarefa2}</li>`
lista.innerHTML = lista.innerHTML + `<li>${tarefa3}</li>`