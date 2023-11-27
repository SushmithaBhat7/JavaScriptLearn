chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension installed or updated");
});

chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name === "popup");
  console.log("Connected to popup");

  port.onMessage.addListener(function (msg) {
    console.log("Message from popup:", msg);

    // Handle the message or perform actions based on the message content
    if (msg.action === "convertToPDF") {
      console.log("Converting HTML to PDF...");

      // Assuming htmlContent is the HTML content you want to convert
      var htmlContent =
        "<h1>Hello, World!</h1><p>This is a sample HTML content.</p>";

      // Use html2pdf to convert HTML to PDF
      html2pdf()
        .from(htmlContent)
        .outputPdf()
        .then(function (pdf) {
          // Send the PDF data back to the popup
          port.postMessage({ action: "pdfGenerated", pdfData: pdf });
        });
    }
  });
});
