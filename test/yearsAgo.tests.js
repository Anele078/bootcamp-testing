describe('the yearsAgo function' , function(){
    it('should take a string parameter and find out if the parameter passed in is a day of the week or not' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
        

    });

});