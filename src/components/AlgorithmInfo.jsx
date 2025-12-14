import React from "react";


function AlgorithmInfo({ algorithm }) {
  const CodeBlock = ({ children }) => (
    <pre
      style={{
        background: "#0f1013",
        padding: "12px",
        borderRadius: "10px",
        color: "#cfc8ff",
        overflowX: "auto",
        border: "1px solid #262730",
        fontSize: "0.85rem",
        lineHeight: "1.5",
        fontFamily: "JetBrains Mono, monospace",
      }}
    >
      {children}
    </pre>
  );

  return (
    <div className="info-card card">
      {algorithm === "bubble" && (
        <>
          <h2>BUBBLE SORT</h2>
          <p className="info-description">
            Bubble Sort compares adjacent elements and swaps them if they are in the
            wrong order. This process repeats until the array is sorted.
          </p>

          <div className="info-meta">
            <p>🕒 Time Complexity: O(n²)</p>
            <p>📦 Space Complexity: O(1)</p>
            
          </div>

          <h3 className="info-code-title">Pseudocode</h3>
          <CodeBlock>
{`repeat until no swaps:
    swapped = false
    for i from 0 to n-2:
        if arr[i] > arr[i+1]:
            swap(arr[i], arr[i+1])
            swapped = true`}
          </CodeBlock>
        </>
      )}

      {algorithm === "selection" && (
        <>
          <h2>SELECTION SORT</h2>
          <p className="info-description">
            Selection Sort repeatedly selects the minimum element from the unsorted
            portion and places it at the beginning.
          </p>

          <div className="info-meta">
            <p>🕒 Time Complexity: O(n²)</p>
            <p>📦 Space Complexity: O(1)</p>
            
          </div>

          <h3 className="info-code-title">Pseudocode</h3>
          <CodeBlock>
{`for i from 0 to n-1:
    minIndex = i
    for j from i+1 to n:
        if arr[j] < arr[minIndex]:
            minIndex = j
    swap(arr[i], arr[minIndex])`}
          </CodeBlock>
        </>
      )}

      
      {algorithm === "binary" && (
        <>
          <h2>BINARY SEARCH</h2>
          <p className="info-description">
            Binary Search locates a target value inside a sorted array by repeatedly
            dividing the search interval in half.
          </p>

          <div className="info-meta">
            <p>🕒 Time Complexity: O(log n)</p>
            <p>📦 Space Complexity: O(1)</p>
            <p>⚠ Requires Sorted Array</p>
          </div>

          <h3 className="info-code-title">Pseudocode</h3>
          <CodeBlock>
{`left = 0
right = n - 1

while left <= right:
    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    else if arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1

return -1`}
          </CodeBlock>
        </>
      )}
    </div>
  );
}

export default AlgorithmInfo;
