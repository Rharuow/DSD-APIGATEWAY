const express = require("express");
const httpProxy = require("express-http-proxy");
const axios = require("axios");
const router = express.Router();

const apiRails = axios.create({
  baseURL: `http://localhost:3000/`,
  headers: {
    Accept: "application/vnd.api+json; charset=utf-8",
  },
});

const apiMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

router.all("/:apiName", async (req, res) => {
  let response;
  switch (req.params.apiName) {
    case "contacts":
      response = await apiRails.get("contacts");
      res.send(response.data);
      break;
    case "movies":
      response = await apiMovies.get(
        "movie/popular?api_key=3b283881af9467943659c938473f833b&language=en-US"
      );
      res.send(response.data);
      break;
  }
});

module.exports = router;
