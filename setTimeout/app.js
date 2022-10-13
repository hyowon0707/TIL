// 시간 간격으로 출력하는 메서드

// console.log("hi how are you?");
// // 첫번째 콜백함수, 두번째 지연시킬 시간
// setTimeout(() => {
//   console.log("hello I'm Good! thank u");
// }, 3000);

// 어떤 작업을 인터벌을 두고 실행해야 할때, 무한히 반복 언제끝날지 모름..
const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

// clearInterval은 setInterval을 중단시키는 명령어
// 페이지가 끝없이 반복되는 걸 방지하자
// clearInterval(id)
// 응용한다면 여러개의 setInterval을 넣을 수 있다.
