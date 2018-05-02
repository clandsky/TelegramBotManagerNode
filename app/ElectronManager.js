const electron = require ('electron');
const {app, BrowserWindow, Menu, ipcMain} = electron;
const URL = require('url');
const PATH = require('path');

class ElectronManager {
    constructor(){
        this.mainWindow;
        app.on('ready', this.initialize.bind(this));
        ipcMain.on('bot:send_message_dev', function(e, message){
            global.TelegramBot.sendMessage(global.DEV_CHATID, message);
        })
    }
    initialize(){
        this.mainWindow = new BrowserWindow({});
        this.mainWindow.loadURL(URL.format({
            pathname: PATH.join(__dirname, '../views/main/main.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    notifyView(data){
        this.mainWindow.webContents.send(data);
    }
    incommingMessage(chatID, message){
        this.mainWindow.webContents.send('bot:message_recieved',{chatID: chatID, message: message});
    }

}
module.exports=ElectronManager;




