const Contact = require('../models/contact');

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message are required'
      });
    }

    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: contact
    });
  } catch (error) {
    next(error);
  }
};

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    next(error);
  }
};
