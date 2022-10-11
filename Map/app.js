const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const doubles = numbers.map(function (num) {
  return num * 2;
});

// for (let el of doubles) {
//   console.log(el);
// }

const movies = [
  {
    title: "The Lion King",
    score: 99,
  },
  {
    title: "Frosen",
    score: 85,
  },
  {
    title: "Zootopia",
    score: 95,
  },
  {
    title: "Moana",
    score: 90,
  },
];

const titles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});

titles.forEach(function (title_upper) {
  console.log(`${title_upper}`);
});
