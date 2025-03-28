import { Stack } from './Stack.mjs'

// Criando uma pilha com capacidade de 3 elementos
const editortxt = new Stack(3)

// Simulando ações no editor de texto
editortxt.push("Ação 1")
editortxt.push("Ação 2")
editortxt.push("Ação 3")

console.log("Pilha inicial: ", editortxt.print())

// Tentando adicionar uma ação após o limite
editortxt.push("Ação 4")

console.log("Pilha após inserção de ações: ", editortxt.print())

// Verificando se a pilha está vazia
console.log("A pilha está vazia? ", editortxt.isEmpty())

// Desfazendo a última ação
console.log("Desfazer: ", editortxt.pop())
console.log("Pilha após desfazer: ", editortxt.print())

// Verificando o topo da pilha (última ação)
console.log("Topo da pilha: ", editortxt.peek())

// Verificando se a pilha está vazia após remoções
console.log("A pilha está vazia agora? ", editortxt.isEmpty())