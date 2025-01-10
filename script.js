var testVar = "test av Var,";
var testLet = "test av Let,";
var testConst = "test av Const";

function scopeTests1() {
    console.log(testVar, testLet, testConst);
}
scopeTests1();

//++++++++++++++++++++++++++++++++
function scopeTests() {
    let variable = 2;
    console.log(variable);

    if (true) {
     let inside = 5;
        testVar = 4;
    console.log(inside, "Test", testConst);
}

}
console.clear;
scopeTests(testVar, testLet, testConst);
//++++++++++++++++++++++++++++++++
var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter); // "say Hello instead"
//+++++++++++++++++som functionen returnerar Inte functionen+++++++++++
function myFun4(param) {
    return param = param * 4;
}
let number = myFun4(2);//functionsanrop men med const number kan inte bytta nummer
console.log(number);

number = myFun4(5);
console.log(number);

//+++++++++++++++++++++++++++++++
//window.alert("Hello world!");
//alert("Hello world!");
//+++++++++++++++++++++++

alert("hej");
//let prompt = createPrompt();
//let name = prompt("Vad heter du ?");
let name = window.prompt("vad heter du?", "Namn");

console.log(name);
console.log(confirm("ok?"));

//if (confirm("ok")) {
//    alert("JA");
//}

//function myFun5() {
//    let name = window.prompt("Vad heter du ?", "Namn");
 //   if (name.length == 0) {
  //      console.log(name);
//        return "Fel";
//    }
//    return name;
//}
//console.log(myFun5());

function myFun6(color, fuelType, wheels) {
   // console.log(arguments);
    return arguments;
}
console.log(myFun6("blue", "diesel", 4));
//console.log(myFun6("blue", "diesel"));