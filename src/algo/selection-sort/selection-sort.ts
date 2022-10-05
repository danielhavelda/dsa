export default function selectionSort(input: number[]): number[] | Error {
  if (input.length === 0) throw new Error("Length of the input should be greater than 0.");
  if (input.length === 1) return input;

  for (let i = 0; i < input.length - 1; i++) {
    let minIndex: number = i;

    for (let j = i + 1; j < input.length; j++) {
      if (input[minIndex] > input[j]) minIndex = j;
    }

    const temp: number = input[i];
    input[i] = input[minIndex];
    input[minIndex] = temp;
  }

  return input;
}
