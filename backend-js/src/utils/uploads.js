const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Middleware factory
const createUploader = (getDestinationCallback) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const folder = getDestinationCallback(req, file);

      fs.mkdirSync(folder, { recursive: true });
      cb(null, folder);
    },
    filename: function (req, file, cb) {
      const uniqueName = Date.now() + "-" + file.originalname;
      cb(null, uniqueName); 
    }
  });

  return multer({ storage });
};

module.exports = {
  createUploader
};
