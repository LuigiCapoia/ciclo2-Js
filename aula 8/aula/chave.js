let str = `Qualquer conteudo!`;
let str2 =`Uma outra string ${str}`;

console.log(str2);

//////////////////////////
//////////////////////////
// Arrays uma coleção de dados
//O array é constituido por elementos

//const frutas = ["uva", "banana", "laranja", "melancia"];//4

//let euGosto = `Eu gosto de ${frutas[3]}`
//console.log(frutas[0]);   // uva    // sempre começa do 0
//console.log(frutas[1]);   // banana
//console.log(frutas[2]);   // laranja
//console.log(frutas[3]);   // melancia

//console.log(euGosto)


const pessoa = [
    "José", //0
    23,     //1
    "Solteiro",  //2
    "Bola",   //3
    1.70,   //4
    cores = ["azul", "preto", "vermelho", "salmão", "ocre"] //5
];

let key = 3;
key++;

//console.log(pessoa.length);//lenngth tamanho do array/strings
console.log(pessoa[5][0]);// array bidimencional
//console.log(pessoa[5][key]);// ocre


// (function(p){
//     const jose = `Meu nome é ${pessoa[0]} eu tenho ${pessoa[1]} anos sou ${pessoa[2]}, jogo ${pessoa[3]} e tenho ${pessoa[4]}`;
// document.write(jose);
// })(pessoa)















