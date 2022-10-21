let num1 = document.getElementById('number1Field');
let num2 = document.getElementById('number2Field');

let addBtn = document.getElementById('addition');
let subBtn = document.getElementById('subtraction');
let multBtn = document.getElementById('multiplication');
let divBtn = document.getElementById('division');

let result = document.getElementById('result')


addBtn.addEventListener('click', onAddBtnClicked)
subBtn.addEventListener('click', onSubBtnClicked)
multBtn.addEventListener('click', onMultiBtnClicked)
divBtn.addEventListener('click', onDivBtnClicked)





function onAddBtnClicked() {
    result.innerHTML = Number(num1.value) + Number(num2.value);

}
function onSubBtnClicked() {
    result.innerHTML = Number(num1.value) - Number(num2.value);

}
function onMultiBtnClicked() {
    result.innerHTML = Number(num1.value) * Number(num2.value);

}
function onDivBtnClicked() {
    result.innerHTML = Number(num1.value) / Number(num2.value);

}