const calcularDesconto = (precoOriginal, porcentagemDesconto) => 
    precoOriginal - (precoOriginal * porcentagemDesconto / 100);

console.log(calcularDesconto(100, 10)); // 90
console.log(calcularDesconto(250, 20)); // 200
