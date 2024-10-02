require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/dbConfig");
const app = express();
const cors = require("cors");

const authRouter = require("./src/routes/auth.routes");
const userRouter = require("./src/routes/user.routes");

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const PORT = process.env.PORT || 8000;

// Mount the routes
app.use("/api/auth", authRouter);
app.use("/api", userRouter);

// Define a basic route for the root URL
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// sequelize.sync({ force: false }).then(() => {
//   console.log("Database & tables created!");
// });

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Handle SIGINT (Ctrl+C) gracefully
process.on("SIGINT", () => {
  console.log("Received SIGINT. Closing server and database connection...");
  server.close(() => {
    console.log("Server closed");
    sequelize
      .close()
      .then(() => {
        console.log("Database connection closed");
        process.exit(0);
      })
      .catch((err) => {
        console.error("Error closing database connection:", err);
        process.exit(1);
      });
  });
});
