import createPrompt from 'prompt-sync';
// FizzBuzz
function fizzBuzz() {
//let prompt = createPrompt();
//let name = prompt("Vad heter du ?");
// let name = window.prompt("vad heter du?", "Namn");
let prompt = createPrompt();
let name = prompt("Vad heter du ?")
console.log(name);
alert(`Vällkomman kära vanner : ${name}`);
console.log(confirm("Spelet FizzBuzz har börjat!") + name);
   //alert("Spelet FizzBuzz har börjat!");

    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            alert("FizzBuzz");
        } else if (i % 3 === 0) {
            alert("Fizz");
        } else if (i % 5 === 0) {
            alert("Buzz");
        } else {
            alert(i);
        }
    }
}
fizzBuzz();
//alert(fizzBuzz());