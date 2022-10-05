export default function insertionSort(input: number[]): number[] | Error {
  if (input.length === 0) throw new Error("Length of the input should be greater than 0.");
  if (input.length === 1) return input;

  for (let i = 0; i < input.length; i++) {
    let prevIndex: number = i - 1;
    let currIndexValue = input[i];

    while (prevIndex >= 0 && input[prevIndex] > currIndexValue) {
      input[prevIndex + 1] = input[prevIndex];
      prevIndex = prevIndex - 1;
    }

    input[prevIndex + 1] = currIndexValue;
  }

  return input;
}
