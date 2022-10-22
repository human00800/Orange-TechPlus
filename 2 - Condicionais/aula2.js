/*  Boolean = verdadeiro/falso

=== significa igualdade

CONDICIONAIS

+ = mais
- = menos
* = multiplicação
/ = divisao
(variavel) = if (se)
(!variavel) = else (se nao)

*/


const numero = 0;
const numeroDivisivelPor5 = numero % 5 === 0;
if (numero === 0) {
    console.log('O NUMERO É INVALIDO');
} else if (numeroDivisivelPor5) {
    console.log("SIM");
} else {
    console.log("NÃO");
} 
