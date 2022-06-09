const express = require("express");
const axios = require("axios");


const PORT = 5000;

const app = express();

// cross-origin requests
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
};

// get data from ltd api
app.get("/api/startlistentries", async (req, res) => {
  try {
    await axios
      .get("https://ldt-tech-test.herokuapp.com/api/startlistentries", config)
      .then((response) => {
        res.send(response.data);
      });
  } catch (err) {
    console.log(err);
  }
});

// run server on port 5000
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
