import "dotenv/config";

import { CreateApp } from "./app.js";
import Mongoose from "mongoose";

const app = CreateApp();

const PORT = process.env.PORT || 3000;

Mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
