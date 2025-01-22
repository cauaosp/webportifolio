function gerarSequenciaFibonacci(n) {
  let sequencia = [0, 1];
  while (sequencia[sequencia.length - 1] < n) {
    let proximoNumero = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    sequencia.push(proximoNumero);
  }
  return sequencia;
}

function verificarPertence(sequencia, n) {
  return sequencia.includes(n);
}

function main() {
  const readline = require('node:readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`Digite um número: `, numero => {
    console.log(`Você digitou: ${numero}`);
    let sequencia = gerarSequenciaFibonacci(numero);
    let resultado = verificarPertence(sequencia, numero);
    console.log(`A sequência de Fibonacci até ${numero} é: ${sequencia}\nO número ${numero} ${resultado ? 'pertence' : 'não pertence'} à sequência.`);
    rl.close();
  });
}

main();