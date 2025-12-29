import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/error.middleware.js";
import blogRoutes from "./routes/blog.routes.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use("/api/blogs", blogRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;