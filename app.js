// AI-assisted endpoint (Copilot-style). Intentionally insecure for Zorro demo.
const express = require('express');
const { exec } = require('child_process');
const mysql = require('mysql');
const app = express();

app.get('/run', (req, res) => {
  // command injection — user input straight into shell
  exec('ping -c 1 ' + req.query.host, (e, out) => res.send(out));
});

app.get('/user', (req, res) => {
  // SQL injection — string concatenation
  const q = "SELECT * FROM users WHERE id = '" + req.query.id + "'";
  db.query(q, (e, rows) => res.json(rows));
});

app.get('/calc', (req, res) => {
  // code injection
  res.send(String(eval(req.query.expr)));
});

const API_KEY = "sk-live-demo-NOTREAL-3f9a2b7c1d4e5f6a7b8c9d0e"; // hardcoded secret
module.exports = { app, API_KEY };
