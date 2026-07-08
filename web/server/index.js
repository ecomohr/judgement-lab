const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

app.post('/api/guesses', async (req, res) => {
  const { data, error } = await supabase.from('guesses').insert(req.body).select();
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.get('/api/guesses', async (req, res) => {
  const { data, error } = await supabase.from('guesses').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));