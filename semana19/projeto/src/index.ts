import { AddressInfo } from "net";
import PostRouter from "./routes/PostRouter";
import UserRouter from "./routes/UserRouter";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", UserRouter);
app.use("/post", PostRouter);

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running on http://localhost:${address.port}`);
  } else {
    console.error(`Failed to run server.`);
  }
});
