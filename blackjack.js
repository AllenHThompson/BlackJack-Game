/*
4 suits of 13 CARDS
create matrix of 4 suits(i) and 13 cards (j) create random number from 1 to 4 to index suit array and random number from 1 to 13 to index card array

if you draw and ace complete a calculation that returns the value of 11 as long as you don't go over 21 else return 1

???WILL ROUNDING DOWN REDUCE THE CHANCE OF HITTING THE 52ND CARD??
var randomScore = Math.floor(Math.random() * 52);
****************
First, let's think about how the random value between 1 and 52 relates to a deck of cards.

(a) Let's say that scores between 1 and 13 represent Hearts.

(b) Let's say that scores between 14 to 26 represent Diamonds.

(c) Let's say that scores between 27 to 39 represent Clubs.

(d) Let's say that scores between 40 to 52 represent Spades.

If you get a score of 34, this card has the suit Clubs. How can we translate 34 to a score of between 0 and 12 for Clubs?

34 % 13 will give you a value of 8. Why? Because 34 divided by 13 equals 2, with 8 remainder.

If you get a score of 41, we should think 41 % 13, and the value will be 2.


THIS WILL GIVE US A RANDOM # BETWEEN 0 AND 12;
var deal = Math.floor(Math.random() * 52);
var final = deal % 13
console.log(final);
************************
We've nearly finished thinking through how to deal a card and give it a proper blackjack value. We've gone from getting a random value between 1 and 52 to now having a value between 0 and 12. And we know that each of the 13 unique values between 0 and 12 is a particular card in a suit. Now we have to worry about specific values. First, we need to define some things:

(a) A score of 0 is the King.

(b) A score of 11 is the Jack.

(c) A score of 12 is the Queen.

They all have values of 10 in blackjack, not 0, 11 or 12!
****************
GIVE A RANDOM NUMBER B/T 1 AND 40 IF PRINTS IF IS ODD OR EVEN

var outcome = "";
var deal = Math.floor(Math.random() * 40);
if (deal % 2 === 0)
    outcome = "even";
else
    deal = "odd";
*/
/*
1 - 13 hearts, 14 - 26 diamonds, 27 - 39, clubs, 40 - 52 spades
******************
// Define a function called deal
// It should return a random number between 1 and 52


// Declare two variables
// For both variables, assign values gotten by calling the function
function deal(){
    var card = Math.floor(Math.random() * 52 + 1);
    return card;
}
var card1 = deal(card);
var card2 = deal(card);
function deal(){
	    var card = Math.floor(Math.random() * 52);
	    return card;
	}
	var card1 = deal();
	var card2 = deal();
function score(){
    var sum = card1 + card2
    return sum;
}
console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score());
        // Our deal function will return a random card
        function deal(){
            var card = math.floor(math.random) * 52 + 1)
            return card;
        }



        // Deal out our first hand by declaring variables card1 and card2
        var card1 = deal();
        var card2 = deal();



        // Define a function getValue that returns the remainder when card
        // is divided by 13
        function getValue(card){
            var worth = card % 13;
            return worth;
        }


        // Return the score of our hand
        function score(){
            var score = card1 + card2
            return score;
        }
        console.log("You have cards " + card1 + " and " + card2 +
                " for a score of " + score());
                // Our deal function will return a random card
                function deal(){
                    var card = Math.floor(Math.random() * 52 + 1);
                    return card;
                }



                // Deal out our first hand by declaring variables card1 and card2
                var card1 = deal();
                var card2 = deal();



                // Define a function getValue that returns the remainder when card
                // is divided by 13
                function getValue(card){
                    card1 = card1 % 13;
                    card2 = card2 % 13;
                    return card1;
                    return card2;
                }


                // Return the score of our hand
                function score(getValue){
                    var score = card1 + card2
                    return score;
                }
                console.log("You have cards " + card1 + " and " + card2 +
                        " for a score of " + score());     
*/

var card = { suit: 'Diamond', point: 10};

//HOW TO YOU REPRESENT A card

//GIVEN AN ARRAY OF CARDS HOW DO CALCULATE THE POINTS

//RESHUFFLE THE DECK

//MAKE AN ARRAY OF CARDS

//ARRAY.POP TO SIMULATE DEALING A CARDS

//IMPLIMENT A SHUFFLE FUNCTION

//ACE CAN REPRESENT 11 OR 1 HOW TO YOU DISTIGUISH THIS
