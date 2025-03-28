import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", function (request, response) {
  response.json({ message: "Beep" });
});

app.post("/message", function (request, response) {
  response.json({ message: "Boop" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
