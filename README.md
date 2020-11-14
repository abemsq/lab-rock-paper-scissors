# Javascript Function Syntax: Dog Years

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:
- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.

If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:
1. Get the user’s choice.
2. Get the computer’s choice.
3. Compare the two choices and determine a winner.
4. Start the program and display the results.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.

````
// Getting the User Choice in between rock, paper, scissors;
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === `rock` || userInput === `paper` || userInput === `scissors`) {
    return userInput;
  } else {
    return `This is not a valid input`;
  }
};

// Testing getUserChoice
console.log(getUserChoice(`sCISSors`));

// Getting the Computer's Random Choice in between rock, paper, scissors;
function getComputerChoice () {
  randomNumber = Math.floor(Math.random()*2.5);
  switch (randomNumber) {
    case 0:
      return `rock`;
    case 1:
      return `paper`;
    case 2:
      return `scissors`;
  }
};

console.log(getComputerChoice());

// Determining the winner.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `The game was a tie.`
  } else if (userChoice === `rock`) {
    if (computerChoice === `paper`) {
      return `The computer won!`;
    } else {
      return `You won!`;
    }
  } else if (userChoice === `paper`) {
    if (computerChoice === `scissors`) {
      return `The computer won!`;
    } else {
      return `You won!`;
    }
  } else if (userChoice === `scissors`) {
    if (computerChoice === `rock`) {
      return `The computer won!`;
    } else {
      return `You won!`;
    }
  }
};

// Playing the game
const playGame = () => {
    const userChoice = getUserChoice(`scissors`);
    const computerChoice = getComputerChoice();
    console.log(`You threw: ` + userChoice);
    console.log(`The computer threw: ` + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };

playGame();
````
