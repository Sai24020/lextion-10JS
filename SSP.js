// Sten, sax, påse
function rockPaperScissors() {
    const choices = ["sten", "sax", "påse"];
    let playerScore = 0;
    let computerScore = 0;

    alert("Spelet Sten, sax, påse har börjat!");

    while (playerScore < 3 && computerScore < 3) {
        const playerChoice = prompt("Välj: sten, sax, eller påse").toLowerCase();
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        alert(`Ditt val: ${playerChoice}, Datorns val: ${computerChoice}`);

        if (playerChoice === computerChoice) {
            alert("Oavgjort!");
        } else if (
            (playerChoice === "sten" && computerChoice === "sax") ||
            (playerChoice === "påse" && computerChoice === "sten") ||
            (playerChoice === "sax" && computerChoice === "påse")
        ) {
            playerScore++;
            alert("Du vann denna runda!");
        } else {
            computerScore++;
            alert("Datorn vann denna runda!");
        }

        alert(`Nuvarande poäng - Du: ${playerScore}, Datorn: ${computerScore}`);
    }

    if (playerScore === 3) {
        alert("Grattis! Du vann spelet!");
    } else {
        alert("Du förlorade! Datorn vann spelet.");
    }
}
