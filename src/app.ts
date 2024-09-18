import "dotenv/config";
import express from "express";

const { PORT, HOST } = process.env;

const app = express();

const getPort = () => {
  const DEFAULT_PORT = 3000;
  return PORT ? +PORT : DEFAULT_PORT;
};

const getHost = () => {
  const DEFAULT_HOST = "127.0.0.1";
  return HOST ? HOST : DEFAULT_HOST;
};

app.get("/", (req, res) => {
  res.send("Hello, TypeScript + Node.js + Express!");
});

app.listen(getPort(), getHost(), () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
