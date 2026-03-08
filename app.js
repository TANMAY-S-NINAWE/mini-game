let userscore = 1;
let computerscore = 1;

let choices = document.querySelectorAll(".choice");
let com_score = document.querySelector("#computer_score");
let user_score = document.querySelector("#user_score");
let msg = document.querySelector("#msg");

let computerchoice = () => {
  let option = ["rock", "paper", "scissors"];
  let num = Math.floor(Math.random() * 3);
  return option[num];
};

const draw = () => {
  msg.innerText = "game draw."; 
};


// let showwiner = (userwin) => {
//   if (userwin) {
//     msg.innerText="you win!";
//   }else{
//     msg.innerText="you lose";
//   }

// };

let playgame = (choiceid) => {
  console.log("user choice=", choiceid);
  let compchoice = computerchoice();
  console.log("comp choice is=", compchoice);
  if (choiceid === compchoice) {
    draw();
  } else if (
    (choiceid === "rock" && compchoice === "scissors") ||
    (choiceid === "paper" && compchoice === "rock") ||
    (choiceid === "scissors" && compchoice === "paper")
  ) {
    msg.innerText="you win";
  user_score.innerText=userscore++;
  } else {
    msg.innerText="you lose & computer win";
  
  com_score.innerText=computerscore++;
  }

  // showwiner(userwin);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let choiceid = choice.getAttribute("id");
    // console.log("clicked",choiceid)
    playgame(choiceid);
  });
});
