describe('GDJGH', function(){
    it('it should return reg nummber', function(){
        const registrationList  = registrationNumbers(); 
        registrationList.storedRegistrationNo("CY 14526")
        assert.equal("CY 14526", registrationList.getStoredRegistrationNo());
    });
    
});