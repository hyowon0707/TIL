// WRITE YOUR CODE IN HERE:
const arr = [];
const c = document.getElementById("container");

for (let i = 0; i < 100; i++) {
  arr[i] = document.createElement("button");
  arr[i].innerText = "hey!";
  c.appendChild(arr[i]);
}
