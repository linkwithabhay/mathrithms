import express from "express";
import cors from "cors";
import userRoute from "./routes/user.js";

const app = express();
app.use(cors());

app.use("/users", userRoute);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
