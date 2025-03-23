// Import Express and define server port
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Set up route for root URL ("/")
app.get("/", (req, res) => {
  res.send("Welcome to our server!");
});

// Import Post Router and use it in server.js
const postRouter = require("./routers/post");
app.use("/posts", postRouter);
