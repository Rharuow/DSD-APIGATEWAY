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

router.all("/:apiName", async (req, res) => {
  if (req.params.apiName === "contacts") {
    const response = await apiRails.get("contacts");
    console.log(response);
    res.send(response.data);
  }
});

module.exports = router;
