const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY;

app.post('/weather', async (req, res) => {
  const city = req.body.city;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(data.cod || 500).json({ error: data.message || 'Erro ao obter dados do clima' });
    }

    const filteredData = {
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    };

    res.json(filteredData);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter dados do clima' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});