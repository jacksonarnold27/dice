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
    console.debug(`new Die(${sides})`);
    this.sides = sides;
    this.timesRolled = 0;
    this.history = {};

    // TODO: add unique id on die
  }

  /**
   * Adds a roll to the Die's roll history.
   * @private
   * @param {number} roll - the roll result to add to the die's history
   */
  #addToRollHistory(roll) {
    this.history[this.timesRolled] = roll;
    // console.debug(`#addToHistory() ${this.timesRolled}: ${roll}`);
  }

  /**
   * Creates a Die or an array of Die objects.
   * @param {number} [sides=6] - *(optional, defaults to 6)* number of sides the die has
   * @param {number} [n=1] - *(optional, defaults to 1)* number of dice created
   * @return {Die|Die[]} returns a Die object by default, returns an array of Die objects if creating multiple
   */
  static create(sides = 6, n = 1) {
    if (n === 1) {
      console.debug(`create() ${sides}-sided die`);
      return new Die(sides);
    }
    else {
      let dice = [];
      console.debug(`create() ${sides}-sided dice (${n})`);
      for (let i = 0; i < n; i++) {
        let d = new Die(sides);
        dice.push(d);
      }
      return dice;
    }
  }

  // TEMPLATES FOR EASY DIE CREATION
  static cube() { return new Die(6) }
  static d12() { return new Die(12) }
  static d20() { return new Die(20) }

  /**
   * Simulates a dice roll of a die with *sides* and returns the result.
   * @static
   * @param {number} sides - Number of sides the (fake) rolled die has
   * @return {number} Numerical result of the roll
   */
  static simulateRoll(sides) { return Math.floor(Math.random() + sides) + 1; }

  /**
   * Rolls the die once and returns the result.
   * @return {number} Numerical result of the roll 
   */
  roll() {
    this.timesRolled++;
    const result = Math.floor(Math.random() * this.sides) + 1
    console.debug(`roll() ${this.sides} sided die => ${result}`);
    this.#addToRollHistory(result);
    return result;
  }

  /**
   * Rolls the die *n* times, calling {@link Die.roll() .roll()} each time.
   * @param {number} n - Number of times rolled
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

  /**
   * Adds the die to a given DiceBag.
   * @param {DiceBag} bag - the {@link DiceBag} object to insert this die into.
   */
  addTo(bag) { bag.insert(this) }

  // TODO: function that returns which bag the die is in
  // bag() { }
  // TODO: function that returns which player owns the die
  // player() { }
}

/**
 * A Die object that is bound to a range between a min and max value.
 * 
 * ***EX***: new BoundedDie(3, 7) -> refers to a die that can only roll a number between 3 and 7
 * @class BoundedDie
 * @extends {Die}
 */
class BoundedDie extends Die {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }


  /**
   * Returns a random value between a range (min, max)
   * @param {number} min - minimum value
   * @param {number} max - maximum value
   * @return {number} resulting random number between min and max
   */
  static random(min = 0, max = 1) { return Math.floor(Math.random() * max) + min; }
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
  // TODO: create getter and setter for the sides of each die in the bag

  // TODO: add try/catch for functions to handle errors appropriately


  /**
   * Returns the Die at a given index in a DiceBag.
   * @param {number} index - index of Die
   * @return {Die} Die object
   */
  at(index) { return this.contents[index]; }

  /**
   * Insert a Die object into the bag.
   * 
   * Supports inserting multiple dice via rest/spread operators.
   * @param {Die} die - the {@link Die} object being inserted into the bag.
   */
  insert(...die) { this.contents.push(...die); }

  /**
   * Fill the bag with an array of Die objects.
   * @param {Die[]} diceArray - array of Die objects to fill the bag with.
   */
  fill(diceArray) { this.contents.push(...diceArray); }

  /**
   * Empties the bag's contents of all dice.
   * The contents are reset to an empty array.
   */
  empty() { this.contents = []; }

  /**
   * Rolls the die at a given index.
   * @param {number} index - index of the die to be rolled
   * @return {number} Numerical result of the roll
   */
  roll(index) { return this.contents[index].roll(); }

  /**
   * Rolls the die *n* times at a given index.
   * @param {number} index - index of the die to be rolled
   * @param {number} n - Number of times rolled
   * @return {number} Array of numbers representing roll results
   */
  rollN(index, n) { return this.contents[index].rollN(n); }

  /**
   * Rolls all the dice in a bag.
   * Returns an array of numbers with the roll results. 
   * @return {number[]} Array of numbers representing the roll results
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
   * @return {number[][]} Array nesting *n* arrays of roll results
   */
  rollAllN(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
      const rolls = this.rollAll();
      results.push(rolls);
    }
    return results;
  }

  /**
   * Rolls all dice in the bag and returns the sum of the results.
   * @return {number} Numerical sum of the dice rolls
   */
  rollAllSum() {
    let rolls = this.rollAll();
    let sum = rolls.reduce((prev, curr) => prev + curr, 0);
    return sum;
  }
}


// TODO: assign bag to a player
class Player { }

class Game { }