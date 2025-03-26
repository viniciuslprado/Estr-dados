/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    1-) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.*/

    import Queue from "../lib/Queue.mjs";
    let filaAeroporto = new Queue()
    filaAeroporto.enqueue("Passageiro A")
    filaAeroporto.enqueue("Passageiro B")
    filaAeroporto.enqueue("Passageiro C")
    filaAeroporto.enqueue("Passageiro D")
    filaAeroporto.enqueue("Passageiro E")

    //2-) Imprima a fila antes do início do embarque.
    console.log(filaAeroporto.print())

    //3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.
    let atendido = filaAeroporto.dequeue()
    console.log("Quem foi atendido?", atendido)

    //4-) Imprima a fila após a remoção.
    console.log(filaAeroporto.print())

    /*5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.*/
    filaAeroporto.enqueue("Passageiro F")
    filaAeroporto.enqueue("Passageiro G")
    filaAeroporto.enqueue("Passageiro H")

    //6-) Imprima a fila após as alterações.
    console.log(filaAeroporto.print())

    //7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.
    console.log("Próximo a embarcar: ", filaAeroporto.peek())

    //8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.
    filaAeroporto.dequeue()
    console.log(filaAeroporto.print())