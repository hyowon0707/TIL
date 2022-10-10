const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// 전체 배열 중 3의 배수만 출력
numbers.forEach(function (el) {
  if (el % 3 === 0) {
    console.log(el);
  }
});

// 전체 배열 출력
// for (let el of numbers) {
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

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score / 100}`);
});
