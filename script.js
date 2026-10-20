
//random deciding suit(club,spades, etc)
//random deciding value(face cards given unique value)
//variable set to a suit based on first ran number
//variable set to value based on second random number
// card.src = `${value}_of_${suit}`
//const cardloc = document.getElementById("card-place")


class Card{
    #element
    #flipped
    constructor(val, suit){
        this.val = val;
        this.suit = suit;
        this.#element = document.createElement("img")
        this.flipped = false;
    }

    get pointVal(){
        if(this.val == "ace")return 11;
        if(["jack", "king", "queen"].includes(this.val))return 10;
        return Number(this.val);
    }

    get imgSrc(){
        if(this.flipped){
            return `images/card_back_red.png`
        }
        return `/images/${this.val}_of_${this.suit}.png`;
    }

    set flipped(val){
        this.#flipped = val;
        this.#element.src = this.imgSrc;
    }
    get flipped(){
        return this.#flipped;
    }

    get element(){
        return this.#element;
    }


}


class Deck{

    static values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "king", "queen"]
    static suits = ["diamonds", "spades", "clubs", "hearts"]

    constructor(){
        this.shuffle()

    }
    
    shuffle(){
        this.cards = [];
        for(let val of Deck.values){
            for(let suit of Deck.suits){
                this.cards.push(new Card(val, suit))
            }
        }
        let currentIndex = this.cards.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.cards[currentIndex], this.cards[randomIndex]] = [
            this.cards[randomIndex], this.cards[currentIndex]];
        }
        
    }

    dealCard(){
        return this.cards.pop()
    }


    //Glen: Draven i mean is really cool

    // display(val, suit){
    //     for(v in val){
    //     for(s in suit){
    //         this.cards.push(`${v}_of_${s}`)
    //         cardloc.src = `./images/${v}_of_${s}.png`
    //         console.log("It worked")
    //     }
    // }
    // }
    
}
// let rannumsuit = Math.floor(Math.random() * 4)+1
//     let rannumval = Math.floor(Math.random() * 13)+1
// let cardfind;
// if (rannumsuit == 1){
//     suit="diamonds"
// }else if(rannumsuit == 2){
//     suit = "clubs"
// }else if(rannumsuit == 3){
//     suit = "spades"
// }
// else{
//     suit = "hearts"
// }

// if(rannumval == 1){
//     val= "ace"
// }else if(rannumval == 2){
//     val = "2"
// }else if(rannumval == 3){
//     val="3"
// }else if(rannumval == 4){
//     val="4"
// }else if(rannumval == 5){
//     val = "5"
// }else if(rannumval == 6){
//     val = "6"
// }else if(rannumval == 7){
//     val = "7"
// }else if(rannumval == 8){
//     val= "8"
// }else if(rannumval == 9){
//     val = "9"
// }else if(rannumval == 10){
//     val="10"
// }else if(rannumval == 11){
//     val = "jack"
// }else if(rannumval == 12){
//     val = "king"
// }else{
//     val = "queen"
// }





// console.log(`${val}_of_${suit}.png`)
// cardfind = ""

