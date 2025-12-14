export function getSelectionSortSteps(inputArray) {
  const arr = [...inputArray];
  const steps = [];

  steps.push({ array: [...arr] });

  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      steps.push({
        array: [...arr],
        compareIndices: [minIndex, j],
      });

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
          steps.push({
          array: [...arr],
          compareIndices: [minIndex, j],
        });
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;

      steps.push({
        array: [...arr],
        swapIndices: [i, minIndex],
      });
    }
  }

  steps.push({ array: [...arr] });

  return steps;
}
