import React, { useEffect, useState } from "react";
import "./App.css";

import { getBubbleSortSteps } from "./algorithms/bubbleSort";
import { getSelectionSortSteps } from "./algorithms/selectionSort";
import { getBinarySearchSteps } from "./algorithms/binarySearch";

import ArrayBars from "./components/ArrayBars";
import Controls from "./components/Controls";
import AlgorithmInfo from "./components/AlgorithmInfo";

function App() {
  const [algorithm, setAlgorithm] = useState("bubble");
  const [arraySize, setArraySize] = useState(30);

  const [baseArray, setBaseArray] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [speed, setSpeed] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);

  const [target, setTarget] = useState(null); 


  const generateArray = (size = arraySize) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 95) + 5);
    }

    setBaseArray(arr);

    
    const sorted = [...arr].sort((a, b) => a - b);
    if (target === null) {
      setTarget(sorted[Math.floor(sorted.length / 2)]);
    }

    const usedTarget =
      target === null
        ? sorted[Math.floor(sorted.length / 2)]
        : target;

    const algoSteps = getStepsForAlgorithm(algorithm, arr, usedTarget);

    setSteps(algoSteps);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };


  const getStepsForAlgorithm = (algo, arr, t = null) => {
    if (algo === "bubble") return getBubbleSortSteps(arr);
    if (algo === "selection") return getSelectionSortSteps(arr);
    if (algo === "binary") {
      const sorted = [...arr].sort((a, b) => a - b);
      const chosenTarget = t !== null ? t : sorted[Math.floor(sorted.length / 2)];
      return getBinarySearchSteps(arr, chosenTarget);
    }
    return [];
  };


  useEffect(() => {
    if (baseArray.length === 0) return;

    const sorted = [...baseArray].sort((a, b) => a - b);
    const chosenTarget =
      target !== null
        ? target
        : sorted[Math.floor(sorted.length / 2)];

    const algoSteps = getStepsForAlgorithm(
      algorithm,
      baseArray,
      chosenTarget
    );

    setSteps(algoSteps);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  }, [algorithm, target, baseArray]);


  useEffect(() => {
    if (!isPlaying) return;

    if (currentStepIndex >= steps.length - 1) {
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStepIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex, steps, speed]);


  useEffect(() => {
    generateArray(arraySize);
  }, []);

  const currentStep = steps[currentStepIndex] || { array: [] };


  return (
    <div className="app">
      
      <header className="navbar">
        <div className="nav-left">
          <h1>ALGO LABS</h1>
          <p className="subtitle">Where Algorithms Come Alive</p>
        </div>
      </header>

      
      <main className="main-layout">

        <section className="left-panel">
          <Controls
            algorithm={algorithm}
            onAlgorithmChange={setAlgorithm}
            speed={speed}
            onSpeedChange={setSpeed}
            size={arraySize}
            onSizeChange={(v) => {
              setArraySize(v);
              generateArray(v);
            }}
            onGenerateArray={() => generateArray(arraySize)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onReset={() => {
              setCurrentStepIndex(0);
              setIsPlaying(false);
            }}
            isPlaying={isPlaying}
            target={target}
            onTargetChange={setTarget}
          />

          
          <div className="visualizer-card card">
            <h2 className="visualizer-title">Array Visualization</h2>

            <ArrayBars step={currentStep} />

            <p className="step-counter">
              Step {currentStepIndex + 1} / {steps.length}
            </p>
          </div>
        </section>

        
        <aside className="right-panel">
          <AlgorithmInfo algorithm={algorithm} />
        </aside>
      </main>

      <footer className="footer">
        Built by <strong>Kavinraagav</strong>
      </footer>
    </div>
  );
}

export default App;
