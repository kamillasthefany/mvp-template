const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  dest: path.resolve(__dirname, '..', 'uploads'),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (erro, hash) => {
        if (erro) callback(erro);
        const fileName = `${hash.toString('hex')}-${file.originalname}`;
        callback(null, fileName);
      })
    },
  }),
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  fileFilter: (request, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Formato inválido'));
    }

  }
};