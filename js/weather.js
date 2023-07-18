function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = 'fc8c73b3ed52f647374f9a9a6071807a';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
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
    });
}

function onGeoError() {
  alert('위치를 찾을 수 없습니다. 위치 설정을 먼저 해주세요');
}
//위치를 나타낼때는 getCurrentPosition함수 내에 위치 성공함수와 실패함수를 정의해서 넣어야 함
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
