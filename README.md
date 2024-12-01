# Reacture

### React component optimization tool

Reacture is a plugin for Vite, Next.js and Webpack that helps optimize the perofmance of your React components during the build process. It uses OpenAI's `pt-4o-mini` model to generate optimized code, improving render speed and reducing unnecessary re-renders.

### Key Features:

- Automatic performance optimization 
- Component optimization
- Support for Next.js / Vite / Webpack
- Fallback local optimization
- Configurable performance thresholds

## Installation

```bash
npm install reacture
```

## Usage

### For Vite
To use Reacture with Vite, update your `vite.config.js` file as follows:

```js
import { Reacture } from 'reacture';

export default {
  plugins: [
    Reacture.vite({
      apiKey: 'your-openai-api-key',
      threshold: 0.5,
    }),
  ],
};

```

### For Next.js
To use Reacture in your Next.js project, add it to the `next.config.js` file:

```js
const { Reacture } = require('reacture');

module.exports = {
  reacture: {
    apiKey: 'your-openai-api-key',
    threshold: 0.5,  // Optional: Optimization threshold
    platforms: ['nextjs', 'vite', 'webpack'],  // Optional: Platforms you want to use Reacture on
  }
};
```

### For Webpack
To use Reacture with Webpack, update your `webpack.config.js` file:

```js
const { Reacture } = require('reacture');

module.exports = {
  plugins: [
    Reacture.webpack({
      apiKey: 'your-openai-api-key',
      threshold: 0.5,
    }),
  ],
};
```

## How it works

1. Analyze and Optimize
Reacture automatically analyzes your React components and generates optimized code.

2. Use of GPT-4
The plugin uses OpenAI's GPT-4 model to suggest performance improvements, such as reducing re-renders, using `React.memo` or 'useMemo`.

3. Fallback to Local Optimization
If no API key is provided, Reacture will use built-in optimization strategies to improve component performance.

## Example of Optimized Code

For example, given the following component:

```js
const MyComponent = ({ items }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
};
```

Reacture will optimize it like this:

```js
const MyComponent = React.memo(({ items }) => {
  const [count, setCount] = useState(0);

  const handleClick = React.useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
});
