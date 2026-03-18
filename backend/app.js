const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const API_KEY = process.env.API_KEY;

app.post('/api/weather', async (req, res) => {
  const city = req.body.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(data.cod || 500).json({ error: data.message || 'Erro ao obter dados do clima' });
    }

    const { main, weather } = data;

    res.json({
      temperature: main.temp,
      description: weather[0].description,
      icon: `http://openweathermap.org/img/wn/${weather[0].icon}.png`
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter dados do clima' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});