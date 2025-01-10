// Jämför ord
function wordSimilarity() {
    alert("Spelet Jämför ord har börjat!");

    const word1 = prompt("Skriv in första ordet:");
    const word2 = prompt("Skriv in andra ordet:");
    
    let similarityCount = 0;
    const minLength = Math.min(word1.length, word2.length);

    for (let i = 0; i < minLength; i++) {
        if (word1[i] === word2[i]) {
            similarityCount++;
        }
    }
 alert(`första ordet: ${word1}, Ändra ordet: ${word2}`);
    alert(`Antal liknande bokstäver på samma plats: ${similarityCount}`);
}