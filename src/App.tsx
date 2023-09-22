import { FC, useCallback, useState } from 'react';

import './style.css';

const memoryColor = new Set();
const memoryMargin = new Set();
export function Child({ id }) {
  const functionColorRed = () => {
    return 'red';
  };

  const functionMargin = useCallback(() => {
    return '0';
  }, []);

  memoryColor.add(functionColorRed);
  memoryMargin.add(functionMargin);

  console.log('memoryColor', memoryColor);
  console.log('memoryMargin', memoryMargin);

  return (
    <>
      <div style={{ color: functionColorRed() }}>ID: {id}</div>
      <br />
      <div>
        <div># of functionColorRed definitions: {memoryColor.size}</div>
        <div># of functionMargin definitions: {memoryMargin.size}</div>
      </div>
    </>
  );
}

export const App: FC<{ name: string }> = ({ name }) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <Child id={count}></Child>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Press me
      </button>
    </div>
  );
};
