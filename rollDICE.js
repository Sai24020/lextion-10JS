// Roll Dice
function rollDice() {
    alert("Spelet rollDice har börjat!");
  
  const diceNumbers = 6;
  let throws = 0;
  let currentTarget = 1;
  
  function getRandomInt(diceNumbers) {
    return Math.floor(Math.random() * diceNumbers);
}
    while (currentTarget <= 6) {
      let roll = getRandomInt() + 1;
      throws++;
      console.log(`Ditt ComputerScore: ${roll}`);
      alert(`Ditt ComputerScore  för mål ${currentTarget}: ${roll} , Throws nummer: ${throws}`);
     if (roll == currentTarget){
        console.log(`Ditt mål: ${currentTarget}`);
       alert(`Mål ${roll}: ${currentTarget}.`);
       

        currentTarget++;
    }
}
     console.log(`Ditt mål för steget 1-6: ${throws}`);
     alert(`Ditt mål för steget 1-6 efter: ${throws} throws`);
}
