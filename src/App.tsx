const App = () => {
  const handleClick = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (!tab.id) return;

    chrome.tabs.sendMessage(tab.id, {
      type: "CHANGE_COLOR",
    });
  };

  return (
    <div>
      <h1>Chrome Extension</h1>

      <button onClick={handleClick}>
        背景色を変更
      </button>
    </div>
  );
};

export default App;