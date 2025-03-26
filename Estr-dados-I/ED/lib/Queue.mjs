/*
    ESTRUTURA DE DADOS FILA

    - Fila é uma lista linear de acesso restrito, que permite apenas as operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo
      no final da estrutura e a segunda no início da estrutura.
    - Como consequência, a fila funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeiro a sair).
    - A principal aplicação das filas são situações que envolvem o processamento de 
      tarefas por ordem de chegada.
*/

export default class Queue { 
    #data

    constructor(){
        //this usado para não precisar escrever Queue
        this.#data = [] // vetor vazio
    }

    // metodo para inserção na fila
    enqueue(val){
        //sem o this não consegue entrar 
        this.#data.push(val)
    }

    //metodo para remoção da fila
    dequeue(){
        return this.#data.shift()
    }
    
    // metodo para verificar o primeiro elemento da fila sem remover o elevento
    peek(){
        return this.#data[0]
    }

    // metodo para verificar se a fila está vazia
    get isEmpty(){
        return this.#data.length === 0
    }

    // metodo para imprimir a fila

    print(){
        let output = "[ "
        for (let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", "
            }
            output += `(${i}) : ${this.#data[i]}`
        }
        return output + " ]"
    }


}