import express from "express";

// Express
const app = express();

// Server port
const PORT = 3000;

app.use(express.json());

// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
