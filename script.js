
//Get random variable from computer player
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    switch(random){
        case 0:
            return 'ROCK'
        case 1:
            return 'SCISSORS'
        case 2:
            return 'PAPER'
    }
}