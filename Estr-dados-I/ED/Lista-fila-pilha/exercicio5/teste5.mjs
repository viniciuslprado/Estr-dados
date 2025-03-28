import { Deque } from './Deque.mjs';

const carrinho = new Deque();

// Inserindo itens de limpeza
carrinho.insertFront("Detergente");
carrinho.insertBack("Sabão em pó");
carrinho.insertFront("Desinfetante");
carrinho.insertBack("Água sanitária");

// Exibindo o carrinho de compras
console.log("Carrinho inicial:", carrinho.print())

// Tentando inserir um item duplicado
carrinho.insertBack("Sabão em pó");

// Exibindo o carrinho de compras
console.log("Carrinho:", carrinho.print())

// Consultando o primeiro e o último item com peek
console.log("Primeiro item do carrinho:", carrinho.peekFront());
console.log("Último item do carrinho:", carrinho.peekBack());

// Removendo itens
console.log("Removendo item do início:", carrinho.removeFront());
console.log("Removendo item do final:", carrinho.removeBack());

// Exibindo o carrinho após remoções
console.log("Carrinho após remoções:", carrinho.print());

// Verificando se o carrinho está vazio
console.log("O carrinho está vazio?", carrinho.isEmpty);

// Removendo todos os itens
carrinho.removeFront();
carrinho.removeBack();

// Verificando se o carrinho está vazio após remoções
console.log("O carrinho está vazio?", carrinho.isEmpty);
