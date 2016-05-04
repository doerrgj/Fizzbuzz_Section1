var fb = require('../fizzbuzz.js'); 

describe("A fizzbuzz program", function() { 

    it("can count from 1 to 100", function() { 
       expect(fb.count(1,100)).tobe("1 2 3 4 5"); 
    }); 

}); 