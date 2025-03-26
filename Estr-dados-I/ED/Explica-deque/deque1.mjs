import Deque from "../lib/deque.mjs";

let listaCompras = new Deque()
console.log("A lista está vazia?", listaCompras.isEmpty)
console.log("Lista de compras:", listaCompras.print())

//adicionando Alimentos --> inicio
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")

// adicionando Higiene --> final
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Sabão em pó")

console.log("Lista de compras:", listaCompras.print())

//adicionando depois de impresso
listaCompras.insertFront("Café")
listaCompras.insertBack("Amaciante")

//imprimindo lista
console.log("Lista de compras:", listaCompras.print())

//remover itens
let removido = listaCompras.removeBack()

//mostrando item removido
console.log({removido})

//imprimindo lista
console.log("Lista de compras: ", listaCompras.print())

// removendo primeiro elemento
removido = listaCompras.removeFront()
console.log({removido})

//imprimindo lista
console.log("Lista de compras: ", listaCompras.print())

//Olhar e imprimir o ultimo elemento
let ultimo = listaCompras.peekback()
console.log(ultimo)

//Olhar e imprimir o primeiro elemento
let primeiro = listaCompras.peekFront()
console.log(primeiro)

//imprimindo lista
console.log("Lista de compras: ", listaCompras.print())

