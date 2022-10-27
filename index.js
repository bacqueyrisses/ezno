const capitalize = (searchQuery) => {
  searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1);
};

const randomNumberBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};

module.exports = { capitalize, randomNumberBetween };
