//
import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SURE_WEBAPP",
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occurred. ${err}`);
    });
};
