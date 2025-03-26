import Stack from "../lib/Stack.mjs";

let pilha1 = new Stack()
let pilha2 = new Stack()

console.log(pilha1.print())
console.log("Está vazia?", pilha1.isEmpty)

pilha1.push(35)
pilha1.push(40)
pilha1.push(20)
pilha1.push(12)

console.log(pilha1.print())

console.log("Está vazia?", pilha1.isEmpty)

let removido = pilha1.pop()
console.log({removido}, pilha1.print())

let ultimo = pilha1.peek()
console.log({ultimo})

console.log("Pilha 2: ", pilha2.print())