let computerscore = 0;
let userscore = 0;
function getComputerChoice() {
  const items = ['Rock', 'Paper', 'Scissors'];
  let CC = items[Math.floor(Math.random() * items.length)];
  console.log(CC);
  return CC;
}
//let choice2 = prompt('Choose your weapon: Rock, Paper, or Scissors: ');
//let areEqual = choice1.toUpperCase() === choice2.toUpperCase();
function playerSelection() {
  let choice2 = prompt('Choose your weapon: Rock, Paper, or Scissors: ');
  console.log(choice2);
  return choice2;
}
function playRound() {
  CC = getComputerChoice().toLowerCase();
  choice2 = playerSelection().toLowerCase();

  if (choice2 == CC) {
    console.log('Tie');
  } else if (
    (choice2 === 'rock' && CC === 'paper') ||
    (choice2 === 'scissors' && CC === 'rock') ||
    (choice2 === 'paper' && CC === 'scissors')
  ) {
    computerscore = ++computerscore;
  } else {
    userscore = ++userscore;
  }
  console.log('Computer: ', computerscore, '\nHuman: ', userscore);
}

function display(CC, choice2) {
  playerSelection();
  getComputerChoice();
}

function game(score) {
  while (userscore < 3 && computerscore < 3) {
    playRound();
  }
  if (computerscore == 3) {
    console.log("You lost. You'll get em next time");
    console.log('\nScore tally:\n', 'H: ', userscore, '\tC: ', computerscore);
  } else if (userscore == 3) {
    console.log('Congrats! You Won.');
    console.log('\nScore tally:\n', 'H: ', userscore, '\tC: ', computerscore);
  }
  console.log('\nScore tally:\n', 'H: ', userscore, '\tC: ', computerscore);
}
game();
