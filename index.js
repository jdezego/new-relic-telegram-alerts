const express = require("express")
const request = require("request")

const app = express()
const port = 3000

app.use(express.json())

//handle a post to the default route
//TODO: secure this! send api key/password in req
app.post("/", (req, res) => {
    const telegramBotAPIKey = req.body.telegramBotAPIKey
    const telegramChatID = req.body.telegramChatID
    const telegramMessage = req.body.telegramMessage
    const telegramEndpoint = `https://api.telegram.org/bot${telegramBotAPIKey}/sendMessage?chat_id=${telegramChatID}&text=${telegramMessage}`
    res.end()

    //post data to Telegram bot
    request(telegramEndpoint, (error, response) => {
        console.log(response.body)
    })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
