let plus = document.querySelector(".fa-plus");
let minus = document.querySelector(".fa-minus");

let NUM = document.querySelector(".NUM");

let countInput = 3000;

plus.onclick = function () {
  if (countInput < 10000000) {
    countInput += 1000;
  }

  if (countInput <= 10000000) {
    NUM.innerHTML = " " + countInput;
  } else {
    console.log("done");
  }
};

minus.onclick = function () {
  if (countInput > 3000) {
    countInput -= 1000;
  }

  if (countInput <= 30000) {
    NUM.innerHTML = " " + countInput;
  } else {
    console.log("done");
  }
};