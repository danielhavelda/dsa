function merge(leftPartition: number[], rightPartition: number[], reference: number[]): void {
  const leftLength = reference.length / 2;
  const rightLength = reference.length - leftLength;
  let i: number = 0;
  let l: number = 0;
  let r: number = 0;

  while (l < leftLength && r < rightLength) {
    if (leftPartition[l] < rightPartition[r]) {
      reference[i] = leftPartition[l];
      l++;
    } else {
      reference[i] = rightPartition[r];
      r++;
    }

    i++;
  }

  while (l < leftLength) {
    reference[i] = leftPartition[l];
    l++;
    i++;
  }

  while (r < rightLength) {
    reference[i] = rightPartition[r];
    r++;
    i++;
  }
}

export default function recursiveMergeSort(input: number[]): number[] | Error {
  if (input.length === 0) throw new Error("Length of the input should be greater than 0.");
  if (input.length === 1) return input;

  const leftPartition: number[] | [] = [];
  const rightPartition: number[] | [] = [];
  let helperIndex: number = 0;

  for (let i = 0; i < input.length; i++) {
    if (i < input.length / 2) {
      leftPartition[i] = input[i];
    } else {
      rightPartition[helperIndex] = input[i];
      helperIndex++;
    }
  }

  recursiveMergeSort(leftPartition);
  recursiveMergeSort(rightPartition);
  merge(leftPartition, rightPartition, input);

  return input;
}
