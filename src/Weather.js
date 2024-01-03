import axios from "axios";

export default function Weather(props) {
  function handleRespomse(response) {
    alert(`Weather in ${props.city} is ${response.data.main.temp}C`);
  }
  let apiKey = "a867e25f2d83db579421a57fd8e937ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleRespomse);
}
