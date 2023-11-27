var port = chrome.runtime.connect({ name: "popup", includeTlsChannelId: true });

document.getElementById("convertButton").addEventListener("click", function () {
  port.postMessage({ action: "convertToPDF" });
});

port.onMessage.addListener(function (msg) {
  console.log("Message from background:", msg);

  // Handle the message or perform actions based on the message content
  if (msg.action === "pdfGenerated") {
    // msg.pdfData contains the PDF data, you can save it or do further processing
    console.log("PDF Generated:", msg.pdfData);
  }
});
