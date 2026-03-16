const express = require('express');
const app = express();
const cors = require('cors');
const https = require('https');

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.API_KEY;

app.post('/weather', (req, res) => {
  const city = req.body.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

      res.json ({
        temperature: temperature,
        description: description,
        iconUrl: iconUrl
      })

    })

  })

})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});