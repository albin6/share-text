import { Document, model, Schema, Types } from "mongoose";

export interface ISnippetDocument extends Document {
  _id: Types.ObjectId;
  slug: string;
  title: string;
  description: string;
  expiration: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const snippetSchema = new Schema<ISnippetDocument>(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    expiration: { type: Date, default: null },
  },
  { timestamps: true }
);

snippetSchema.index({ slug: 1 });

export const SnippetModel = model<ISnippetDocument>("Snippet", snippetSchema);
