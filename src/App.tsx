import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadCount = async () => {
      const result = await chrome.storage.local.get("count");
      setCount(Number(result.count ?? 0));
    };
    loadCount();
  }, []);

  const handleClick = async () => {
    const newCount = count + 1;
    setCount(newCount);
    await chrome.storage.local.set({
      count: newCount,
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>
        Count Up
      </button>
    </div>
  );
};

export default App;