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
    console.debug(`#addToHistory() ${this.timesRolled}: ${roll}`);
  }

  /**
   * Creates a Die or an array of Die objects.
   * @param {number} [sides=6] - *(optional, defaults to 6)* number of sides the die has
   * @param {number} [amount=1] - *(optional, defaults to 1)* number of dice created
   * @return {Die|Die[]} returns a Die object by default, returns an array of Die objects if creating multiple
   */
  static create(sides = 6, amount = 1) {
    if (amount === 1) {
      console.debug(`create() ${sides}-sided die`);
      return new Die(sides);
    }
    else {
      let dice = [];
      console.debug(`create() ${amount} ${sides}-sided dice`);
      for (let i = 0; i < amount; i++) {
        let d = new Die(sides);
        dice.push(d);
      }
      return dice;
    }
  }

  static cube() { return new Die(6) }
  static d12() { return new Die(12) }
  static d20() { return new Die(20) }

  // TODO: condense roll and rollN functions into 1 function, roll with default parameter 1 (either returns a number or an array of numbers)

  /**
   * Rolls the die once and returns the result
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
   * @param {number} n - Number of rolls
   * @return {number[]} Array of numbers representing the results of the rolls
   */
  rollN(amount) {
    const rolls = [];
    for (let i = 0; i < amount; i++) {
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
  // whichBag() { }
  // TODO: function that returns which player owns the die
  // whichPlayer() { }
}

class WeightedDie extends Die { }


/**
 * A Die object that is bound to a range between a min and max value.
 * 
 * ***EX***: new BoundedDie(3, 7) refers to a die that can only roll a number between 3 and 7
 * @extends {Die}
 */
class BoundedDie extends Die {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
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
   * Insert a Die object into the bag.
   * 
   * Supports inserting multiple dice via rest/spread operators.
   * @param {Die} die - the {@link Die} object being inserted into the bag.
   */
  insert(...die) { this.contents.push(...die) }

  /**
   * Fill the bag with an array of Die objects.
   * @param {Die[]} diceArray - array of Die objects to fill the bag with.
   */
  fill(diceArray) { this.contents.push(...diceArray) }

  /**
   * Empties the bag's contents of all dice.
   * The contents are reset to an empty array.
   */
  empty() { this.contents = [] }

  roll(index) { return this.contents[index].roll(); }

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
  rollAllN(amount) {
    const results = [];
    for (let i = 0; i < amount; i++) {
      const rolls = this.rollAll();
      results.push(rolls);
    }
    return results;
  }
}


// TODO: assign bag to a player
class Player { }

class Game { }