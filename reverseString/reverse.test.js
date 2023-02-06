/* eslint-disable no-undef */
import reverse from "./app"

describe("app.js", ()=>{
    test("reversing string", ()=>{
        expect(reverse("something")).toBe("gnihtemos");
    });
    test("palindrome string", ()=>{
        expect(reverse("mom")).toBe("mom");
    });
    test("works with randomised case", ()=>{
        expect(reverse("somEthiNg")).toBe("gnihtemos");
    });
    test("\"test\" becomes \"tset\"", () => {
    expect(reverse("test")).toBe("tset");
    });

    test("\"what about spaces\" becomes \"secaps tuoba tahw\"", () => {
    expect(reverse("what about spaces")).toBe("secaps tuoba tahw");
    });

    test("\"12345\" becomes \"54321\"", () => {
    expect(reverse("12345")).toBe("54321");
    });

    test("12345 becomes \"not a string\"", () => {
    expect(reverse(12345)).toBe("not a string");
    });
});
