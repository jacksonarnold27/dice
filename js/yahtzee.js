"use strict";

// EX:      https://cardgames.io/yahtzee/
// EX2:     https://cardgames.io/yahtzee/statistics/
// RULES:   https://www.dicegamedepot.com/yahtzee-rules/
// BOOKLET: https://www.hasbro.com/common/instruct/yahtzee.pdf

/** Scorecard Rules:
 * Upper Section:
 *    Ones, Twos, Threes, Fours, Fives, Sixes
 *    
 * Lower Section:
 *    Three of a Kind, Four of a Kind, Full House, Small Straight, Large Straight, Yahtzee, Chance
 * 
 */



class DiceCup extends DiceBag {
  constructor(params) {

  }
}

class Player {
  constructor() {
    this.name = "";
    this.number;
    this.scorecard = {
      ones: 0,
      twos: 0,
      threes: 0,
      fours: 0,
      fives: 0,
      sixes: 0,
      threeOfAKind: 0,
      fourOfAKind: 0,
      fullHouse: 0,
      smallStraight: 0,
      largeStraight: 0,
      yahtzee: 0,
      chance: 0,
      totalScore: 0
    };

  }
}

class Scorecard {

}




class Yahtzee {
  constructor(params) {

  }
  static isThreeOfAKind() {

  }
  static isFourOfAKind() {

  }
  static isFullHouse() {

  }
  static isSmallStraight() {

  }
  static isLargeStraight() {

  }
  static isYahtzee() {

  }
}


class DiceRoll {
  constructor() {
    this.roll = [];

  }

  static checkRoll() {

  }




  static scoreRoll(roll) {
    let output = {};
  }
}



// TODO: assign bag to a player
