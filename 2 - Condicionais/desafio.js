// Faça um programa para calcular o valor gasto de combustivel em uma viagem.

//Você terá 5 variaveis. Sendo elas: 
//
//  1 - Preço do etanol;
//  2 - Preço da gasolina;
//  3 - O tipo de combustivel que esteja no veiculo;
//  4 - Consumo medio de combustivel por KM;
//  5 - Distancia em KM da viagem;

//Imprima no console o valor que será gasto para realizar esta viagem.


const precoEtanol = 3.98;
const precoGasolina = 4.59;
const consumoKm = 10;
const distanciaViagem = 100;
const tipoCombustivel = 'etanol';


const consumoMedio = distanciaViagem / consumoKm;


if (tipoCombustivel === 'etanol') {
    const valorGasto = consumoMedio * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else  {
    const valorGasto = consumoMedio * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
