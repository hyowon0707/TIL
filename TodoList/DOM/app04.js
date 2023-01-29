const x = document.querySelector("#hello");

const y = document.querySelector("#goodbye");

x.addEventListener("click", () => {
  console.log("hello");
});
y.addEventListener("click", () => {
  console.log("goodbye");
});
