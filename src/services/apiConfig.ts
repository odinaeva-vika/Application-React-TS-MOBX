import axios from "axios";

export const currentsAPI = axios.create({
  baseURL: "https://api.currentsapi.services/v1",
  params: {
    apiKey: "if0NOtDmaV5MBPjGUGWZKdM9KVi6hDG4cKO6mdr2eKghQYuE",
    language: "en",
  },
});

export const rolesAPI = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBuk4SgBbeI4VDRAW6L1ArJO6WNGmsIn10",
    part: "snippet",
    chart: "mostPopular",
    maxResults: 2,
    regionCode: "RU",
  },
});
