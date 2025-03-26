const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const Person = require("./models/Person");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/images/"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve static files from 'public'

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

// API Routes
app.get("/api/people", async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/people/:id/ngoan", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    person.ngoan += 1;
    await person.save();
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/people/:id/hu", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    person.hu += 1;
    await person.save();
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/people/:id/ngoan/decrease", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person.ngoan > 0) person.ngoan -= 1;
    await person.save();
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/people/:id/hu/decrease", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (person.hu > 0) person.hu -= 1;
    await person.save();
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/people/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) return res.status(404).json({ error: "Person not found" });
    res.json({ message: "Person deleted", person });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/people", upload.single("image"), async (req, res) => {
  try {
    console.log("POST /api/people received:", req.body, req.file);
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });
    const image = req.file ? `/images/${req.file.filename}` : `/images/default.png`; // Default image if none uploaded
    const newPerson = new Person({ name, ngoan: 0, hu: 0, image });
    await newPerson.save();
    console.log("New person added:", newPerson);
    res.status(201).json(newPerson);
  } catch (err) {
    console.error("Error adding person:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));