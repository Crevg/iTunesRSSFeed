const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(cors())
app.options('*', cors());

app.get("/itunes/:id", (req, res) => {
    let axiosRequest;
    switch(req.params.id) {
        case '1':
            axiosRequest = axios.get("http://rss.itunes.apple.com/api/v1/us/apple-music/top-albums/all/50/explicit.json")
            break;
        case '2':
            axiosRequest = axios.get("http://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/all/50/explicit.json")
            break;
        case '3':
            axiosRequest = axios.get("http://rss.itunes.apple.com/api/v1/us/apple-music/top-songs/all/50/explicit.json")
            break;
        default:
            res.send({error: 'No valid list specified'}).status(400)
    }

    axiosRequest.then( (response) => {
        res.send(response.data.feed).status(200)
    })
    .catch(error => {
        res.send(error)
    })
    
})

app.listen(process.env.port || 8000, () => {
    console.log("LISTENING")
})

