var isTruthy = (arg) => {
    return !!arg;
}
////
console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(NaN));
console.log(isTruthy(''));
////
console.log(isTruthy(true));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(42));
console.log(isTruthy("foo"));
console.log(isTruthy(new Date()));
console.log(isTruthy(-42));
console.log(isTruthy(3.14));
console.log(isTruthy(-3.14));
console.log(isTruthy(Infinity));
////
var carro = new Object();
carro.marca = "Fiat"
carro.modelo = "Uno"
carro.placa = "AAA-000"
carro.ano = 2017
carro.cor = "Amarelo"
carro.quantasPortas = 4
carro.assentos = 5
carro.quantidadePessoas = 0

carro.mudarCor = (corNova) => {
    carro.cor = corNova;
}

carro.obterCor = _ => carro.cor

carro.obterModelo = _ => carro.modelo

carro.obterMarca = _ => carro.marca

carro.obterMarcaModelo = _ => `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`

carro.adicionarPessoas = (numeroPessoas) => {
    let reset = carro.quantidadePessoas;
    let cabem = 5 - carro.quantidadePessoas;
    let pessoas = "pessoas";
    if (carro.quantidadePessoas >= 5) {
        return "O carro já está lotado!";
    }
    carro.quantidadePessoas += numeroPessoas;
    if (carro.quantidadePessoas > 5) {
        if (cabem == 1) {
            pessoas = "pessoa";
        }
        carro.quantidadePessoas = reset
        return `Só cabem mais ${cabem} pessoas!`
    }
    return `Já temos ${carro.quantidadePessoas} pessoas no carro!`;
}

carro.tirarPessoas = (quantidade) => {
    let reset = carro.quantidadePessoas;
    if (carro.quantidadePessoas <= 0) {
        return `Já não tem ninguém no carro`
    }
    carro.quantidadePessoas -= quantidade
    if (carro.quantidadePessoas < 0) {
        carro.quantidadePessoas = reset
        return "Você não pode tirar mais pessoas!"
    }
    return `Há ${carro.quantidadePessoas} pessoas no carro!`
}

// Qual a cor atual do carro?
console.log(carro.obterCor())

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho")

// E agora, qual a cor do carro?
console.log(carro.obterCor())

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo")

// E agora, qual a cor do carro?
console.log(carro.obterCor())

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2))

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4))

// Faça o carro encher.
console.log(carro.adicionarPessoas(3))

// Tire 4 pessoas do carro.
console.log(carro.tirarPessoas(4))

// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10))

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas)
