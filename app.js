"use strict";

let baggie = new DiceBag();
let normalDie = new Die();
let luckyDie = new Die(7);
let bigDie = new Die(20);
let coin = new Die(2);

let arr = [bigDie, luckyDie, coin];

let bag = new DiceBag();
let dice = [];
for (let i = 0; i < 10; i++) {
  let sides = Math.floor(Math.random() * (i + 2)) + 3;
  let d = new Die(sides);
  dice.push(d);
}
bag.fill(dice);
