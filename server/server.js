const cors = require("cors");
const { configDotenv } = require("dotenv");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: "",
    methods: ["GET", "POST"],
  })
);
configDotenv.config();

app.get("/", function (request, response) {
  response.json({ message: "Beep" });
});

app.post("/message", function (request, response) {
  response.json({ message: "Boop" });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
