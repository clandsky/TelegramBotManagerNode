const EXEC = require('child_process');
const DATE = require('date-and-time');
const FS = require('fs');


const TelegramBot = require('./app/TelegramBot.js')
const ChatController = require('./app/ChatController.js');

const ElectronManager = require('./app/ElectronManager.js');
global.ElectronManager = new ElectronManager();

FS.readFile('./credentials.json', function read(err, data) {
    var credentials;
    if (err) {
        throw err;
    }
    try{
        credentials=JSON.parse(data);
    }catch (exception){
        console.log("Can't parse credentials....");
    }
    global.DEV_CHATID = credentials.DEV_CHATID;
    global.ChatController = new ChatController();
    global.TelegramBot = new TelegramBot(credentials.BOT_TOKEN);
});









