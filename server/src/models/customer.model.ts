import mongoose, { Document, Schema } from "mongoose";

export interface CustomerInterface extends Document {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  tags?: string[];
  createdAt: Date;
  id: string;
}

const CustomerSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    company: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    createdAt: { type: Date, default: Date.now },
    id: { type: String, unique: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  },
);

CustomerSchema.pre("save", function (next) {
  if (this.isNew) {
    this.id = (this._id as mongoose.Types.ObjectId).toHexString();
  }
  next();
});

export const Customer = mongoose.model<CustomerInterface>(
  "Customer",
  CustomerSchema
);
