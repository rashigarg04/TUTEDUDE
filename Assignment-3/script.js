function greetUser() {
  const name = document.getElementById("nameInput").value;
  const greeting = document.getElementById("greeting");

  if (name.trim() !== "") {
    greeting.innerText = "Hello, " + name;
  } else {
    greeting.innerText = "Hello";
  }
}

function changeColor(element, color) {
  element.style.backgroundColor = color;
}
