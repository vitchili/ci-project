function main(numero) {
    return factorialize(numero);
}

function factorialize(num) {
    if (num < 0)
        return 'Número negativo. Inválido';
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
module.exports = main;