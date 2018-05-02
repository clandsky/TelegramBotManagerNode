const EXEC = require('child_process');
const DATE = require('date-and-time');
const FS = require('fs');


const TBot = require('./app/TelegramBot.js')
const ChatController = require('./app/ChatController.js');

const ElectronManager = require('./app/ElectronManager.js');

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
    global.DEV_CHATID = "-215823908";
    global.ChatController = new ChatController();
    global.TelegramBot = new TBot(credentials.BOT_TOKEN);
    global.ElectronManager = new ElectronManager();
});









