import createPrompt from 'prompt-sync';

let prompt = createPrompt();
let name = prompt("Vad heter du ?")

prompt(`Vällkomman kära vanner : ${name}`);

// FizzBuzz
function fizzBuzz() {
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            prompt(`FizzBuzz`);
        } else if (i % 3 === 0) {
            prompt(`Fizz`);
        } else if (i % 5 === 0) {
            prompt(`Buzz`);
        } else {
            prompt(`${i}`);
        }
    }
}
fizzBuzz();

// Sten, sax, påse
function rockPaperScissors() {
    const choices = ["sten", "sax", "påse"];
    let playerScore = 0;
    let computerScore = 0;

    prompt(`Spelet Sten, sax, påse har börjat!`);
 //   alert("Spelet Sten, sax, påse har börjat!");

    while (playerScore < 3 && computerScore < 3) {
        const playerChoice = prompt("Välj: sten, sax, eller påse").toLowerCase();
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        prompt(`Ditt val: ${playerChoice}, Datorns val: ${computerChoice}`);
   //     alert(`Ditt val: ${playerChoice}, Datorns val: ${computerChoice}`);

        if (playerChoice === computerChoice) {
            prompt(`Oavgjort!`); 
        //    alert("Oavgjort!");
        } else if (
            (playerChoice === "sten" && computerChoice === "sax") ||
            (playerChoice === "påse" && computerChoice === "sten") ||
            (playerChoice === "sax" && computerChoice === "påse")
        ) {
            playerScore++;
            prompt(`Du vann denna runda!`);
       //     alert("Du vann denna runda!");
        } else {
            computerScore++;
            prompt(`Datorn vann denna runda!`);
   //         alert("Datorn vann denna runda!");
        }

        prompt(`Nuvarande poäng - Du: ${playerScore}, Datorn: ${computerScore}`);
  //      alert(`Nuvarande poäng - Du: ${playerScore}, Datorn: ${computerScore}`);
    }

    if (playerScore === 3) {
        prompt(`Grattis! Du vann spelet!`);
   //     alert("Grattis! Du vann spelet!");
    } else {
        prompt(`Du förlorade! Datorn vann spelet.`);
   //     alert("Du förlorade! Datorn vann spelet.");
    }
}
rockPaperScissors();

// Roll Dice
function rollDice() {
    prompt(`Spelet rollDice har börjat!`);
 //   alert("Spelet rollDice har börjat!");

  
  const diceNumbers = 6;
  let throws = 0;
  let currentTarget = 1;
  
  function getRandomInt(diceNumbers) {
    return Math.floor(Math.random() * diceNumbers);
}
    while (currentTarget <= 6) {
      let roll = getRandomInt(diceNumbers) + 1;
      throws++;
 //     console.log(`Ditt ComputerScore: ${roll}`);

      prompt(`Ditt ComputerScore  för mål ${currentTarget}: ${roll} , Throws nummer: ${throws}`);
 //     alert(`Ditt ComputerScore  för mål ${currentTarget}: ${roll} , Throws nummer: ${throws}`);
     if (roll == currentTarget){
    //    console.log(`Ditt mål: ${currentTarget}`);

        prompt(`Mål ${roll}: ${currentTarget}.`);
    //   alert(`Mål ${roll}: ${currentTarget}.`);
       

        currentTarget++;
    }
}
   //  console.log(`Ditt mål för steget 1-6: ${throws}`);

     prompt(`Ditt mål för steget 1-6 efter: ${throws} throws`);
  //   alert(`Ditt mål för steget 1-6 efter: ${throws} throws`);
}
rollDice();

// Jämför ord
function wordSimilarity() {
    prompt(`Spelet Jämför ord har börjat!`);
//  alert("Spelet Jämför ord har börjat!");

    const word1 = prompt("Skriv in första ordet:");
    const word2 = prompt("Skriv in andra ordet:");
    
    let similarityCount = 0;
    const minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        if (word1[i] === word2[i]) {
            similarityCount++;
        }
    }
    prompt(`första ordet: ${word1}, Ändra ordet: ${word2}`);
 // alert(`första ordet: ${word1}, Ändra ordet: ${word2}`);

    prompt(`Antal liknande bokstäver på samma plats: ${similarityCount}`);
//  alert(`Antal liknande bokstäver på samma plats: ${similarityCount}`);
}
wordSimilarity();

// Högre eller lägre
function highOrLow() {
    prompt(`Spelet Högre eller lägre har börjat!`);
 //   alert("Spelet Högre eller lägre har börjat!");

    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess = parseInt(prompt("Gissa ett nummer mellan 1 och 100:"));
 //   const secretNumber = prompt(`Gissa ett nummer mellan 1 och 100: ${guess}`);
    while (guess !== secretNumber) {
        prompt(`Grattis! Du gissade rätt nummer!`); 
      
        if (guess > secretNumber) {
            prompt(`Din gissning är för hög!`);
            guess = prompt(`Gissa ett nummer mellan 1 och 100: ${guess}`);
      //    alert("Din gissning är för hög!");
        } else if (guess < secretNumber) {
            prompt(`Din gissning är för låg!`);
            guess = prompt(`Gissa ett nummer mellan 1 och 100: ${guess}`);
      //    alert("Din gissning är för låg!");
        } else {
        guess = prompt(`Gissa ett nummer mellan 1 och 100: ${guess}`);}
               prompt(`första gissa nummer: ${secretNumber}  ${guess}`); 
    } 
   
//  alert("Grattis! Du gissade rätt nummer!");
}
highOrLow();