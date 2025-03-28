/*
Exercício 5: Deque com Elementos Únicos
Desafio: Modifique a classe Deque para não permitir valores duplicados.
Regras:
1. Antes de adicionar um novo valor (insertFront ou insertBack), verifique se ele
já está na deque.
2. Se o valor já existir, exiba uma mensagem de erro e ignore a inserção.
3. Teste essa funcionalidade simulando um deque de itens únicos em um
carrinho de compras.
*/
export class Deque {
    #data // vetor privado

    constructor() {
        this.#data = [] // vetor vazio
    }

    // método para inserção no início da estrutura
    insertFront(val) {
        if (this.#data.includes(val)) {
            console.log(`O item ${val} já está no carrinho.`);
        } else {
            this.#data.unshift(val); // insere no início
        }
    }
    
    // método para inserção no final da estrutura
    insertBack(val) {
        if (this.#data.includes(val)) {
            console.log(`O item ${val} já está no carrinho.`);
        } else {
            this.#data.push(val); // insere no final
        }
    }
    
    // método para remoção do primeiro elemento da estrutura
    removeFront() {
        if (this.isEmpty) {
            console.log("O carrinho está vazio.");
        } else {
            return this.#data.shift(); // remove o primeiro elemento
        }
    }

    // método para remoção do último elemento da estrutura
    removeBack() {
        if (this.isEmpty) {
            console.log("O carrinho está vazio.");
        } else {
            return this.#data.pop(); // remove o último elemento
        }
    }

    // método para consultar o início da estrutura
    peekFront() {
        if (this.isEmpty) {
            console.log("O carrinho está vazio.");
        } else {
            return this.#data[0]; // retorna o primeiro elemento
        }
    }

    // método para consultar o final da estrutura
    peekBack() {
        if (this.isEmpty) {
            console.log("O carrinho está vazio.");
        } else {
            return this.#data[this.#data.length - 1]; // retorna o último elemento
        }
    }

    // Getter para verificar se a estrutura está vazia
    get isEmpty() {
        return this.#data.length === 0;
    }

    // Método que imprime a estrutura (para efeitos de depuração)
    print() {
        let output = "[ ";
        for (let i = 0; i < this.#data.length; i++) {
            if (i !== 0) {
                output += " , ";
            }
            output += `(${i}): ${this.#data[i]}`;
        }
        return output + " ]";
    }
}
