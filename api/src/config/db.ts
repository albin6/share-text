import mongoose from "mongoose";
import { env } from "./env";

class Database {
  private _dbURL: string;
  constructor() {
    this._dbURL = env.MONGO_URI;
  }

  async connect() {
    try {
      console.log(`Connecting to database at ${this._dbURL}`);
      await mongoose.connect(this._dbURL);
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed", error);
      throw error;
    }
  }
}

export const db = new Database();
