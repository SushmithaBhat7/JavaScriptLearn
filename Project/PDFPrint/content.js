chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "convertToPDF") {
    var element = document.documentElement;
    html2pdf(element);
  }
});
