import recursiveMergeSort from "./recursive-merge-sort";
import { describe, test, expect, afterEach } from "@jest/globals";

let input: number[] = [3, 2, 7, 5, 8, 20, 11, 69, 1, 420];
const expected: number[] = [1, 2, 3, 5, 7, 8, 11, 20, 69, 420];

afterEach(() => {
  input = [3, 2, 7, 5, 8, 20, 11, 69, 1, 420];
});

describe("Argument checks", () => {
  test("Recursive: Checking the length", () => {
    expect(() => recursiveMergeSort([])).toThrow("Length of the input should be greater than 0.");
  });
});

describe("Functionality checkst", () => {
  test("Recursive: Sorting in ascending order", () => {
    expect(recursiveMergeSort(input)).toEqual(expected);
  });
});
