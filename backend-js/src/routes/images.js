const express = require("express");
const path = require("path");
const router = express.Router();

// Pastikan path absolut, bukan relatif
const posterProgram = path.join(__dirname, "../fileSaved/images/program");
const coverJurnal = path.join(__dirname, "../fileSaved/images/jurnal");
const coverBerita = path.join(__dirname, "../fileSaved/images/berita");
const pdfJurnal = path.join(__dirname, "../fileSaved/pdf");
const otherFiles = path.join(__dirname, "../fileSaved/other");
// const tesFiles = path.join(__dirname, '../../public/uploads')

// Fungsi validasi filename (opsional tapi disarankan)
const isValidFilename = (filename) => /^[\w,\s-]+\.[A-Za-z]{3,10}$/.test(filename);

// Helper untuk mengirim file
const sendFileHandler = (folderPath) => (req, res) => {
  const filename = req.params.filename;
  
  if (!isValidFilename(filename)) {
    return res.status(400).send("Invalid filename");
  }

  const filePath = path.join(folderPath, filename);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
};

// Routes
router.get("/programs/:filename", sendFileHandler(posterProgram));
router.get("/jurnal/cover/:filename", sendFileHandler(coverJurnal));
router.get("/jurnal/pdf/:filename", sendFileHandler(pdfJurnal));
router.get("/berita/:filename", sendFileHandler(coverBerita));
router.get("/other/:filename", sendFileHandler(otherFiles));

module.exports = router;
