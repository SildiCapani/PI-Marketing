import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";
import multer from "multer";

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now()+file.originalname)
    }
  })
  const upload = multer({ storage });

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", upload.single('file') ,addPost)
router.delete("/:id", deletePost)
router.put("/:id", upload.single('file') ,updatePost)


export default router