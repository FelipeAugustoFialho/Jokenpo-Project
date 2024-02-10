const resultado = document.querySelector('.resultado');
const humanScore = document.querySelector('#humanScore');
const machineScore = document.querySelector('#machineScore');
const zerar = document.querySelector('.reset');


let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('Humano:' + human + 'Maquina:' + machine)

    if (human === machine) {
        resultado.innerHTML = 'EMPATE ! '
    } else if ((human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        resultado.innerHTML = 'Você ganhou !'
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        resultado.innerHTML = 'Você Perdeu ! '
    }

    function zerarPlacar() {
        humanScoreNumber = 0
        machineScoreNumber = 0
        humanScore.innerHTML = humanScoreNumber
        machineScore.innerHTML = machineScoreNumber
    }
    zerar.addEventListener('click', zerarPlacar);
}
