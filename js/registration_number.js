const inputElement = document.querySelector('.regNo');
const addBtn = document.querySelector('.btn');
const printElement = document.querySelector(".regs");

let array = [];

addBtn.addEventListener('click', function(){
    let registrationNo = inputElement.value;
    array.push(registrationNo);
    printElement.innerHTML = registrationNo;

});