import Queue from './Queue.mjs';

// Criando uma instância da fila
let Filaexe1 = new Queue();

// Verificando se a fila está vazia e imprimindo a fila
console.log("A fila está vazia?", Filaexe1.isEmpty);
console.log(Filaexe1.print());

// Adicionando elementos à fila
Filaexe1.enqueue("10");
Filaexe1.enqueue("20");
Filaexe1.enqueue("30");
Filaexe1.enqueue("40");

// Imprimindo a fila após as inserções e o total de operações realizadas
console.log(Filaexe1.print());
console.log("Total de operações: ", Filaexe1.getOperationCount());

// Removendo um elemento da fila
let remover = Filaexe1.dequeue();
console.log("Quem foi removido?", remover);
console.log(Filaexe1.print());
console.log("Total de operações: ", Filaexe1.getOperationCount());

// Adicionando mais elementos à fila
Filaexe1.enqueue("50");
Filaexe1.enqueue("60");

// Imprimindo a fila e o total de operações após novas inserções
console.log(Filaexe1.print());
console.log("Total de operações: ", Filaexe1.getOperationCount());
