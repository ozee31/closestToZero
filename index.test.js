const closestToZero = require("./index");

describe("closestToZero", () => {
  test("when input is [8, 5, 10] it must returns 5", () => {
    expect(closestToZero([8, 5, 10])).toBe(5);
  });

  test("when input is [5, 4, -9, 6, -10, -1, 8] it must return -1", () => {
    expect(closestToZero([5, 4, -9, 6, -10, -1, 8])).toBe(-1);
  });

  test("when input is [8, 2, 3, -2] it must return 2", () => {
    expect(closestToZero([8, 2, 3, -2])).toBe(2);
  });

  test("when input is [8, -2, 3, 2] it must return 2", () => {
    expect(closestToZero([8, -2, 3, 2])).toBe(2);
  });

  test("when input is [2, 0], it must returns 0, as 0 is ... the closest number to 0", () => {
    expect(closestToZero([2, 0])).toBe(0);
  });

  test("Input must be an array", () => {
    expect(() => {
      closestToZero("not an array");
    }).toThrow(TypeError);
  });

  test("Non numeric values are ignored", () => {
    expect(closestToZero([2, 1.8, "1", "string", { a: 2 }, [1]])).toBe(1.8);
  });
});
