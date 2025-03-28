import Stack from './Stack.mjs';

// Criando uma instância da pilha
const site = new Stack();

// Simulando páginas visitadas
site.insert("Página 1");
site.insert("Página 2");
site.insert("Página 3");

console.log("Pilha atual:", site.print());

// Removendo páginas
console.log("Removido:", site.remove());
console.log("Removido:", site.remove());

// Exibindo histórico de remoções
console.log("Histórico de remoções:", site.History());

// Verificando o topo da pilha após remoções
console.log("Topo da pilha:", site.peek());

// Testando se a pilha está vazia
console.log("A pilha está vazia?", site.isEmpty);

// Testando remoção completa e verificando histórico
console.log("Removido:", site.remove());
console.log("Histórico atualizado:", site.History());
console.log("A pilha está vazia?", site.isEmpty);

// Inserindo novas páginas após remoções
site.insert("Página 4");
site.insert("Página 5");
console.log("Pilha:", site.print());
console.log("Histórico final:", site.History());
