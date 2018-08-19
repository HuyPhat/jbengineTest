import axios from "axios";

const API_KEY = "099148be22804e849a0c6fe022b7cf5e";

export const getLatestHeadlines = () => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
};

export const getListOfSources = () => {
  return axios.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`);
};
