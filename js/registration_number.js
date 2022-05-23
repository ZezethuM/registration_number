const inputElement = document.querySelector('.regNo');
const addBtn = document.querySelector('.btn');
const printElement = document.querySelector(".regs");
const invalidRegs = document.querySelector('.invalidString');

let registrationNumbers = localStorage.getItem("regiNumbers") ? JSON.parse(localStorage.getItem("regiNumbers")) : [];

let array = [];
let regeX = /^[CY|GP|XA|ZN]{2}\s[0-9]{5}$/g;

addBtn.addEventListener('click', function(){
    let registrationNo = inputElement.value;
    let list = document.createElement('li');
    if(regeX.test(registrationNo && registrationNo)){
        
        if(array.includes(registrationNo)){
            invalidRegs.innerHTML = "Already exists";
        }else{
            array.push(registrationNo);   
            list.textContent = registrationNo;
            printElement.appendChild(list);
        }
    }
    else{
        invalidRegs.innerHTML = "invalid registration number"
        setTimeout(() => {
            invalidRegs.innerHTML = "";
        }, 5000);
    }
    localStorage.setItem('regiNumbers',JSON.stringify(array));
});