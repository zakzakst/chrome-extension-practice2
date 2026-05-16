console.log("Background Loaded");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});