import Queue from "../lib/Queue.mjs";

let fila = new Queue()

console.log("A fila está vazia? ", fila.isEmpty)
console.log(fila.print())

//inserção de elementos na fila
fila.enqueue("Alexandre")
fila.enqueue("Bruno")
fila.enqueue("Carlos")
fila.enqueue("Daniel")

console.log("A fila está vazia? ", fila.isEmpty)
console.log(fila.print())

let atendido = fila.dequeue()
console.log("Quem foi atendido?", atendido)
console.log(fila.print())

console.log("Próximo a ser atendido: ", fila.peek())
