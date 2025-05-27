import mongoose from 'mongoose';

const ConnectDB = async () => {
  try {
    mongoose.connection.once("connected", () => {
      console.log("✅ Mongoose is connected successfully");
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/User-Authentication-System`);
  } catch (error) {
    console.error("❌ connection failed:", error.message);
  }
};

export default ConnectDB;
