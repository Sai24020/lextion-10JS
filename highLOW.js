// Högre eller lägre
function highOrLow() {
    alert("Spelet Högre eller lägre har börjat!");

    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;

    do {
        guess = parseInt(prompt("Gissa ett nummer mellan 1 och 100:"));
        if (guess > secretNumber) {
            alert("Din gissning är för hög!");
        } else if (guess < secretNumber) {
            alert("Din gissning är för låg!");
        }
    } while (guess !== secretNumber);

    alert("Grattis! Du gissade rätt nummer!");
}
