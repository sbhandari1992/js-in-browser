// function showGreetingInConsole() {
//     let message = "Hello world";
//     console.log(message);

// }
// // showGreetingInConsole();


// window.onload = init;

window.onload = init;

let myGreetBtn = document.getElementById('greetBtn');
myGreetBtn.addEventListener('click', buttonClicked);
// console.log(myGreetBtn);



function init() {
buttonClicked();
}



function buttonClicked() {
// console.log('yes');
let nameField = document.getElementById('nameField');
// console.log(nameField);
let name = nameField.value;
// console.log(name);
let greeting = `Hello ${name}`;
window.alert(greeting);


}


