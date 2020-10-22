
function makeDeck(){

    const myDeck = {
        deck:[],
        values:"2,3,4,5,6,7,8,9,10,A,J,K,Q",
        suits:['heart', 'diamond', 'clover', 'sped'],
        drawnCard:[],
        initializeDeck(){
            const {suits, values} = this;
            for (let suit of suits){
                for (value of values.split(',')){
                    this.deck.push({
                        suit,
                        value
                    })
                }
            }
        },
        drawCard(){
            const card =  this.deck.pop();
            this.drawnCard.push(card);
            return card;
        }

    }

    return myDeck

}