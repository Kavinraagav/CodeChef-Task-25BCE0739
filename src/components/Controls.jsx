import React from "react";

const ALGORITHMS = [
  { id: "bubble", label: "Bubble Sort" },
  { id: "selection", label: "Selection Sort" },
  { id: "binary", label: "Binary Search" },
];

function Controls({
  algorithm,
  onAlgorithmChange,
  speed,
  onSpeedChange,
  size,
  onSizeChange,
  onGenerateArray,
  onPlay,
  onPause,
  onReset,
  isPlaying,
  target,
  onTargetChange,
}) {
  return (
    <div className="controls card">

      <div className="controls-row algo-row" role="tablist" aria-label="Algorithms">
        {ALGORITHMS.map((algo) => {
          const active = algorithm === algo.id;
          return (
            <button
              key={algo.id}
              className={`algo-btn ${active ? "active" : ""}`}
              onClick={() => onAlgorithmChange(algo.id)}
              disabled={isPlaying}
              aria-pressed={active}
              title={algo.label}
            >
              {algo.label}
            </button>
          );
        })}
        <div style={{ marginLeft: "auto" }}>
          <button
            onClick={() => onGenerateArray()}
            className="btn"
            disabled={isPlaying}
            title="Generate a new random array"
          >
            Generate New Array
          </button>
        </div>
      </div>

      {algorithm === "binary" && (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <label style={{ color: "#c4c7d1", fontSize: "0.9rem" }}>
            Target:
            <input
              type="number"
              value={target ?? ""}
              onChange={(e) => {
                const v = e.target.value === "" ? null : Number(e.target.value);
                onTargetChange(v);
              }}
              placeholder="Enter number to search"
              style={{
                marginLeft: 8,
                padding: "6px 8px",
                borderRadius: 8,
                border: "1px solid #292a30",
                background: "#0f1013",
                color: "#e6edf3",
                width: 140,
              }}
              disabled={isPlaying}
            />
          </label>

          <div style={{ color: "#9aa0b4", fontSize: "0.9rem" }}>
            Tip: If left empty, search uses the middle value of the sorted array.
          </div>
        </div>
      )}

      
      <div className="controls-row">
        <label>
          Speed (ms): {speed}
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="slider"
            disabled={isPlaying}
            title="Animation speed (lower is faster)"
          />
        </label>

        <label>
          Size: {size}
          <input
            type="range"
            min="5"
            max="60"
            step="1"
            value={size}
            onChange={(e) => onSizeChange(Number(e.target.value))}
            className="slider"
            disabled={isPlaying}
            title="Number of bars in the array"
          />
        </label>
      </div>

      
      <div className="controls-row" style={{ justifyContent: "flex-start", gap: "12px" }}>
        {!isPlaying ? (
          <button onClick={onPlay} className="btn" title="Play animation">
            ▶ Play
          </button>
        ) : (
          <button onClick={onPause} className="btn" title="Pause animation">
            ⏸ Pause
          </button>
        )}

        <button onClick={onReset} className="btn" title="Reset to first step">
          ⟲ Reset
        </button>
      </div>
    </div>
  );
}

export default Controls;
