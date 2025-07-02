import mongoose, { Document, Schema } from "mongoose";
import type { CustomerInterface } from "./customer.model.ts";
import type { DealInterface } from "./deal.model.ts";

export interface TaskInterface extends Document {
  customerId: Pick<CustomerInterface, "_id">;
  dealId: Pick<DealInterface, "_id">;
  note: string;
  dueDate: Date;
  completed: Boolean;
  createdAt: Date;
  id: string;
}

const TaskSchema: Schema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    dealId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Deal",
    },
    note: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
    },
    completed: {
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

TaskSchema.pre("save", function (next) {
  if (this.isNew) {
    this.id = (this._id as mongoose.Types.ObjectId).toHexString();
  }
  next();
});

export const Task = mongoose.model<TaskInterface>("Task", TaskSchema);
