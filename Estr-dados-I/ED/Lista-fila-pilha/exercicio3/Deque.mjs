/*Exercício 3: Deque com Capacidade Limitada
Desafio: Modifique a classe Deque para definir um tamanho máximo e impedir
que novos elementos sejam inseridos quando o limite for atingido.
Regras:
1. O tamanho máximo da deque deve ser passado no construtor.
2. Se o limite for atingido, os métodos insertFront() e insertBack() devem exibir
uma mensagem de erro e impedir a inserção.
3. Teste essa funcionalidade simulando um deque com capacidade de apenas 5
elementos.
*/

export default class Deque {
    #data // vetor privado
    #max // limite máximo de tamanho

    constructor(max) {
        this.#data = [] // inicializa o vetor vazio
        this.#max = max // define o tamanho máximo do deque
    }

    // método para inserção no início da estrutura
    insertFront(val) {
        if (this.#data.length >= this.#max) {
            console.log("Deque atingiu a capacidade máxima.");
        } else {
            this.#data.unshift(val); // insere no início
        }
    }

    // método para inserção no final da estrutura
    insertBack(val) {
        if (this.#data.length >= this.#max) {
            console.log("Deque atingiu a capacidade máxima.");
        } else {
            this.#data.push(val); // insere no final
        }
    }

    // método para remoção do primeiro elemento da estrutura
    removeFront() {
        if (this.isEmpty) {
            console.log("O deque está vazio.");
        } else {
            return this.#data.shift(); // remove o primeiro elemento
        }
    }

    // método para remoção do último elemento da estrutura
    removeBack() {
        if (this.isEmpty) {
            console.log("O deque está vazio.");
        } else {
            return this.#data.pop(); // remove o último elemento
        }
    }

    // método para consultar o início da estrutura
    peekFront() {
        if (this.isEmpty) {
            console.log("O deque está vazio.");
        } else {
            return this.#data[0]; // retorna o primeiro elemento
        }
    }

    // método para consultar o final da estrutura
    peekBack() {
        if (this.isEmpty) {
            console.log("O deque está vazio.");
        } else {
            return this.#data[this.#data.length - 1]; // retorna o último elemento
        }
    }

    // Getter para informar se a estrutura está ou não vazia
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

   
