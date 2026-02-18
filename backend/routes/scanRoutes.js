import express from "express";
import Scan from "../models/Scan.js";
import { Parser } from "json2csv";

const router = express.Router();

// GET by timestamp range
router.get("/", async (req, res) => {
  try {
    const { start, end } = req.query;

    const data = await Scan.find({
      timestamp: {
        $gte: new Date(start),
        $lte: new Date(end)
      }
    }).sort({ timestamp: 1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DOWNLOAD CSV
router.get("/download", async (req, res) => {
  try {
    const { start, end } = req.query;

    const data = await Scan.find({
      timestamp: {
        $gte: new Date(start),
        $lte: new Date(end)
      }
    });

    const parser = new Parser({
      fields: ["raw_data", "timestamp"]
    });

    const csv = parser.parse(data);

    res.header("Content-Type", "text/csv");
    res.attachment("scan_data.csv");
    res.send(csv);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
