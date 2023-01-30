const buttons = document.querySelectorAll("button");

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

for (let button of buttons) {
  button.addEventListener("click", function () {
    button.style.backgroundColor = makeRandColor();
  });
}

const h1s = document.querySelectorAll("h1");
for (let h1 of h1s) {
  h1.addEventListener("click", function () {
    console.log(this);
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
  });
}

// const input = document.querySelector("input");
// input.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   console.log(e.code); // 키보드에서의 실제 위치를 표시
// });

// input.addEventListener("keyup", function () {
//   console.log("KeyUp");
// });

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT");
      break;
    default:
      console.log("IGNORED!");
  }
});
