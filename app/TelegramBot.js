var exec = require('child_process');
var date = require('date-and-time');
var fs = require('fs');

const TelegramBotAPI = require('node-telegram-bot-api');

class TelegramBot {
    constructor(token) {
        this.channels = [];
        this.responses = [{
            message: "alive",
            response: "Running!"
            }];
        this.bot = new TelegramBotAPI(token, {polling: true});
        this.bot.on('message', this.handleIncommingMessage.bind(this));
    }

    handleIncommingMessage(msg){
        for(var i=0; i<this.responses.length; i++){
            if(msg.text.includes(this.responses[i].message)){
                this.sendMessage(msg.chat.id, this.responses[i].response);
                global.ElectronManager.incommingMessage(msg.chat.id, msg.text);
            }
        }
    }
    sendMessage(chat_id, msg){
        this.bot.sendMessage(chat_id, msg);
    }

    addBotResponse(message, response){
        this.responses.push({
            message: message,
            response: response
        });
    }
}
module.exports = TelegramBot;




