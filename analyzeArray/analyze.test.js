import analyzeArray from "./app";

/* eslint-disable no-undef */
describe("app.js", ()=>{
    test("analyzing array", ()=>{
        expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
                average: 4,
                min: 1,
                max: 8,
                length: 6,
        });
    });
    test("analyzing array", ()=>{
        expect(analyzeArray([1,8,3,4,"2",6])).toBe("not valid");
    });
});