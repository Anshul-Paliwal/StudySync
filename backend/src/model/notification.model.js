// notifications.model.ts
import mongoose, { Schema } from "mongoose";

const NotificationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ["quiz", "forum", "material", "system"], default: "system" },
    isRead: { type: Boolean, default: false },
    link: { type: String }, // optional: link to relevant resource
  },
  { timestamps: true }
);

export default mongoose.model("Notification", NotificationSchema);
