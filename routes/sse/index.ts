import express from "express";
import { authentication } from "../../middleware";
import SseController from "../../controller/sse/sse.controller";

const router = express.Router();

export default (io:any) => {

    const sseController = new SseController(io);

    router.get("/events", authentication(), sseController.onEvent);
    router.post("/response/v1/on_issue", sseController.onIssue);
    router.post("/response/v1/on_issue_status", sseController.onStatus);

    return router;
};
