function registrationNumber(){
    let array = [];
    let regeX = /[XA|CA|EC|GP|L]{2}\s[Ndlovu]+|[XA|CA|EC|GP|L]{2}(\s|\-)[0-9]{3}(\s|\-)[0-9]{3}/gi;

    function checkRegistrationNo(registrationNo){
      if(array.includes(registrationNo)){
          array.push(registrationNo)
    }
    else{
        return "Already exists"
    }
    return array;
    }

    function validation(registrationNo){
        if(regeX.test(registrationNo)){
            array.push(registrationNo);
        }
        else{
            return "please enter a valid reg"  
        }
        return array;
    }

    return{
        checkRegistrationNo,
        validation
    }

}