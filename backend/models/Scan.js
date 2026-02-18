import mongoose from "mongoose";

const scanSchema = new mongoose.Schema({
  raw_data: String,
  timestamp: {
    type: Date,
    required: true,
    index: true
  }
});

export default mongoose.model(
  "Scan",
  scanSchema,
  "barcode_reports"
);
