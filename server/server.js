const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
const axios = require("axios");


app.get("/", async (_, response) => response.json("Root route for translatim."));

app.get("/translate", async (request, response)=>{
    // word to from
   // const word = request.query.word;
 //   const from = request.query.from;
   // const to = request.query.to;

    const { word, from, to } = request.query;

    const API = `https://api.mymemory.translated.net/get?q=${word}&langpair=${from}|${to}`;
    const res = await axios.get(API);

const wrangleData = {
    translation: res.data.responseData.translatedText,
    match
}

    response.json(res.data.responseData.translatedText);
})

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));