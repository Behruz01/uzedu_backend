import { Router } from "express";
const router = Router();

interface image {
  filename: string;
}

import multer from "multer";
import { v4 as uuid } from "uuid";
import { extname } from "path";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
      const randomName = uuid();
      cb(null, `${randomName}${extname(file.originalname)}`);
    },
  }),
});

router.post("/file", upload.single("file"), (req, res) => {
  const { filename } = req.file as image;
  res.json({ name: filename, message: "Success" });
});

export default router;
