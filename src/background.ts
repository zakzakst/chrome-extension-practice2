console.log("Background Loaded");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.type === "CHANGE_COLOR") {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (!tab.id) return;

    chrome.tabs.sendMessage(tab.id, {
      type: "CHANGE_COLOR",
    });
  }
});