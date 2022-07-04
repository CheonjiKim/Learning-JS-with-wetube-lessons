import express from "express";
import {
  watch,
  edit,
  upload,
  see,
  deleteVideo,
} from "../contollers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload); //  '/:id'와의 순서가 중요하다. Reexp를 배우기 전에는 순서가 중요했다.
videoRouter.get("/:id(\\d+)", see); // Regular expression을 활용하여 digit만 변수로 받아낸다.
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
