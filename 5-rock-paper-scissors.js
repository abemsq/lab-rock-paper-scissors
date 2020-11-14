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