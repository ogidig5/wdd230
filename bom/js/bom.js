const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
  let currentValue = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.appendChild(span);
  span.textContent = currentValue;
  li.appendChild(button);
  button.textContent = "X";
  button.style.color = "red";
  button.style.fontWeight = "bold";
  ul.appendChild(li);

  button.onclick = function () {
    ul.removeChild(li);
  };
  input.focus();
};

