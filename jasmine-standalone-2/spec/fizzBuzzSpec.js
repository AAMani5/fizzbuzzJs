describe("fizzBuzz", function(){

  describe("Multiples of 3",function(){

    it("returns fizz when passed 3",function(){
        expect(fizzBuzz(3)).toEqual("fizz");
    });

    it("returns fizz when passed 6",function(){
        expect(fizzBuzz(6)).toEqual("fizz");
    });

  });

  describe("Multiples of 5", function(){

    it("returns buzz when passed 5", function(){
        expect(fizzBuzz(5)).toEqual("buzz");
    });

    it("returns buzz when passed 10",function(){
        expect(fizzBuzz(10)).toEqual("buzz");
    });

  });

  describe("Multiples of 15", function() {

    it("returns fizzbuzz when psaased 15",function(){
        expect(fizzBuzz(15)).toEqual("fizzbuzz");
    });

    it("returns fizzbuzz when passed 30",function(){
        expect(fizzBuzz(30)).toEqual("fizzbuzz");
    });

  });

  describe("All other numbers", function(){

      it("returns 1 when passed 1", function(){
        expect(fizzBuzz(1)).toEqual(1);
      });

      it("returns 11 when passed 11", function(){
        expect(fizzBuzz(11)).toEqual(11);
      });

   });

});
