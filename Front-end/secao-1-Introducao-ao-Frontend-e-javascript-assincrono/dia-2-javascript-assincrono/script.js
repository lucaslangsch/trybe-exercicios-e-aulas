// new Promise((resolve, reject) => {})

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });
// console.log(resolvedPromise());// Retorna 'pending' porque o tempo de execução do código é menor que o tempo de chamada da callback, se chamar apenas a timeout() nada aparece, nem a pendência
  // promise rejeitada retornando um objeto de erro
  resolvedPromise().then((response) => { // Comando .then() para aguardar o tempo da promisse
    console.log(`O número gerado é ${response}`);
  });
 
// Promessa rejeita ----------------
const rejectedPromise = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber();
    reject(new Error(`O número ${randomNumber} é inválido.`));
  }, 1000);
});
rejectedPromise()
  .then((response) => { // Comando .then() para aguardar o tempo da promisse
    console.log(`O número gerado é ${response}`);
  })
  .catch((error) => { // Comando .catch() para capturar o erro
    console.log(error.message); // .message retorna apenas a mensagem do erro, sem dar erro no terminal
  })