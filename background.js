var last_source_url;

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: 'https://newspicks.com/'
  }, function(new_tab){
    last_source_url = tab.url;
    // chrome.tabs.sendMessage(new_tab.id, {
    //   source_url: tab.url
    // });
  });
});

chrome.runtime.onMessage.addListener(
  function (req, sender, sendResp){
    if (req.key === 'last_source_url' && typeof last_source_url !== 'undefined') {
      sendResp({
        value: last_source_url
      });
      last_source_url = undefined;
    }
  }
);
