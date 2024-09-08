// server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


// Set up SQLite database
const db = new sqlite3.Database('./contacts.db', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      date TEXT,
      time TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

app.post('/api/submit-form', (req, res) => {
  console.log('Received form submission:', req.body);
  const { name, email, message } = req.body;

  // Save to database
  db.run('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message], function(err) {
    if (err) {
      console.error('Error saving to database:', err);
      return res.status(500).json({ error: 'Error saving to database' });
    }

    console.log('Form data saved to database');

    // Send email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to the same Gmail account
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Error sending email' });
      }
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Form submitted successfully' });
    });
  });
});


// Endpoint to handle booking form submission
app.post('/api/book-now', (req, res) => {
  const { name, email, date, time } = req.body;

  // Save to database
  db.run('INSERT INTO bookings (name, email, date, time) VALUES (?, ?, ?, ?)', [name, email, date, time], function(err) {
    if (err) {
      console.error('Error saving to database:', err);
      return res.status(500).json({ error: 'Error saving to database' });
    }

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Appointment Confirmation',
      text: `
        Dear ${name},
        
        Your appointment has been confirmed for ${date} at ${time}.
        
        Thank you for booking with us!
        
        Best regards,
        The Team
      `
    };

    // Send notification email to doctor
    const doctorMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.DOCTOR_EMAIL,
      subject: 'New Appointment Booking',
      text: `
        A new appointment has been booked.

        Details:
        Name: ${name}
        Email: ${email}
        Date: ${date}
        Time: ${time}
      `
    };

    // Send emails
    transporter.sendMail(userMailOptions, (error) => {
      if (error) {
        console.error('Error sending confirmation email to user:', error);
        return res.status(500).json({ error: 'Error sending confirmation email' });
      }

      transporter.sendMail(doctorMailOptions, (error) => {
        if (error) {
          console.error('Error sending notification email to doctor:', error);
          return res.status(500).json({ error: 'Error sending notification email' });
        }
        
        res.status(200).json({ message: 'Booking confirmed and emails sent' });
      });
    });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});