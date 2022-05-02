function teste(){
    alert("estou na function teste")
    return nome;
}
//teste();
// console.log(teste());

//let msg = (nome)=>{
//  return nome;
//}
//console.log(msg("jose"));

// (function(produto, preco){
//     alert("o produto é "+produto+ " e o preço e de R$ "+preco);
// })("biscoito", 2.35)// 2, 35 é 2.35

let v1 = prompt("digite o valor 1");
let v2 = prompt("digite o valor 2");
const soma = (valor1, valor2)=>{
    let resultado = Number(valor1) + Number(valor2);
    console.log(resultado);
}
soma(v1, v2)








