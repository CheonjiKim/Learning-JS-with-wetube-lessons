import express from "express";
import { join, login } from "../contollers/userController";
import { trending, search } from "../contollers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
