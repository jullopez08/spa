//de server al router principal index
import express from "express";
import router from "./routes/indexRouter";

const server = express();

server.use(router)

export default server;
