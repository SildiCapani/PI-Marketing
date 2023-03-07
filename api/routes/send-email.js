import express from "express";
import { sendContact, sendEmail } from "../controllers/send-email.js";
import multer from 'multer';

const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single('cv'), sendEmail)
router.post("/contact", upload.single('cv'), sendContact)


export default router