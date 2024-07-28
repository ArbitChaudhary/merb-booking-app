import multer from "multer"


// USING DISK STORAGE
// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
// app.post('/cool-profile', cpUpload, function (req, res, next) {
 
// })

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./public/temp")
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })

// USING MEMORY STORAGE

const storage = multer.memoryStorage();


export const upload = multer({
  storage :storage,
  limits : {
    fileSize : 5 * 1024 * 1024
  }
});
  
//  export const upload = multer({ storage: storage })
  