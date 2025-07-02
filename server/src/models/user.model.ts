import mongoose, { Document, Schema } from "mongoose";
import type { CustomerInterface } from "./customer.model.ts";

export interface UserInterface extends Document {
  email: string;
  password: string;
  isLoggedIn: boolean;
  createdAt: Date;
  id: string;
}

const UserSchema: Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    id: {
      type: String,
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);

UserSchema.pre("save", function (next) {
  if (this.isNew) {
    this.id = (this._id as mongoose.Types.ObjectId).toHexString();
  }
  next();
});

export const User = mongoose.model<UserInterface>("User", UserSchema);
