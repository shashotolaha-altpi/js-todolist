let button = document.getElementById("submit");
let del = document.getElementById("delete");
let todo = document.getElementById("todo");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  localStorage.setItem("todo",JSON.stringify([title, desc]));

  todo.innerHTML = ` <h1> ${title}</h1><p>${desc}</p>`;

});
del.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("todo");
  todo.innerHTML = "";
});
