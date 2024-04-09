import express from "express";
import SseController from "../../controller/sse/sse.controller";

const router = express.Router();
const sseController = new SseController();

router.get("/events", sseController.onEvent);

router.post("/response/v1/on_issue", sseController.onIssue);
router.post("/response/v1/on_issue_status", sseController.onStatus);

export default router;
