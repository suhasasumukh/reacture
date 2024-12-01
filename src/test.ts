import { Reacture } from './index';

async function testOptimization() {
  // Create Reacture instance with or without API key
  const reacture = new Reacture({ 
    apiKey: process.env.OPENAI_API_KEY 
  });

  // Example React component to optimize
  const sampleComponent = `
import React, { useState } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Simulating an expensive computation
    for(let i = 0; i < 1000000; i++) {}
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default ExpensiveComponent;
`;

  try {
    console.log("Original Component:");
    console.log(sampleComponent);

    console.log("\n--- Optimizing Component ---\n");
    
    const optimizedComponent = await reacture.optimizeComponent(sampleComponent);
    
    console.log("Optimized Component:");
    console.log(optimizedComponent);
  } catch (error) {
    console.error('Optimization failed:', error);
  }
}

testOptimization();