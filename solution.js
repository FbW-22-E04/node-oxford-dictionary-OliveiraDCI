const axios = require("axios");
const express = require("express");
const app = express();

app.listen(4000, () => console.log(" -> server runs"));

app.get("/", (req, res) => {
  let word = process.argv[2].toString().toLowerCase().trim();

  console.log("word -> ", word);

  let header = {
    Authorization: process.env.APP_KEY,
    app_id: process.env.APP_ID,
    app_key: process.env.APP_KEY,
    language: "en-gb",
  };

  // The axios fetching bellow needs to be adjusted. At the moment is returningan  error, even harcoding the 'word' variable.

  let result = axios
    .get({
      method: "GET",
      url: `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}`, //  error: Invalid URL
      headers: header,
    })
    .then((data) => {
      console.log("data response -> ", data);
      return data;
    })
    .catch((err) => console.log("Error -> ", err.message));

  res.send(result);
});
