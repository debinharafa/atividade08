function verificarIdade(idade) {
    return idade < 18 ? "Menor de idade" : "Maior de idade";
}

console.log(verificarIdade(15)); // "Menor de idade"
console.log(verificarIdade(18)); // "Maior de idade"
console.log(verificarIdade(21)); // "Maior de idade"
