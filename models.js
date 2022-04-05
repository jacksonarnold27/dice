"use strict";

/* IMPORTANT: I know that the singular of dice is die. I'll mainly use dice
  the plural, just as a way of keeping things consistent. */

/** DICE
 * user should be able to roll the dice
 * user should have a bag of dice that holds dice
 */

/**
 * Represents a singlular die.
 * It's called Dice. I know, it's plural. Get over it.
 * @class Dice
 */

// TODO: change Dice to Die
class Dice {
  /**
   * Creates an instance of Dice.
   * @param {number} [sides=6] - number of sides the dice has (defaults to 6)
   */
  constructor(sides = 6) {
    this.sides = sides;
    // TODO: add roll history on die
    // TODO: add unique id on die
  }

  /**
   * Rolls the die once
   * @return {number} Numerical result of the roll 
   */
  roll() {
    return Math.floor(Math.random() * this.sides) + 1;
  }

  /**
   * Rolls the die *n* times
   * @param {number} n - number of times the die is being rolled
   * @return {number[]} Array of numbers representing the results of the rolls
   */
  rollN(n) {
    const rolls = [];
    for (let i = 0; i < n; i++) {
      const roll = this.roll();
      rolls.push(roll);
    }
    return rolls;
  }

  // TODO: function that returns which bag the die is in
  whichBag() { }
  // TODO: function that returns which player owns the die
  whichPlayer() { }
}

class Bag {
  /**
   * Creates an instance of Bag.
   */
  constructor() {
    /**
     * @type {Dice[]} contents
     */
    this.contents = [];
  }

  /**
   *
   *
   * @param {Dice} dice - Dice objects to fill the bag with.
   */
  fill(...dice) {
    this.contents = dice;
  }
}

class Player {
  // TODO: assign bag to a player
}

class Game { }