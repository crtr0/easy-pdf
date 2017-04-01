const express = require('express')
const PDFDocument = require('pdfkit')

let app = express()

app.get('/', function (req, res) {
  let text = req.query.text
  if (!text || text.length === 0) {
    text = "Please make sure to pass-in a query parameter named \"text\". The value should be whatever you want to be in the PDF."
  }
  doc = new PDFDocument()
  res.setHeader('Content-Type', 'application/pdf');
  doc.pipe(res)
  doc.font('Courier-Bold')
  .fontSize(48)
  .text(text)
  .end()
})

app.listen(3000);
