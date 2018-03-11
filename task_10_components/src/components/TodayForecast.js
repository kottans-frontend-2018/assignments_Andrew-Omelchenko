import { bindAll, toFahrenheit, toMph } from "../utils/helper";
import { ICON_BASE, DAY_OF_WEEK } from "../utils/config";
import Component from "../framework/Component";

class TodayForecast extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement("div");
    this.host.classList.add("container");
  }

  render() {
    const { city, forecast, isMetric } = this.props;

    const tempUnits = isMetric ? "C" : "F";
    const velocityUnits = isMetric ? "m/s" : "mph";

    return `
      <div class="main-panel">
        <h1 class="city-name">${city}</h1>
        <div class="flex-container">
          <div class="left-panel">
            <h2>${DAY_OF_WEEK[new Date(forecast.datetime).getDay()]}</h2>
            <h3 class="date">${forecast.datetime}</h3>
            <h1 class="temperature">t: ${Math.round(
              isMetric ? forecast.temp : toFahrenheit(forecast.temp)
              )}&deg;${tempUnits}</h1>
            <p class="min-temp">t.min: ${Math.round(
              isMetric ? forecast.min_temp : toFahrenheit(forecast.min_temp)
              )}&deg;${tempUnits}</p>
            <p class="max-temp">t.max: ${Math.round(
              isMetric ? forecast.max_temp : toFahrenheit(forecast.max_temp)
              )}&deg;${tempUnits}</p>
          </div>
          <div class="right-panel">
            <div class="img-container">
              <img class="img" src="${ICON_BASE}${
                forecast.weather.icon
                }.png" alt="Icon">
            </div>
            <h3>${forecast.weather.description}</h3>
            <p>Humidity: ${forecast.rh}%</p>
            <p>Wind: ${
              isMetric ? forecast.wind_spd : toMph(forecast.wind_spd)
              }${velocityUnits} ${forecast.wind_cdir}</p>
          </div>
        </div>
      </div>
    `;
  }
}

export default TodayForecast;
