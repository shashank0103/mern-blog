import express from 'express';
import { test } from "../controllers/user.controller.js";  // ✅ This should be correct

const router = express.Router();

router.get("/test",test);

export default router;