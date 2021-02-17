import axios from "axios";
import actioncable from "actioncable";
// const BASE_URL = "http://localhost:4000";
const BASE_URL = "https://weather-station-server.herokuapp.com";
// const WS_URL = "http://localhost:4000/cable"
const WS_URL = "https://weather-station-server.herokuapp.com/cable";
export const CableApp = {};
CableApp.cable = actioncable.createConsumer(WS_URL);
// axios.interceptors.request.use(async function (config) {
// 	const { token } = await persistToken();
// 	console.log("interceptor", token);
// 	if (token != null) {
// 		config.headers.Authorization = `Bearer ${token}`;
// 	}
// 	config.url = `${BASE_URL}${config.url}`;
// 	return config;
// });

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response.status;
    return Promise.reject({
      status,
    });
  }
);

const persistToken = async () => {
  const persistedAuth = await JSON.parse(localStorage.getItem("persist:root"));
  return (await JSON.parse(persistedAuth.auth)) || "";
};

export async function getAllDataByWeatherStation(id, timeSpan) {
  console.log(timeSpan)
  const options = {
    method: "POST",
    url: `${BASE_URL}/getAll?weatherStation=${id}&timeSpan=${timeSpan}`,
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  };
  return axios(options)
    .then((res) => res)
    .catch((err) => err);
}

export async function getTempsByWeatherStation(id, timeSpan) {
  const options = {
    method: "POST",
    url: `/getTemp?weatherStation=${id}&timeSpan=${timeSpan}`,
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  };
  return axios(options)
    .then((res) => res)
    .catch((err) => err);
}
