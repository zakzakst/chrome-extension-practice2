const App = () => {
  const handleClick = async () => {
    await chrome.runtime.sendMessage({
      type: "CHANGE_COLOR",
    });
  };

  return (
    <div>
      <h1>Chrome Extension</h1>

      <button onClick={handleClick}>
        背景色変更
      </button>
    </div>
  );
};

export default App;