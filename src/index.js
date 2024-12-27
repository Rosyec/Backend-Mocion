import cors from "cors";
import express from "express";
import { envValidation } from "./envValidation.js";
import router from "./routes/comicVine.route.js";

const app = express();
app.use(cors());

app.set("port", envValidation.NODE_PORT);

app.use("/comicVine", router);

app.listen(app.get("port"), () => {
  console.log("Server running in port", app.get("port"));
});
