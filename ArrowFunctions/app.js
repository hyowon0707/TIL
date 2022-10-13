// const add = function (x, y) {
//   return x + y;
// };

// function add (x,y){
//     return x+y;
// }

const add = (x, y) => {
  return x + y;
};

const square = (x) => {
  // 인수가 하나일 때는 괄호 생략 가능하다.
  return x * x;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//js arrow function implicit return
// 하나의 표현식을 반환시에만 사용가능하다.
const rollDie_imp = () =>
  // 자동적으로 return 값 하나만 넣는것과 같은 효과
  // 코드를 짧게 만드는데 유용, 괄호 생략 가능하다.
  Math.floor(Math.random() * 6) + 1;

const add2 = (
  a,
  b // 괄호 생략 가능하다.
) => a + b;

// map과 arrowfunction을 사용해보자
const movies = [
  {
    title: "The Lion King",
    score: 99,
  },
  {
    title: "Frozen",
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

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} = ${movie.score / 10}`;
// });

// 위와 같은 함수를 만들 것이다.
const newMovies = movies.map(
  (movies) => `${movies.title} - ${movies.score / 10}`
);
