import Callback from "../dist/callback";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("basic", function() {

    let fn = function (number : number) {

        return number + number;
    };

    let callback = new Callback(fn, [1]);


    it('validate value', function () {

        expect(callback.message).toEqual(2);

    });

});




