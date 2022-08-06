class Casino {
    constructor(name, fakeCoin) {
        this.timesPlayed = 0;
        this.money = 0;
        this.name = name;
        this.fakeCoin = fakeCoin;
    }

    playGame(betAmount) {

        this.timesPlayed += 1;

        if(Math.random() >= 0.5 && this.fakeCoin == false) {
            console.log("Player wins " + betAmount * (this.timesPlayed) + " dollars!");
            this.money += betAmount * this.timesPlayed;
            console.log("Current Winnings: " + this.money);
        } else {
            console.log(this.name + " wins!");
        }

        
    }
};

/* TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35); */

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", false);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS
/*
const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);
*/
