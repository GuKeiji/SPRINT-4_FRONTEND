// Declarar uma variável qualquer, que receba um objeto vazio.
var vazia = new Object();
//console.log(vazia);

////////////////////////////////

var pessoa = new Object();
pessoa.nome = "Gustavo";
pessoa.sobrenome = "Keiji";
pessoa.sexo = "Masculino";
pessoa.idade = 17;
pessoa.altura = 1.75;
pessoa.peso = 60;
pessoa.andando = false;
pessoa.caminhouQuantosMetros = 0;

pessoa.fazerAniversario = function(){
    pessoa.idade += 1;
}

pessoa.andar = function(quantidadeMetros){
    pessoa.caminhouQuantosMetros += quantidadeMetros;
    pessoa.andando = true;
}

pessoa.parar = function(){
    pessoa.andando = false;
}

pessoa.nomeCompleto = function(){
    return "Olá, meu nome é " + pessoa.nome + " " + pessoa.sobrenome +"!";
}

pessoa.mostrarIdade = function(){
    return "Olá, eu tenho " + pessoa.idade +" anos!"
}

pessoa.mostrarPeso = function(){
    return "Eu peso " + pessoa.peso + " Kg."
}

pessoa.mostrarAltura = function(){
    return "Minha altura é "+ pessoa.altura +"m."
}

console.log(pessoa.nomeCompleto());
console.log(pessoa.mostrarIdade());
console.log(pessoa.mostrarPeso());
console.log(pessoa.mostrarAltura());

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
console.log(pessoa.mostrarIdade());

pessoa.andar(5);
pessoa.andar(2);
pessoa.andar(3);
console.log(pessoa.caminhouQuantosMetros);
// console.log(pessoa.andando)

if (pessoa.andando == true) {
    pessoa.parar();
}

console.log(pessoa.andando)

console.log(pessoa.caminhouQuantosMetros);

pessoa.apresentacao = function(){
    let artigo = "o";
    let idade = "anos";
    let distancia = "metros"; 
    if (pessoa.sexo == "Feminino") {
        artigo = "a";
    }
    if (pessoa.idade == 1) {
        idade = "ano";
    }
    if (pessoa.caminhouQuantosMetros == 1) {
        distancia = "metro";
    }
    return `Olá, eu sou ${artigo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${idade}, ${pessoa.altura}m, meu peso é ${pessoa.peso}Kg e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${distancia}!`;
}

console.log(pessoa.apresentacao());
