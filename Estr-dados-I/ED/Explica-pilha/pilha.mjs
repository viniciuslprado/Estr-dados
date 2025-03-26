let pilha = [10]

pilha.push(10)
pilha.push(20)

console.log(pilha)

pilha[0] = 5

console.log(pilha)


//PALINDROMO

let frase = "Socorram-me, subi no ônibus em Marrocos"

let vetor = []

for(let i = 0; i < frase.length; i++){
    vetor.push(frase.charAt(i))
}

console.log(vetor)

vetor.unshift("X")

let reverso = " "

while(vetor.length > 0){
    reverso += vetor.pop()
}

console.log(reverso)