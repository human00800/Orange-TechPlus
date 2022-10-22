/* Faça um programa para calcular o valor gasto de combustivel em uma viagem.

Você terá 3 variaveis. Sendo elas: 

1 - preço do combustivel;

2 - valor medio de combustivel por KM;

3 - distancia em KM da viagem;

Imprima no console o valor que será gasto em combustivel para realizar esta viagem.

*/


const precoCombustivel = 4.59;

const combustivelKm = 1;

const distanciaKm = 100;



const litrosKm = distanciaKm / combustivelKm;
const valorGasto = litrosKm * precoCombustivel;



console.log(valorGasto.toFixed(2));


