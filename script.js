"use strict";

//  SELECTORS

const mainInput = document.querySelector(".main-input");
const filters = document.querySelector(".filter");
const todoList = document.querySelector(".todo-list");
const todoContainer = document.querySelector(".todo-container");
const active = document.querySelector(".active");
const all = document.querySelector(".all");
const completeted = document.querySelector(".completed");

const allInput = document.querySelector(".all-input");
const activeInput = document.querySelector(".active-input");
const completedInput = document.querySelector(".completed-input");

// EVENTS

mainInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    todoFunc();
  }
});

// FUNCTIONS

// function-n-1

const todoFunc = function () {
  if (mainInput.value === "") alert("the input is empty please fill something");
  else {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    const label1 = document.createElement("label");
    label1.classList.add("check-container");
    const input1 = document.createElement("input");
    input1.type = "checkbox";
    input1.classList.add("li-checkbox");
    const span1 = document.createElement("span");
    span1.classList.add("checkmark");
    const span2 = document.createElement("span");
    span2.classList.add("text");
    const crossImg = document.createElement("img");
    crossImg.classList.add("cross-icon");
    crossImg.src = `./images/icon-cross.svg`;
    crossImg.alt = "cross icon X";
    todoContainer.appendChild(todoList);
    todoList.appendChild(todoItem);
    todoItem.appendChild(label1);
    todoItem.appendChild(span2);
    todoItem.appendChild(crossImg);
    label1.appendChild(input1);
    label1.appendChild(span1);

    span2.innerText = mainInput.value;
    mainInput.value = "";

    input1.addEventListener("click", () => {
      if (input1.checked === true) {
        span2.style.textDecoration = "line-through";
      } else if (!input1.checked === true) {
        span2.style.textDecoration = "none";
      }
    });

    all.addEventListener("click", (e) => {
      todoItem.style.display = "flex";
      activeInput.checked = false;
      completedInput.checked = false;
    });
    active.addEventListener("click", (e) => {
      if (input1.checked === false) {
        todoItem.style.display = "flex";
        activeInput.checked = true;
        allInput.checked = false;
        completedInput.checked = false;
      } else {
        todoItem.style.display = "none";
        activeInput.checked = false;
      }
    });
    completeted.addEventListener("click", (e) => {
      if (input1.checked === true) {
        todoItem.style.display = "flex";
        activeInput.checked = false;
        allInput.checked = false;
      } else {
        todoItem.style.display = "none";
        completedInput.checked = false;
      }
    });

    crossImg.addEventListener("click", () => {
      todoItem.style.display = "none";
    });
  }
};
const movements = `<li class="movements">
<span class="items-mov">${0} items left</span>
<span class="clear">clear Completed</span>
</li>`;

todoContainer.insertAdjacentHTML("afterend", movements);
