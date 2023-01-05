const express = require("express")
const request = require("request")

const app = express()
const port = 3000

app.use(express.json())

//handle a post to the default route.
//send New Relic alert JSON payload here and make sure the necessary Telegram fields are present, then build the final endpoint URL.
//TODO: secure this! send api key/password(?) in req
app.post("/", (req, res) => {
    //these 2 must be created in the NR alert workflow payload via the UI and contain your actual api key and chat id
    const telegramBotAPIKey = req.body.telegramBotAPIKey
    const telegramChatID = req.body.telegramChatID

    //this will grab the entire JSON payload of the New Relic alert and send it as the Telegram message
    const telegramMessage = JSON.stringify(req.body)

    //or we could do something like this to grab individual fields of the alert payload
    //const telegramMessage = req.body.totalIncidents

    const telegramEndpoint = `https://api.telegram.org/bot${telegramBotAPIKey}/sendMessage?chat_id=${telegramChatID}&text=${telegramMessage}`
    res.end()

    //post data to Telegram bot
    request(telegramEndpoint, (error, response) => {
        console.log(response.body)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
