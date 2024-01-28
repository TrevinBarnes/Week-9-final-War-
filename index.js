
/* Deal 26 Cards to each Player from a Deck of 52 cards.
Iterate through the turns where each Player plays a Card.
The Player who played the higher card is awarded a point.
Ties result in zero points for both Players.
After all cards have been played, display the score and declare the winner.
*/

//card - to get 4 suits make a separate array before the cards array
//deck - .shift() - removes first item in an array
//properties- use while loop to run game (runs till condition is false)
//players- can use modules to determine player one or two (modules - determine odd or even)


//needed aspects for the game

class Cards{
    constructor(suit,number){
        this.suit=suit;
        this.number=number;
        this.value = this.getValue(number);
    } 
    getValue(number){ // gives letters numerical value
        if(number === 'A')return 14;
        if(number === 'K')return 13;
        if(number === 'Q')return 12;
        if(number === 'J')return 11;
    }

}

class Deck{
    constructor(){
        this.Cards = this.generateDeck();
        this.deck = [];
    }
     
    generateDeck(){
        const suit = ['H','C','D','S']//array for the 4 suits
        const number = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];// card values in a deck used 14 instead of 1 because A beats K 
        for (let i = 0; i < suit.length; i++){ // creates loops to bring the arrays together into one big array
            for (let x = 0; x < number.length; x ++){
                this.deck.push(new Cards(number[x],suit[i]));
            }
        }console.log(this.generateDeck);//doesn't show anything
    }


    shuffle(){ // takes class of cards, which should be the combined arrays of suit and number, and should start the shuffle from the last property in the array 
        for(let i =this.Cards.length - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i+1))
            const oldValue = this.Cards[newIndex]
            this.Cards[newIndex] = this.Cards[i]
            this.Cards[i] = oldValue
        }
    }
    
    distribute(){ //splits shuffled deck in half and distributes between the two players
        this.shuffle;
        const deckMidpoint = Math.ceil(deck.generateDeck / 2)
        player1Deck = new Deck (deck.cards.slice(0, deckMidpoint))
        player2Deck = new Deck (deck.cards.slice(deckMidpoint, deck.generateDeck))
    }
}

/*
function newDeck() {
    return suit.flatMap(suit =>{
        return number.map(number =>{
            return new Cards(suit, number)
        })
    })
}
console.log();
*/

class players{
    constructor(player1,player2){
        this.player1 = player1
        this.player2 = player2
    }    
}

//game code 

//random number Generator
//function getRandomInt(max) {
//return Math.floor(Math.random() * max);
//}
class Game{
    constructor(){
        player1Card = player1Deck.pop();
        player2Card = player2Deck.pop();
    }

    startGame(){// need to create the game play 
        while(player1Deck > 0 && player2Deck > 0){//take both decks and take first card
            return (player1Card, player2Card)// should play the first card from each players deck
        }
    }
 
    rules(){
    // player with the higher card wins 
    // player with score of 27 wins due to having majority and cards are not reused
    // below should compare the cards
        let p1score = 0
        let p2score = 0
        if(player1Card > player2Card){
            p1score = +1
            console.log('player1 +1 point'); 
        }else{
            p2score = +1
            console.log('player2 +1 point');
        }
    }//converts the played cards into score 
    
    winner(){ // should check for the scores of each player, once a player hits a score of 27 then it should declare them the winner
        if (p1score === 27){
            console.log('player 1 is the winner')
        } else if (p2score === 27) {
            console.log('player 2 is the winner')
        } else (p1score != 27 , p2score != 27 );{
            console.log('')
        }

    }
}

const warGame = new Game();
warGame.startGame();