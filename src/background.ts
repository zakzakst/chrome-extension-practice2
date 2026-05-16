console.log("Background Loaded");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  console.log("Message Received", message);

  if (message.type === "PING") {
    sendResponse({
      message: "PONG",
    });
  }
});