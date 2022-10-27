const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const randomNumberBetween = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

module.exports = { capitalize, randomNumberBetween };
