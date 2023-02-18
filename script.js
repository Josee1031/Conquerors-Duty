let computerscore = 0;
let userscore = 0;

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorsbtn = document.querySelector('#scissors');
const result = document.querySelector('.msg');
const human_Score = document.querySelector('.human');
const computer_Score = document.querySelector('.computer');

const getComputerChoice = () => {
  const items = ['Dagger', 'Sword', 'Bow'];
  let CC = Math.floor(Math.random() * items.length);
  return items[CC];
};

rockbtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'Dagger';
  playRound(playerSelection, computerSelection);

  displayResult(userscore, computerscore, playerSelection, computerSelection);
  keepScore(userscore, computerscore);
});

paperbtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'Sword';
  playRound(playerSelection, computerSelection);
  displayResult(userscore, computerscore, playerSelection, computerSelection);
  keepScore(userscore, computerscore);
});

scissorsbtn.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'Bow';
  playRound(playerSelection, computerSelection);
  displayResult(userscore, computerscore, playerSelection, computerSelection);
  keepScore(userscore, computerscore);
});

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'Dagger' && computerSelection === 'Sword') ||
    (playerSelection === 'Bow' && computerSelection === 'Dagger') ||
    (playerSelection === 'Sword' && computerSelection === 'Bow')
  ) {
    computerscore = ++computerscore;
  } else {
    userscore = ++userscore;
  }
}

function keepScore(userscore, computerscore) {
  const hs = document.querySelector('.hs');
  const cs = document.querySelector('.cs');
  let score1 = document.createElement('p');
  score1.textContent = `${userscore}`;
  let score2 = document.createElement('p');
  score2.textContent = `${computerscore}`;

  if (userscore <= 3 && computerscore <= 3) {
    hs.textContent = '';
    hs.appendChild(score1);
    cs.textContent = '';
    cs.appendChild(score2);
  }
}

function displayResult(
  userscore,
  computerscore,
  playerSelection,
  computerSelection
) {
  if (playerSelection === computerSelection) {
    const msg = document.createElement('p');
    msg.textContent = `Stalemate! You both picked ${playerSelection}`;
    result.textContent = '';
    result.appendChild(msg);
  } else if (userscore <= 3 && computerscore <= 3) {
    const msg = document.createElement('p');
    result.textContent = '';
    msg.textContent = `Enemy's weapon: ${computerSelection}`;
    result.appendChild(msg);
  }
  if (computerscore === 3 && userscore < 3) {
    const msg3 = document.createElement('p');
    msg3.textContent = 'The enemy wins.';

    result.appendChild(msg3);
  } else if (userscore === 3 && computerscore < 3) {
    const msg6 = document.createElement('p');
    result.textContent = '';
    msg6.textContent = `Victory! Enemy Selection: ${computerSelection}`;
    result.appendChild(msg6);
  } else if (userscore === 3 || computerscore === 3) {
    const msg6 = document.createElement('p');
    msg6.textContent = `Game Over`;
    result.textContent = '';
    result.appendChild(msg6);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
