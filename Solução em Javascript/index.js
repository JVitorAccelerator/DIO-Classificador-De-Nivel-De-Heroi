const readline = require('readline');

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve =>
    rl.question(query, answer => {
      rl.close();
      resolve(answer);
    })
  );
}

async function main() {
  while (true) {
    let nivel;
    let continuar = await askQuestion('Digite 0 para sair ou digite 1 para continuar: ');

    if (continuar === '0') {
      break;
    } else if(continuar==='1') {
      let nome = await askQuestion("Digite o nome do herói: ");
      let XP = await askQuestion("Digite a XP do herói: ");

      if (XP >= 10001) {
        nivel = 'Radiante';
      } else if (XP >= 9001) {
        nivel = 'Imortal';
      } else if (XP >= 8001) {
        nivel = 'Ascendente';
      } else if (XP >= 7001) {
        nivel = 'Platina';
      } else if (XP >= 5001) {
        nivel = 'Ouro';
      } else if (XP >= 2001) {
        nivel = 'Prata';
      } else if (XP >= 1001) {
        nivel = 'Bronze';
      } else {
        nivel = 'Ferro';
      }

      console.log("O Herói de nome " + nome + " está no nível de " + nivel);
    }
  }
}

main();
