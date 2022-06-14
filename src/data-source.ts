import mongoose from "mongoose";

// TODO should move to env file
const username = encodeURIComponent("test01");
const password = encodeURIComponent("0i7vcC83arvLmsax");
const uri = `mongodb+srv://${username}:${password}@cluster1.2z16u.mongodb.net/?retryWrites=true&w=majority`;

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

  } catch (err) {
    console.log(err);
  }
}

export { connectDB };
