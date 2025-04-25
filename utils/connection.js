import mongoose from "mongoose";

const connection = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("conexion a MongoDB OK");
  } catch (error) {
    console.log("Conexión Error", error);
  }
};

export default connection;
