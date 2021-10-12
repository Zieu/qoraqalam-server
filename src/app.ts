import express from "express";
import cors from "cors";
import morgan from "morgan";

import { authRoutes, articleRoutes, userRoutes } from "./api/v1";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("short"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/articles", articleRoutes);
