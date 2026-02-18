import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import scanRoutes from "./routes/scanRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({origin: ["http://localhost:5173", "https://your-netlify-site.netlify.app"]}));
app.use(express.json());

app.use("/api/scans", scanRoutes);

app.listen(process.env.PORT || 5001, () => {
  console.log("Server running on port", process.env.PORT);
});
