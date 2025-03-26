/*
    Um banco tem um sistema de senhas para organizar o atendimento ao público.
    Os clientes chegam e pegam uma senha. A ordem de chegada é:

    Cliente 101
    Cliente 102
    Cliente 103
    Cliente 104
    Cliente 105

    1-) Crie um objeto filaBancoBanco e insira os clientes na ordem correta.

    2-) Imprima a filaBanco antes do atendimento.

    3-) O primeiro cliente foi chamado e atendido. Remova esse cliente da filaBanco e imprima o nome dele.

    4-) Imprima a filaBanco após a remoção.

    5-) Dois novos clientes pegaram senha:
    
    Cliente 106
    Cliente 107
    
    Adicione-os à filaBanco.

    6-) Imprima a filaBanco após as alterações.

    7-) Qual é o próximo cliente a ser atendido? Mostre o comando e o número da senha.

    8-) O atendente chamou o próximo cliente. Remova essa pessoa e imprima a filaBanco atualizada.

    */

    import Queue from "../lib/Queue.mjs";

    let filaBanco = new Queue()

    console.log("A filaBanco está vazia? ", filaBanco.isEmpty)
    console.log(filaBanco.print())

    filaBanco.enqueue("Cliente 101")
    filaBanco.enqueue("Cliente 102")
    filaBanco.enqueue("Cliente 103")
    filaBanco.enqueue("Cliente 104")
    filaBanco.enqueue("Cliente 105")

    console.log(filaBanco.print())

    let atendido = filaBanco.dequeue()

    console.log("Quem foi atendido?", atendido)
    console.log(filaBanco.print())

    filaBanco.enqueue("Cliente 106")
    filaBanco.enqueue("Cliente 107")

    console.log(filaBanco.print())

    console.log("Próximo a ser atendido: ", filaBanco.peek())

    console.log("Quem foi atendido?", atendido)
    console.log(filaBanco.print())


