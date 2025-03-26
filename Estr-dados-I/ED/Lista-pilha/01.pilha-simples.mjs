/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
*/

import Stack from "../lib/Stack.mjs";

let pilha = new Stack();

pilha.insert(5)
pilha.insert(9)
pilha.remove()
pilha.insert(3)
pilha.insert(8)
pilha.remove()
pilha.remove()
pilha.insert(6)
pilha.insert()
pilha.insert(2)
pilha.remove()
pilha.insert(10)
pilha.insert(1)
pilha.remove()
pilha.remove()
pilha.insert(15)
pilha.remove()
pilha.remove()
    
console.log(pilha.print())