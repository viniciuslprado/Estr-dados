import Queue from './Queue.mjs';

let Filaexe1 = new Queue()

console.log("A fila está vazia?", Filaexe1.isEmpty)
console.log(Filaexe1.print())

Filaexe1.enqueue("10")
Filaexe1.enqueue("20")
Filaexe1.enqueue("30")
Filaexe1.enqueue("40")

console.log(Filaexe1.print())
console.log("Total de operações: ", Filaexe1.getOperationCount())

let remover = Filaexe1.dequeue()
console.log("Quem foi removido?", remover)
console.log(Filaexe1.print())
console.log("Total de operações: ", Filaexe1.getOperationCount())

Filaexe1.enqueue("50")
Filaexe1.enqueue("60")

console.log(Filaexe1.print())
console.log("Total de operações: ", Filaexe1.getOperationCount())
