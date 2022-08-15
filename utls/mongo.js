import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error(
    "Please define the MONGO_URL environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

//! save the dataBase connection
async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGO_URL)
      .then((mongoose) => {
        return mongoose;
      })
      .then(() => {
        console.log("Connected to Data Base ");
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
