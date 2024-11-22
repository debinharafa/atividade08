function podeAcessar(usuario) {
    const { idade, isAdmin, isBlocked } = usuario;
    return (idade > 18 || isAdmin) && !isBlocked;
}

console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));   // false
