
function titleQuery(){
  chrome.tabs.query({
      active: true,                              // Select active tabs
      windowId: chrome.windows.WINDOW_ID_CURRENT // In the current window
  }, function(array_of_Tabs) {
      // Since there can only be one active tab in one active window, 
      //  the array has only one element
      var tab = array_of_Tabs[0];
      // Example:
      var url = tab.url;
      var isNetflix = url.indexOf("http://movies.netflix.com/WiMovie/");
      if (isNetflix !== -1){
        url = url.replace("http://movies.netflix.com/WiMovie/", "");
        slash_place = url.search("/");
        url = url.substr(0, slash_place);
        // document.getElementById('response').innerHTML = ( url );
        // ... do something with url variable
        url = url.replace(/_/g, "+");
        var query = "http://www.youtube.com/results?search_query="+url+"+trailer";
        chrome.tabs.create({url: query});
      }

  });
}

chrome.browserAction.onClicked.addListener(function(){
  titleQuery();
});