/*

Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
 */

alert("Insira dois números para realizarmos operações matemáticas.");
let numberOne = prompt("Insira o 1º número:");
let numberTwo = prompt("Insira o 2º número:");

// Operações matemáticas:
// let sum = Number(numberOne) + Number(numberTwo);
// alert(`A soma dos números é ${sum}.`);

// let sub = Number(numberOne) - Number(numberTwo);
// alert(`A subtração dos números é ${sub}.`);

// let mul = Number(numberOne) * Number(numberTwo);
// alert(`A multiplicação dos números é ${mul}.`);

// let div = Number(numberOne) / Number(numberTwo);
// alert(`A divisão dos números é ${div}.`);

// let res = Number(numberOne) % Number(numberTwo);
// alert(`O resto da divisão dos números é ${res}.`);

// Verificando se o nº é par:
// let sum = Number(numberOne) + Number(numberTwo);

// if (sum % 2 === 0) {
//     alert(`A soma é o número par ${sum}.`)
// } else {
//     alert(`A soma é o número ímpar ${sum}.`)
// }

if (numberOne === numberTwo) {
  alert(
    `Números iguais! O primeiro número é ${numberOne} e o segundo número é ${numberTwo}.`
  );
} else {
  alert(
    `Números diferentes! O primeiro número é ${numberOne} e o segundo número é ${numberTwo}`
  );
}
