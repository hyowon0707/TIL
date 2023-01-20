let input = prompt("What would you like to do?"); // 업데이트 할것이므로 const 가 아니라 let으로 설정

const todos = ["Collect Chicken Eggs", "Clean Litter Box"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("**************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**************");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete:"));
    // 문자열을 숫자로 바꾸기
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1); // 원소 삭제하기
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("OK QUIT THE APP!");
