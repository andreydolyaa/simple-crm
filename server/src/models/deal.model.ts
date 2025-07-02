import mongoose, { Document, Schema } from "mongoose";
import type { CustomerInterface } from "./customer.model.ts";

export interface DealInterface extends Document {
  customerId: Pick<CustomerInterface, "_id">;
  title: string;
  amount: number;
  status: string;
  expectedCloseDate: Date;
  createdAt: Date;
  id: string;
}

const DealSchema: Schema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "Negotiation", "Won", "Lost"],
      default: "New",
    },
    expectedCloseDate: {
      type: Date,
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

DealSchema.pre("save", function (next) {
  if (this.isNew) {
    this.id = (this._id as mongoose.Types.ObjectId).toHexString();
  }
  next();
});

export const Deal = mongoose.model<DealInterface>("Deal", DealSchema);
