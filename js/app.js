"use strict";

const $newDiceBagButton = $('#new-dicebag-btn');
const $newDieButton = $('#new-die-btn');
const $resetDiceButton = $('#reset-dice-btn');

let bag = new DiceBag();




// on DOM load
// $(function () {
//   for (let i = 0; i < 10; i++) {
//     let d = new Die();
//     bag.insert(d);
//   }
//   bag.contents.forEach((d) => { Die.render(d.roll()) })
// })

function renderNewDie(evt) {
  console.debug("renderNewDie", evt);
  let d = new Die();
  bag.insert(d);
  d.roll();
  d.renderLastRoll();
  $resetDiceButton.prop('disabled', false);
}


$newDieButton.on("click", renderNewDie);

$resetDiceButton.on("click", function (evt) {
  console.debug("resetDiceButton callback", evt);
  $('.dice-row').empty();
  bag.empty();
  $resetDiceButton.prop('disabled', true);
})