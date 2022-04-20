"use strict";

// THIS FILE IS FOR IMAGE-RELATED FUNCTIONS

function getDiceSvg(roll, inverted = false) {
  const words = ['one', 'two', 'three', 'four', 'five', 'six'];
  let filenum = "";
  let inv = "";
  if (!!inverted) { inv = "-inverted"; } // Check for inverted param to add to file name
  if (roll >= 1 && roll <= 6) { filenum = words[roll - 1]; } // if the roll is between 1 and 6, add the corresponding roll to file name
  // TODO: incorporate error SVG and error handling
  else {
    throw new Error('Roll not between 1 and 6.');
  }
  return `img/d6-faces-${filenum + inv}.svg`;
}

function generateSvgHTML(svgString) {
  return `<div class="col">
  <object type="image/svg+xml" data="${svgString}" class="img-fluid"></object>
  </div>`;
}

function insertDiceHTML(htmlString) {
  $(htmlString).appendTo('.row');
}