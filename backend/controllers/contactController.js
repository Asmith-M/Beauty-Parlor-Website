const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
