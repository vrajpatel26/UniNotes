import express from "express";
import { sendFeedback } from "../controllers/feedback.controller.js";

const feedbackRouter = express.Router();

feedbackRouter.post("/", sendFeedback);

export default feedbackRouter;