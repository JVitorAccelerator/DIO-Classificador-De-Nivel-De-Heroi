while (true) {
    let nivel;
    let nome = prompt("Digite o nome do herói:");
    let XP = prompt("Digite a XP do herói:");



    switch (XP) {
        case (XP >= 1001 && XP <= 2000):
            nivel = 'Bronze';
            break;
        case (XP >= 2001 && XP <= 5000):
            nivel = 'Prata';
            break;
        case (XP >= 5001 && XP <= 7000):
            nivel = 'Ouro';
            break;
        case (XP >= 7001 && XP <= 8000):
            nivel = 'Platina';
            break;
        case (XP >= 8001 && XP <= 9000):
            nivel = 'Ascendente';
            break;
        case (XP >= 9001 && XP <= 10000):
            nivel = 'Imortal';
            break;
        case (XP >= 10001):
            nivel = 'Radiante';
            break;
        default:
            nivel = 'Ferro';
    }

    console.log("O Herói de nome "+nome+" está no nível de "+nivel);

    let end_program = prompt("Digite '0' para encerrar o programa ou digite qualquer tecla para voltar para o início");
    if (end_program === '0'){
        break;
    }
    console.log("Voltando para o início...");

}