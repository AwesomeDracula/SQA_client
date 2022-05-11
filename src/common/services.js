import {getToken} from "./utils";

// let baseUrl = 'https://sqa-be.herokuapp.com'
let baseUrl = "http://localhost:8080";

const createFetcher = async (url, options) => {
  const urler = baseUrl + url;
  const response = await fetch(urler, {
    headers: {
      Authorization: url === "/login" ? undefined : "Bearer " + getToken(),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    ...options,
  });
  if (response.status < 200 || response.status > 299) {
    throw new Error("Error");
  }
  if (!options) {
    const body = await response.json();
    return body;
  }
  return response;
};

export const getter = createFetcher;

export const poster = (url, params) =>
  createFetcher(url, {method: "POST", body: JSON.stringify(params)});

export const patcher = (url, params) =>
  createFetcher(url, {method: "PATCH", body: JSON.stringify(params)});
