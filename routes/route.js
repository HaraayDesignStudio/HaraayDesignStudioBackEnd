const express = require("express");
const Candidate = require("../modules/candidate");
const Contact = require("../modules/contact");
const router = express.Router();

router.post("/api/application", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      number,
      resume,
      portfolio,
      description,
    } = req.body;

    let candidate = new Candidate({
      firstName,
      lastName,
      email,
      number,
      resume,
      portfolio,
      description,
    });

    user = await candidate.save();
    res.status(200).json({ msg: "Succesfully submitted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, number, description } = req.body;

    let contact = new Contact({
      firstName,
      lastName,
      email,
      number,
      description,
    });

    user = await contact.save();
    res.status(200).json({ msg: "Succesfully submitted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/api/candidates", async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all contact info
router.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
