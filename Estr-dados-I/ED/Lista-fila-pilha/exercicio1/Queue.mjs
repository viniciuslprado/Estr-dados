/* Exercício 1: Fila com Contador de Operações (Queue)
Desafio: Modifique a classe Queue para contar quantas operações foram feitas na
fila.
Regras:
1. Crie uma variável privada #operationCount para contar quantas operações
foram realizadas (enqueue e dequeue).
2. Adicione um método getOperationCount() que retorna o total de operações
feitas.
3. Teste essa funcionalidade simulando uma fila de atendimento ao cliente.
*/


export default class Queue {
    #data
    #operationCount

    constructor() {
        this.#data = [] // vetor vazio
        this.#operationCount = 0
    }

    // método para inserção na fila
    enqueue(val) {
        this.#data.push(val)
        this.#operationCount++
    }

    // método para remoção da fila
    dequeue() {
        this.#operationCount++
        return this.#data.shift()
    }

    // getter para informar se a fila está ou não vazia
    get isEmpty() {
        return this.#data.length === 0
    }

    // método que imprime a fila (para efeitos de depuração)
    print() {
        let output = '[ '
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== '[ ') output += ', '
            output += `(${i}): ${this.#data[i]}`
        }
        return output + ' ]'
    }

    // método para contar as operações
    getOperationCount() {
        return this.#operationCount
    }
}