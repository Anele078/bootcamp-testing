describe('the greet function ' , function(){
    it('should return "Hello Sithi" when I greet Sithi' , function(){
        assert.equal('Hello, Sithi', greet('Sithi'));

        
    });
    it('should return "Hello Sithi" when I greet Bella' , function(){
            assert.equal('Hello, Bella', greet('Bella'));
    
            
    });
    

});