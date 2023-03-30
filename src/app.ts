import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router";

const app = express();

app.use(cors());

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(router);

export default app;
