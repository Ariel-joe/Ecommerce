import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
}, {
    timestamps: true,
});

export const User = new model("user", userSchema)