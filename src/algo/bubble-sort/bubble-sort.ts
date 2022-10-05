export default function bubbleSort(input: number[]): number[] | Error {
  if (input.length === 0) throw new Error("Length of the input should be greater than 0.");

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - 1; j++) {
      if (input[j] > input[j + 1]) {
        const temp = input[j + 1];
        input[j + 1] = input[j];
        input[j] = temp;
      }
    }
  }

  return input;
}
