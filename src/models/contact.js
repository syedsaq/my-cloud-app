// src/models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true, minlength: 10 },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
