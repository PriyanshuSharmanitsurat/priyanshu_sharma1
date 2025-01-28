// controllers/formController.js
const Form = require('../models/formModel');

const createForm = async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).send('Form submitted');
  } catch (error) {
    res.status(400).send('Error submitting form');
  }
};

module.exports = { createForm };
