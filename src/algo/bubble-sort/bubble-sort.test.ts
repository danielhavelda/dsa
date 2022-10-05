import bubbleSort from "./bubble-sort";
import { describe, expect, test } from "@jest/globals";

let input: number[] | [];
let expected: number[] | [];

beforeEach(() => {
  input = [3, 2, 7, 5, 8, 20, 11, 69, 1, 420];
  expected = [1, 2, 3, 5, 7, 8, 11, 20, 69, 420];
});

afterEach(() => {
  input = [];
  expected = [];
});

describe("Argument checks", () => {
  test("Checking the length", () => {
    expect(() => bubbleSort([])).toThrow("Length of the input should be greater than 0.");
  });
});

describe("Functionality checks", () => {
  test("Sorting in ascending order", () => {
    expect(bubbleSort(input)).toEqual(expected);
  });
});
