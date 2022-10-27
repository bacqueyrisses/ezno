const capitalize = (searchQuery) =>
  searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1);

module.exports = { capitalize };
