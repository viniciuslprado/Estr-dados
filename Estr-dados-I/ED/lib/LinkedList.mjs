//Classe que representa a unidade de armazenamento da lista encadeada

class Node{
    constructor(val){
        this.data = val//informação relevante para o usuário
        this.next = null//ponteiro para o próximo nodo da sequencia
    }
}

//Classe que representa a estrutura de dados da lista encadeada
export default class LinkedList{
    #head //inicio da lista (cabeça)
    #tail //fim da lista (cauda)
    #count //quantidade de nodos da lista

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }   

    //Getter que retorna-se a lista esta vazia ou não
    get isEmpty(){
        return this.#count === 0
    }

    //Getter que retorna a quatidade de elementos da lista
    get count(){
        return this.#count
    }

    //metodo para inserir um nodo em qualquer posição da lista
    insert(pos, val){
        //criar o nodo para armazenar o valor pretendido
        const inserted = new Node(val)

        //1º caso: a lista está vazia
        if(this.isEmpty){
            this.#head = insertedn//1° nodo da lista
            this.#tail = inserted//ultimo nodo da lista
        }

        //2º caso: lista não está vazia e inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head = inserted
        }

    }
}