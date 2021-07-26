describe('the findItemsOver20 function' , function(){
    it('should take a string parameter and find out if the parameter passed in is a day of the week or not' , function(){
        assert.equal([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver20( [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]));
        

    });

});