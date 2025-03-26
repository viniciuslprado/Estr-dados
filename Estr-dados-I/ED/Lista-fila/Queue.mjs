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