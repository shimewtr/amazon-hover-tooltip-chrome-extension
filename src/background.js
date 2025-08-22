chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ enabled: true });
  updateIcon(true);
});

chrome.action.onClicked.addListener(async (tab) => {
  const result = await chrome.storage.sync.get(['enabled']);
  const newState = !result.enabled;

  await chrome.storage.sync.set({ enabled: newState });
  updateIcon(newState);

  chrome.tabs.sendMessage(tab.id, {
    action: 'toggleTooltip',
    enabled: newState,
  });
});

function updateIcon(enabled) {
  const title = enabled
    ? 'Amazon Hover Tooltip (ON)'
    : 'Amazon Hover Tooltip (OFF)';

  try {
    if (enabled) {
      chrome.action.setIcon({
        path: {
          16: '../icons/icon16.png',
          48: '../icons/icon48.png',
          128: '../icons/icon128.png',
        },
      });
    } else {
      chrome.action.setIcon({
        path: {
          16: '../icons/icon16-disabled.png',
          48: '../icons/icon48-disabled.png',
          128: '../icons/icon128-disabled.png',
        },
      });
    }
  } catch (error) {
    console.warn('Icon update failed:', error);
  }

  chrome.action.setTitle({ title });
}
