export function getBinarySearchSteps(inputArray, target) {
  const array = [...inputArray].sort((a, b) => a - b);
  const steps = [];

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
      steps.push({
      array: [...array],
      left,
      right,
      mid,
    });

    if (array[mid] === target) {
        steps.push({
        array: [...array],
        left,
        right,
        mid,
        foundIndex: mid,
      });
      break;
    }

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return steps;
}
