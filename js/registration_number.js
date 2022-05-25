const inputElement = document.querySelector('.regNo');
const addBtn = document.querySelector('.btn');
const printElement = document.querySelector(".regs");
const invalidRegs = document.querySelector('.invalidString');
const selectedTown = document.querySelector('.city');

let array = localStorage.getItem("regiNumbers") ? JSON.parse(localStorage.getItem("regiNumbers")) : [];
addRegistration(array);

for(i = 0; i < array.length; i++){
    let list = document.createElement('li');
    list.textContent = array[i];
    printElement.appendChild(list);
}
inputElement.onkeyup = function(){
    let regeX = /[XA|CA|EC|GP|L]{2}\s[Ndlovu]+|[XA|CA|EC|GP|L]{2}\s[0-9]{5}/gi;

    if(regeX.test(inputElement.value)){
        invalidRegs.innerText = "You entered a valid name";
        invalidRegs.style.color = 'green';
        setTimeout(() => {
            invalidRegs.innerHTML = "";
        }, 7000);
    }
    else{
        invalidRegs.innerText = "You entered an invalid name";
        invalidRegs.style.color = 'red'; 
        setTimeout(() => {
            invalidRegs.innerHTML = "";
        }, 7000);
    }
}
// addBtn.addEventListener('click', function()
function addRegistration(){
    
    let regeX = /[XA|CA|EC|GP|L]{2}\s[Ndlovu]+|[XA|CA|EC|GP|L]{2}\s[0-9]{5}/gi;
    
    let registrationNo = inputElement.value.toUpperCase();
    
    if(regeX.test(registrationNo) && registrationNo){
            array.push(registrationNo);   
            localStorage.setItem('regiNumbers',JSON.stringify(array));
            let list = document.createElement('li');
            list.textContent = registrationNo;
            printElement.appendChild(list);
    }
    else {
        invalidRegs.innerHTML = "Invalid registration number";
        setTimeout(() => {
            invalidRegs.innerHTML = "";
        }, 5000);    

    }
    inputElement.value = "";
};

function getSelectedForTown(){
    let newArray =  array.filter((registrationValue) =>{
       return registrationValue.startsWith(selectedTown.value);
   });
   if(newArray){
       printElement.innerHTML = "";
       for(i = 0; i < newArray.length; i++){
           let list = document.createElement('li');
           list.textContent = newArray[i];
           printElement.appendChild(list); 
        }
   }
   return newArray;
}

function clearRegistrations(){
    let list = document.querySelector('li');
    list.remove();
    localStorage.clear();
}