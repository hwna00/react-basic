const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const handleAdd = () => {
  number.innerText = ++count;
};
const handleMinus = () => {
  number.innerText = --count;
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
