/*
    ESTRUTURA DE DADOS PILHA

    - Pilha é uma lista linear de acesso restrito, que permite apenas as operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/

export default class Stack{
    #data //vetor privado

    constructor(){
        this.#data = [] // vetor vazio
    }

    //metodo para inserção no vetor
    insert(val){
        this.#data.push(val)
        
    }

    //metodo para remoção do vetor
    remove(){
        // this.#data.pop() assim ele apenas tira e apaga.
        return this.#data.pop() // ele tira e retorna.
    }

    //metodo para consultar o topo da pilha(ultimo)
    peek(){
        return this.#data[this.#data.length - 1] 
    }

    //Getter para informar se a pilha esta vazia 
    get isEmpty(){
        return this.#data.length === 0
    }

    //Método que imprimi a pilha (para efeitos de depuração)
    print(){
        return JSON.stringify(this.#data)
    }
}

