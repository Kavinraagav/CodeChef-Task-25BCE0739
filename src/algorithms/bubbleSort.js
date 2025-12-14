export function getBubbleSortSteps(inputArray) {
  const arr = [...inputArray];
  const steps = [];

  
  steps.push({
    array: [...arr],
  });

  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({
        array: [...arr],
        compareIndices: [j, j + 1],
      });

      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        
        steps.push({
          array: [...arr],
          swapIndices: [j, j + 1],
        });
      }
    }
  }
  steps.push({
    array: [...arr],
  });

  return steps;
}
