const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); // Import the path module

// Adjust the dotenv config to specify the path to the .env file
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const app = express();
const port = 3001;

// Create MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL: " + connection.threadId);

  // Create the database if it doesn't exist
  connection.query("CREATE DATABASE IF NOT EXISTS signup_db", (err, result) => {
    if (err) {
      console.error("Error creating database: " + err.stack);
      return;
    }
    console.log("Database created or already exists");
  });

  // Use the created database
  connection.query("USE signup_db", (err, result) => {
    if (err) {
      console.error("Error selecting database: " + err.stack);
      return;
    }
    console.log("Using database: signup_db");
  });

  // Create users table
  const createTableQuerySignup = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      phone VARCHAR(255) NOT NULL,
      zip VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL
    )
  `;
  connection.query(createTableQuerySignup, (err, result) => {
    if (err) {
      console.error("Error creating users table: " + err.stack);
      return;
    }
    console.log("Signup users table created or already exists");
  });
});

app.use(express.json());
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle user registration for signup
app.post("/signup", (req, res) => {
  const { username, password, email, phone, address, zip } = req.body;
  const insertQuery =
    "INSERT INTO users (username, password, email, phone, address, zip) VALUES (?, ?, ?, ?, ?, ?)";
  connection.query(
    insertQuery,
    [username, password, email, phone, address, zip],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Signup registration failed" });
      } else {
        res.status(200).json("Signup registration successful");
      }
    }
  );
});

// Route to handle user login
app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  // Query to fetch user from database based on email
  const selectQuery = "SELECT * FROM users WHERE email = ?";
  connection.query(selectQuery, [email], (error, results, fields) => {
    if (error) {
      // console.error("Error retrieving user from database: " + error.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    if (results.length === 0) {
      // User with the provided email does not exist
      res.status(404).json({ error: "User not found : Invalid user" });
      return;
    }

    const user = results[0];

    // Check if the provided password matches the hashed password in the database
    if (user.password === password) {
      // Passwords match, user is authenticated
      res.status(200).json({ message: "Login successful", user });
    } else {
      // Passwords do not match
      res.status(401).json({ error: "Invalid credentials" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// --------------------------------------------------------
