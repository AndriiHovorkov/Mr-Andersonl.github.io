const TelegramBot = require('node-telegram-bot-api');
const token = '1780738069:AAFU3ofcCejaqk8Go1XixLKZmb-42lGMLMI';
const fetch = require('node-fetch')

const bot = new TelegramBot(token, {
    polling: true
})

bot.onText(/\/test (.+)/, (msg, [source, match]) => {
    let city = match
    const thisId= msg.chat.id

    fetch(`http://localhost:7071/current/weather/${city}`)
    .then(resp =>resp.json())
    .then(weather =>  bot.sendMessage(thisId, `${JSON.stringify(weather, null, '\t')}`));
})

bot.onText(/\/help (.+)/, (msg, [source, match]) => {
    let city = match
    const thisId= msg.chat.id
    
    fetch(`http://localhost:7071/forecast/weather/${city}`)
        .then(resp =>resp.json())
        .then(weather =>  bot.sendMessage(thisId, `${JSON.stringify(weather.list[1], null, '\t')}`));
})