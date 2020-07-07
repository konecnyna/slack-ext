var test = "<all_urls>  , for testing match."
var hideSearch = true;
var hideApps = true;
var hideTitles = true;
function run() {
  const msgs = document.querySelectorAll('a[data-message-sender=""]');

  if (msgs.length) {
    msgs.forEach(it => {
      it.parentNode.parentNode.classList.add("spoiler");      
    });
  }
}

setInterval(run, 5000);