// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

const AIRTABLE_TOKEN = "patSMmsMZV3ld7iSm.adf9b201bf5b4fad908e372c585816eb2521b5e7086b7a3c9418caaa099ad817";
const BASE_URL = "https://api.airtable.com/v0/appyPO0xrhPPEy72s/";

app.get('/api/courts', async (req, res) => {
  const { type, id } = req.query;
  if (!type) return res.status(400).json({ error: "Missing type" });

  let url = `${BASE_URL}${type.charAt(0).toUpperCase() + type.slice(1)}`;
  if (id) url += `/${id}`;

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`));
