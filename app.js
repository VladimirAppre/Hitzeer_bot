const TelegramBot = require('node-telegram-bot-api');
const token = '1159395247:AAFF3IskRJ7LQ_C7W6p1c4BqEjgQ1cUAwyU';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', msg => {
    bot.sendMessage
})
