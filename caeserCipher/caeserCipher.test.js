/* eslint-disable no-undef */
import caeserCipher from "./app"

describe("app.js", ()=>{
    test("cipher", ()=>{
        expect(caeserCipher("hello", 2)).toBe("jgnnq");
    });
    test("cipher", ()=>{
        expect(caeserCipher("hello mate", 2)).toBe("jgnnq ocvg");
    });
    test("cipher", ()=>{
        expect(caeserCipher("hello 1mate", 2)).toBe("jgnnq 1ocvg");
    });
    test("works with single letters", () => {
        expect(caeserCipher("A", 1)).toBe("B");
    });
    test("works with words", () => {
        expect(caeserCipher("Aaa", 1)).toBe("Bbb");
    });
    test("works with phrases", () => {
        expect(caeserCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
    });
    test("wraps", () => {
        expect(caeserCipher("Z", 1)).toBe("A");
    });
    test("works with large shift factors", () => {
        expect(caeserCipher("Hello, World!", 75)).toBe("Ebiil, Tloia!");
    });
    test("works with negative shift factors", () => {
        expect(caeserCipher("b", -2)).toBe("z");
    });
    test("works with large negative shift factors", () => {
    expect(caeserCipher("Hello, World!", -29)).toBe("Ebiil, Tloia!");
    });
    test("works with large shift factors", () => {
        expect(caeserCipher("attack at dawn", 75)).toBe("xqqxzh xq axtk");
    });

})