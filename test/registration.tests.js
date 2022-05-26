describe('Test Registration Factory function', function(){
    it('it should return please enter valid registration number when invali reg is entered', function(){
        const registrationList  = registrationNumber(); 
        // registrationList.validation("CY 145 267");
        assert.equal("please enter a valid reg", registrationList.validation("zeee"));
    });
    it('it should be able to get registration numbers and store in an array', function(){
        const registrationList  = registrationNumber(); 
        // registrationList.validation("ca ndlovu")
        assert.deepEqual(['ca ndlovu'], registrationList.validation("ca ndlovu"));
    });
    it('it should return "Already exists when a registration number is repeated"', function(){
        const registrationList  = registrationNumber(); 
        registrationList.checkRegistrationNo("xa ndlovu");
       
        assert.equal("Already exists", registrationList.checkRegistrationNo("xa ndlovu"));

        registrationList.checkRegistrationNo("xa ndlovu");
        assert.equal("Already exists", registrationList.checkRegistrationNo("xa ndlovu"));

    });
});