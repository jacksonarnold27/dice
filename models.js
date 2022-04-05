"use strict";

/** DICE
 * user should be able to roll the die
 * user should have a bag of dice that holds dice
 */

/**
 * Represents a singlular die.
 * @class Die
 */
class Die {
  /**
   * Creates an instance of Die.
   * @param {number} [sides=6] - number of sides the die has (defaults to 6)
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
  /** Creates an instance of Bag. */
  constructor() {
    /**
     * Array containing dice in the bag
     * @type {Die[]}
     */
    this.contents = [];
  }

  /**
   * Insert a Die object into the bag.
   * Technically supports inserting multiple dice via rest/spread operators.
   * @param {Die} die - the Die object being inserted into the bag.
   */
  insert(...die) {
    this.contents.push(...die);
  }

  /**
   * Fill the bag with an array of Die objects.
   * @param {Die[]} dice - array of Die objects to fill the bag with.
   */
  fill(dice) {
    this.contents.push(...dice);
  }

  /**
   * Empties the bag's contents of all dice.
   * The contents are completely reset.
   */
  empty() {
    this.contents = [];
  }
}

class Player {
  // TODO: assign bag to a player]]\

}

class Game { }