/*Exercício 4: Pilha com Capacidade Máxima
Desafio: Modifique a classe Stack para ter um limite máximo de elementos.
Regras:
1. O tamanho máximo da pilha deve ser definido no construtor.
2. Se a pilha atingir o limite, o método push() deve exibir uma mensagem de
erro e impedir a inserção.
3. Teste essa funcionalidade simulando uma pilha de desfazer ações em um
editor de texto.
*/
export class Stack {
    constructor(maxstack) {
      this.items = [] // pilha vazia
      this.maxstack = maxstack // Define o tamanho máximo da pilha
    }
  
    // Método para adicionar um pedido na pilha
    push(item) {
      if (this.items.length >= this.maxstack) {
        console.log("A pilha atingiu o limite máximo de pedidos.")
      } else {
        this.items.push(item)
      }
    }
  
    // Método para remover o pedido mais recente da pilha
    pop() {
      if (this.isEmpty()) {
        console.log("A pilha está vazia.")
      } else {
        return this.items.pop()
      }
    }
  
    // Método para consultar o pedido mais recente sem removê-lo
    peek() {
      if (this.isEmpty()) {
        console.log("A pilha está vazia.")
      } else {
        return this.items[this.items.length - 1]
      }
    }
  
    // Getter para verificar se a pilha está vazia
    isEmpty() {
      return this.items.length === 0
    }
  
    // Método para imprimir a pilha
    print() {
      return JSON.stringify(this.items)
    }
}
