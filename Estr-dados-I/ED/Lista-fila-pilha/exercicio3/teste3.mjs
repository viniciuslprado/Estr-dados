import Deque from './Deque.mjs'

// Criando um deque com capacidade para 5 alimentos
const deque = new Deque(5)

// Inserindo alimentos
deque.insertFront("Maçã")
deque.insertBack("Banana")
deque.insertFront("Laranja")
deque.insertBack("Uva")
deque.insertFront("Pera")

// Mostrando todos elementos do deque adicionados
console.log("Deque inicial: ", deque.print())

// Tentando inserir um alimento a mais (deve exibir erro)
deque.insertBack("Abacaxi")

// Exibindo o deque
console.log("Deque após inserções: ", deque.print()) // Deve mostrar os 5 primeiros alimentos

// Consultando o primeiro e o último alimentos com peek
console.log("Primeiro alimento:", deque.peekFront())
console.log("Último alimento:", deque.peekBack())

// Removendo alimentos
console.log("Removendo alimento do início:", deque.removeFront())
console.log("Removendo alimento do final:", deque.removeBack())

// Exibindo o deque após remoções
console.log("Deque após remoções:", deque.print()) 

// Verificando se o deque está vazio
console.log("O deque está vazio?", deque.isEmpty)

// Removendo todos os alimentos
deque.removeFront()
deque.removeBack()
deque.removeBack()

// Verificando se o deque está vazio após remoções
console.log("O deque está vazio após todas as remoções?", deque.isEmpty)
