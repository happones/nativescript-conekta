var Conekta = require("nativescript-conekta").Conekta;
var conekta = new Conekta();

describe("greet function", function() {
    it("exists", function() {
        expect(conekta.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(conekta.greet()).toEqual("Hello, NS");
    });
});