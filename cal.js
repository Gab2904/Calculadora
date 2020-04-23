console.log("Calculadora -------")
var somaFunc = require("./somar");
var subFunc = require("./sub");
var multiFunc = require("./multi");
var divFunc = require("./div");


console.log("A soma é :",somaFunc(1,2));
console.log("A subtração é :", subFunc(5,4));
console.log("A multiplicação é :", multiFunc(6,6));
console.log("A divisão é :", divFunc(5,5));

console.log("Fim das operações básicas da calculadora")


