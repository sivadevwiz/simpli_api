const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const api_urls = require("./api_routes/api_routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () =>
  console.log("MongoDB connected")
);

app.use(express.json());
app.use(cors());
app.use("/api", api_urls);

app.listen(5000, () => console.log("server running at 5000"));
