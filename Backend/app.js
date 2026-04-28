import express from "express";
import cors from "cors";
import blockRoutes from "./src/routes/blockRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blocks", blockRoutes);

export default app;