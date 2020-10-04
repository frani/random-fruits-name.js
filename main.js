const enFruits = require('./en.json');
const esFruits = require('./es.json');
const jaFruits = require('./ja.json');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomFruitsName = (language = 'en') => {
  let fruits = enFruits.fruits;
  if (language === 'es') fruits = esFruits.fruits;
  if (language === 'ja') fruits = jaFruits.fruits;
  return fruits[getRandomInt(fruits.length)];
};

module.exports = getRandomFruitsName;
