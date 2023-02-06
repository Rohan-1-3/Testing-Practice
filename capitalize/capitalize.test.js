import capitalize from "./app";

/* eslint-disable no-undef */
describe("app.js", ()=>{
    test("all lowercase string", ()=>{
        expect(capitalize("something")).toBe("Something");
    });
    test("all capital string", ()=>{
        expect(capitalize("SOMETHING")).toBe("Something");
    });
    test("randomize case", ()=>{
        expect(capitalize("sOmeTHinG")).toBe("Something");
    });
    test("\"Test\" should become \"Test\"", () => {
        expect(capitalize("Test")).toBe("Test");
    });
    test("\"three word test\" should become \"Three word test\"", () => {
        expect(capitalize("three word test")).toBe("Three word test");
    });
    test("\"1234\" should become \"no valid characters\"", () => {
        expect(capitalize("1234")).toBe("no valid");
      });
      
      test("\"@#$\" should become \"no valid characters\"", () => {
        expect(capitalize("@#$")).toBe("no valid");
      });
      
      test("1234 should become \"no valid characters\"", () => {
        expect(capitalize(1234)).toBe("no valid");
      });
});