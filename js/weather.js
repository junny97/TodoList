async function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = 'fc8c73b3ed52f647374f9a9a6071807a';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    const weatherIcon = document.getElementById('weather-icon');
    const weatherText = document.getElementById('weather-text');
    const city = document.getElementById('city');

    city.innerText = data.name;
    weatherText.innerText = data.weather[0].main;
    city.innerText = data.name;

    const weatherIcons = {
      Clear: '☀️',
      Clouds: '☁️',
      Rain: '🌧️',
      Drizzle: '🌦️',
      Thunderstorm: '⛈️',
      Snow: '❄️',
      Mist: '🌫️',
      Smoke: '🌫️',
      Haze: '🌫️',
      Dust: '🌫️',
      Fog: '🌫️',
      Squall: '🌪️',
      Tornado: '🌪️🌪️',
    };

    // 날씨 이모지 추가
    weatherIcon.innerHTML = weatherIcons[data.weather[0].main] || '';
  } catch (error) {
    console.error('날씨 정보를 가져오는데 실패했습니다:', error);
  }
}

function onGeoError() {
  alert('위치를 찾을 수 없습니다. 위치 설정을 먼저 해주세요');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
