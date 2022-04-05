"use strict";

/**
 * Represents a singlular die. Can be rolled.
 * @class Die
 */
class Die {
  /**
   * Creates an instance of Die.
   * @param {number} [sides=6] - number of sides the die has (defaults to 6)
   */
  constructor(sides = 6) {
    this.sides = sides;
    // TODO: implement timesRolled in roll() function
    this.timesRolled = 0;
    this.history = {};
    // TODO: add roll history on die using calculated literal properties on objects (1: roll, 2: roll,)
    // TODO: add unique id on die
  }

  // TODO: implement static Die.create() function
  static create(num = 1, sides = 6) {
    let dice = [];
    for (let i = 0; i < num; i++) {
      let d = new Die(sides);
      dice.push(d);
    }
    return dice;
  }


  /**
   * Rolls the die once and returns the result
   * @return {number} Numerical result of the roll 
   */
  roll() {
    const result = Math.floor(Math.random() * this.sides) + 1
    console.debug(`roll() ${this.sides} sided die => ${result}`);
    return result;
  }

  /**
   * Rolls the die *n* times, calling {@link Die.roll() .roll()} each time.
   * @param {number} n - Number of rolls
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

  addTo(bag) {
    bag.insert(this);
  }

  // TODO: getter for the roll history
  // TODO: setter for the roll history

  // TODO: function that returns which bag the die is in
  whichBag() { }
  // TODO: function that returns which player owns the die
  whichPlayer() { }
}

/**
 * A bag of dice. Contains {@link Die} objects.
 * @class DiceBag
 */
class DiceBag {
  /** Creates an instance of DiceBag. */
  constructor() {
    /**
     * Array containing dice in the bag
     * @type {Die[]}
     */
    this.contents = [];
  }
  // TODO: create getter and setter for the sides in the bag
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
   * @param {Die[]} diceArray - array of Die objects to fill the bag with.
   */
  fill(diceArray) {
    this.contents.push(...diceArray);
  }

  /**
   * Empties the bag's contents of all dice.
   * The contents are completely reset.
   */
  empty() {
    this.contents = [];
  }

  /**
   * Rolls all the dice in a bag.
   * Returns an array of numbers with the roll results. 
   * @return {*} Array of numbers representing the roll results
   */
  rollAll() {
    let results = [];
    for (const d of this.contents) {
      let roll = d.roll();
      results.push(roll);
    }
    return results;
  }

  /**
   * Rolls all the dice in a bag *n* times, calling {@link DiceBag.rollAll() rollAll()} each time.
   * @param {number} n - number of times to roll each dice in the bag
   * @return {[number[]]} Array nesting *n* arrays of roll results
   */
  rollAllN(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
      const rolls = this.rollAll();
      results.push(rolls);
    }
    return results;
  }
}

class Player {
  // TODO: assign bag to a player

}

class Game { }