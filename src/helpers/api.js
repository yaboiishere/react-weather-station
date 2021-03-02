import axios from "axios";
import actioncable from "actioncable";
import Cookies from "universal-cookie";

// const BASE_URL = "http://localhost:4000";
const BASE_URL = "https://weather-station-server.herokuapp.com";
// const WS_URL = "http://localhost:4000/cable";
const WS_URL = "https://weather-station-server.herokuapp.com/cable";
export const CableApp = {};
CableApp.cable = actioncable.createConsumer(WS_URL);

export const ManagementApp = {};
ManagementApp.cable = actioncable.createConsumer(WS_URL);

const cookies = new Cookies();

axios.interceptors.request.use(async function (config) {
  const token = await persistToken();
  console.log("interceptor", token);
  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.url = `${BASE_URL}${config.url}`;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response.status;
    if (status === 401) {
      cookies.remove("token", { path: "/" });
      cookies.remove("loggedIn", { path: "/" });

      // window.location.href = `${process.env.URL || "http://localhost:3000/"}`;
      window.location.href = `${
        process.env.URL ||
        " https://yaboiishere.github.io/react-weather-station/#/"
      }`;
    }
    return Promise.reject({
      status,
    });
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status ? error.response?.status : 401;
    return Promise.reject({
      status,
    });
  }
);

const persistToken = async () => {
  return (await cookies.get("token")) || "";
};

export async function getAllDataByWeatherStation(id, timeSpan) {
  const options = {
    method: "POST",
    url: `/getAll?weatherStation=${id}&timeSpan=${timeSpan}`,
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

export async function login(email, password) {
  const options = {
    method: "POST",
    url: `/authenticate`,
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email: email,
      password: password,
    },
    json: true,
  };
  return axios(options)
    .then((res) => res)
    .catch((err) => err);
}

export async function getPeople() {
  const options = {
    method: "GET",
    url: `/people`,
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
export async function getApprovedPeople() {
  const options = {
    method: "GET",
    url: `/approved`,
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
export async function getUnapprovedPeople() {
  const options = {
    method: "GET",
    url: `/unapproved`,
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
export async function getCurrentUser() {
  const options = {
    method: "GET",
    url: `/current_user`,
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
export async function getLastLockUser() {
  const options = {
    method: "GET",
    url: `/get_last_lock_user`,
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
export async function updateLastLockUser(data) {
  const options = {
    method: "POST",
    url: `/update_last_lock_user/`,
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    json: true,
  };
  return axios(options)
    .then((res) => res)
    .catch((err) => err);
}
