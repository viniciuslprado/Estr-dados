/****************************************************************
    ESTUTURA DE DADOS DEQUE
    
    - Deque = Double-Ended Queue (fila de duas pontas)
    - Deque é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (insertFront/insertBack) e desenfileiramento (removeFront/
      removeBack), acontecendo em qualquer uma das extremidades da estrutura.
    - Como consequência, o deque NÃO SEGUE o princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação dos deques são situações em que filas precisam aceitar
      a inserção de itens prioritários e a desistência do último item.
*/

export default class Deque {
    #data // vetor privado, ele não sabe que será um vetor

    constructor() {
        this.#data = []// iniciando vetor vazio, e sabe que agora é vetor
    }

    // método para inserção no inicio da estrutura
    insertFront(val) { // nome do nosso metodo
        this.#data.unshift(val) //unshift é um método que insere um elemento na posição zero
    }
    
    //metodo para inserção no final da estrutura
    insertBack(val) {
        this.#data.push(val) // push é um método que insere um elemento no final do vetor
    }
    
    //método para remoção do primeiro elemento da estrutura
    removeFront() {
        return this.#data.shift() // shift é um método que remove o primeiro elemento do vetor
    }

    //metodo para remoção do último elemento da estrutura
    removeBack() {
        return this.#data.pop() // pop é um método que remove o último elemento do vetor
    }

    // metodo para consultar o inicio da estrutura
    peekFront(){
        return this.#data[0]
    }

    //metodo para consultar o final da estrutura
    peekback(){
        return this.#data[this.#data.length - 1] // this.#data é meu vetor e  length - 1 é a ultima posição.
    }

    //Getter para informar se a estrutura está ou não vazia
    get isEmpty(){
        return this.#data.length === 0
    }

    //Método que imprime a estrutura(para efeitos de depuração)
    print(){
        let output = "[ "
        for( let i = 0; i < this.#data.length; i++){
            if( output !== "[ "){
                output += " , "
            }
            output += `(${i}): ${this.#data[i]}`
        }
        return output + " ]"
    }
}