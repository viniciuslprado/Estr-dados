/*Exercício 2: Pilha com Histórico de Remoções (Stack)
Desafio: Modifique a classe Stack para armazenar um histórico dos elementos que
foram removidos (pop).
Regras:
1. Crie um array privado #historyData para armazenar os elementos removidos.
2. Adicione um método history() para retornar os elementos que já foram
retirados da pilha.
3. Teste essa funcionalidade simulando uma pilha de navegação em um
navegador (ex: páginas visitadas e removidas).
*/

export default class Stack {
    #data // Vetor privado 
    #historyData // Vetor privado 

    constructor() {
        this.#data = []; 
        this.#historyData = []; 
    }

    // Método para inserção no vetor
    insert(val) {
        this.#data.push(val);
    }

    // Método para remoção do vetor
    remove(){
        if (this.isEmpty) return null;
        const removido = this.#data.pop();
        this.#historyData.push(removido); // Armazena o item removido no histórico
        return removido;
    }

    // Método para consultar o topo da pilha (último elemento)
    peek() {
        return this.#data[this.#data.length - 1];
    }

    // Getter para informar se a pilha está vazia
    get isEmpty() {
        return this.#data.length === 0;
    }

    // Método que imprime a pilha (para efeitos de depuração)
    print() {
        return JSON.stringify(this.#data);
    }

    // Método para retornar o histórico de remoções
    History() {
        return this.#historyData; // Retorna o histórico diretamente
    }
}



