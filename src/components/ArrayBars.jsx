import React from "react";

function ArrayBars({ step }) {
  if (!step || !step.array) return null;

  const {
    array,
    compareIndices = [],
    swapIndices = [],
    left,
    right,
    mid,
    foundIndex,
  } = step;

  return (
    <div className="bars-wrapper">
      {array.map((value, index) => {
        let className = "bar";
        if (
          left !== undefined &&
          right !== undefined &&
          (index < left || index > right)
        ) {
          className += " bar-eliminated";
        }
        if (index === mid) {
          className += " bar-mid";
        }

        
        if (index === foundIndex) {
          className += " bar-found";
        }

        
        if (compareIndices.includes(index)) {
          className += " bar-compare";
        }

        
        if (swapIndices.includes(index)) {
          className += " bar-swap";
        }

        return (
          <div
            key={index}
            className={className}
            style={{ height: `${value * 3}px` }}
          >
            <span className="bar-value">{value}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ArrayBars;


        
