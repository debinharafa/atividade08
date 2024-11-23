# Documentação- Aula 08 (UC13) Que foi pedido em aula 

---


## **Questão 1**
```javascript

Foi pedido uma função chamada verificarIdade que recebe um número como parâmetro representando a

idade de uma pessoa e retorna.

/**
 * Verifica se uma pessoa é menor ou maior de idade.
 * 
 * @example
 * verificarIdade(15); // "Menor de idade"
 * verificarIdade(18); // "Maior de idade"
 * 
 * @param {Number} idade - Idade da pessoa.
 * @returns {String} Retorna "Menor de idade" ou "Maior de idade".
 */
function verificarIdade(idade) {
    return idade < 18 ? "Menor de idade" : "Maior de idade";
}
```

## **Questão 2**

```javascript

Foi pedido para 
criar uma função chamada "definirDiaDaSemana" que recebe um número (1 a 7) representando os dias da semana. A função deve retornar o nome do dia correspondente.

/**
 * Retorna o nome do dia da semana com base em um número.
 * 
 * @example
 * definirDiaDaSemana(3); // "Terça-feira"
 * definirDiaDaSemana(7); // "Sábado"
 * 
 * @param {Number} dia - Número representando o dia da semana (1 a 7).
 * @returns {String} Nome do dia da semana ou "Número inválido".
 */
function definirDiaDaSemana(dia) {
    switch (dia) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Número inválido";
    }
}

```

## **Questão 3**
```javascript
Foi pedido para Implementar uma função chamada parOuImpar que recebe um número como parâmetro e utiliza um operador ternário para retornar

/**
 * Verifica se um número é par ou ímpar.
 * 
 * @example
 * parOuImpar(10); // "Par"
 * parOuImpar(15); // "Ímpar"
 * 
 * @param {Number} numero - Número a ser verificado.
 * @returns {String} Retorna "Par" ou "Ímpar".
 */
const parOuImpar = (numero) => numero % 2 === 0 ? "Par" : "Ímpar";
```


## **Questão 4**

```javascript

Considere que você está verificando se um usuário pode acessar um sistema. Um usuário pode acessar o sistema se

/**
 * Verifica se um usuário pode acessar o sistema.
 * 
 * @example
 * podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }); // true
 * podeAcessar({ idade: 16, isAdmin: true, isBlocked: true });   // false
 * 
 * @param {Object} usuario - Objeto representando o usuário.
 * @param {Number} usuario.idade - Idade do usuário.
 * @param {Boolean} usuario.isAdmin - Indica se o usuário é administrador.
 * @param {Boolean} usuario.isBlocked - Indica se o usuário está bloqueado.
 * @returns {Boolean} Retorna `true` se o usuário puder acessar, caso contrário, `false`.
 */
function podeAcessar(usuario) {
    const { idade, isAdmin, isBlocked } = usuario;
    return (idade > 18 || isAdmin) && !isBlocked;
}
```

## **Questão 5**

```javascript

Foi pedido para criar uma arrow function chamada calcularDesconto que recebe dois argumentos

/**
 * Calcula o preço com desconto de um produto.
 * 
 * @example
 * calcularDesconto(100, 10); // 90
 * calcularDesconto(250, 20); // 200
 * 
 * @param {Number} precoOriginal - Preço original do produto.
 * @param {Number} porcentagemDesconto - Porcentagem de desconto a ser aplicada.
 * @returns {Number} Retorna o preço final após o desconto.
 */
const calcularDesconto = (precoOriginal, porcentagemDesconto) => 
    precoOriginal - (precoOriginal * porcentagemDesconto / 100);
    
