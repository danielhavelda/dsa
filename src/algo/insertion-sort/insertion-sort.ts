export default function insertionSort(input: number[]): number[] {
  if (input.length === 0) throw new Error("Length of the input should be greater than 0.");

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
