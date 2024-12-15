import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [stepExplanation, setStepExplanation] = useState('');
  const [currentCode, setCurrentCode] = useState('');

  // Bubble Sort Algorithm with Educational Annotations
  const bubbleSort = async () => {
    const arr = [...array];
    const n = arr.length;

    setStepExplanation('Starting Bubble Sort algorithm...');
    setCurrentCode(`
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          // Compare adjacent elements
        }
      }
    `);

    for (let i = 0; i < n - 1; i++) {
      setStepExplanation(`Outer loop: Pass ${i + 1} through the array`);
      
      for (let j = 0; j < n - i - 1; j++) {
        // Highlight comparing elements
        setComparing([j, j + 1]);
        setStepExplanation(`Comparing elements: ${arr[j]} and ${arr[j + 1]}`);
        
        setCurrentCode(`
          if (arr[${j}] > arr[${j + 1}]) {
            // Swap elements
            [arr[${j}], arr[${j + 1}]] = [arr[${j + 1}], arr[${j}]];
          }
        `);

        await new Promise(resolve => setTimeout(resolve, 500));

        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          setStepExplanation(`Swapped ${arr[j + 1]} and ${arr[j]}`);
        }
      }
      
      // Mark sorted portion
      setSorted(prev => [...prev, n - i - 1]);
    }

    setStepExplanation('Array is now sorted!');
    setCurrentCode('// Sorting Complete');
    setComparing([]);
  };

  // Generate initial random array
  const generateArray = () => {
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
    setComparing([]);
    setSorted([]);
    setStepExplanation('New random array generated');
    setCurrentCode('// Ready to sort');
  };

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-6">Bubble Sort Visualization</h1>
      
      <div className="flex justify-center space-x-4 mb-6">
        <button 
          onClick={generateArray} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate New Array
        </button>
        <button 
          onClick={bubbleSort} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Start Sorting
        </button>
      </div>

      <div className="flex-grow flex">
        <div className="w-2/3 flex justify-center items-end h-64 space-x-2">
          {array.map((value, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ 
                height: `${value * 3}px`,
                backgroundColor: sorted.includes(index) 
                  ? '#10B981' // Emerald for sorted
                  : comparing.includes(index) 
                    ? '#FBBF24' // Amber for comparing
                    : '#3B82F6' // Blue for unsorted
              }}
              transition={{ duration: 0.2 }}
              className="w-10 rounded"
            >
              <div className="text-center text-white mt-2">{value}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="w-1/3 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Algorithm Explanation</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Current Step:</h3>
            <p>{stepExplanation}</p>
          </div>
          <div>
            <h3 className="font-semibold">Current Code:</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">{currentCode}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;