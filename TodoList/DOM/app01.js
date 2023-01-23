const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:

const link = document.querySelectorAll("h1 span");

for (let i = 0; i < link.length; i++) {
  link[i].style.color = colors[i];
}
