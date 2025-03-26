// server/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Person = require("./models/Person");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));