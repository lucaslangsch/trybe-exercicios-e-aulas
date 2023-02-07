// Exercício 1
// const a = 3;
// const b = 4;

// const adicao = a + b;
// const subtracao = a - b;
// const multiplicacao = a * b;
// const divisao = a / b;
// const modulo = a % b;
// console.log(modulo);

// Exercício 2
// const a = 50;
// const b = 10;

// if (a < b) {
//   console.log(b);
// } else {
//   console.log(a);
// }

// Exercício 3
// const a = 50;
// const b = 100;
// const c = 200;
// if (a > b && a > c) {
//   console.log(a);
// } else if (b > c && b > a) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// Exercício 4
// const a = 0;

// if (a < 0) {
//   console.log('O numero e negativo');
// } else if (a > 0) {
//   console.log('O numero e positivo');
// } else {
//   console.log('O numero e zero')
// }

//Exercício 5
const a = 60;
const b = 60;
const c = -120;

if (a + b + c === 180) {
  console.log(true);
} else if (a + b + c <= 0) {
  throw new Error('Não é um objeto válido');
} else {
  console.log(false);
}