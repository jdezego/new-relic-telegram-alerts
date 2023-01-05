# This is a simple API Gateway that allows you to configure a Telegram webhook destination in a New Relic Workflow to send alerts to a Telegram channel or group.

You must first create a Telegram Bot and add it to your channel/group as an admin: https://core.telegram.org/bots/tutorial

Get chat id for group or channel. Must already have messages in group/channel or this returns empty array:  
https://api.telegram.org/bot<BOT_API_KEY>/getUpdates  

Send message to bot using chat id:  
https://api.telegram.org/bot<BOT_API_KEY>/sendMessage?chat_id=<CHAT_ID>&text=<MESSAGE>  

Curl example when Express server is running:  
curl -H "Content-Type: application/json" -X POST http://localhost:3000 -d "{\"telegramBotAPIKey\":\"<BOT_API_KEY>\", \"telegramChatID\":\"<CHAT_ID>\", \"telegramMessage\":\"<MESSAGE>\"}"  