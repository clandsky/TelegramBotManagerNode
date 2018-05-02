'use strict'

window.$ = window.jQuery = require('jquery');
window.Tether = require('tether');
window.Bootstrap = require('bootstrap');

const electron = require('electron');
const {ipcRenderer} = electron;

function handleMessage(ev){
    ev.preventDefault();
    ipcRenderer.send('bot:send_message_dev', ev.target[0].value);
    ev.target[0].value ='';
}

ipcRenderer.on('bot:message_recieved', function (e, messageData) {
    console.log(messageData);
    var tableRef = document.getElementById('incommingMessagesBody');

// Insert a row in the table at the last row
    var newRow   = tableRef.insertRow(tableRef.rows.length);

// Insert a cell in the row at index 0
    newRow.insertCell(0).appendChild(document.createTextNode(messageData.chatID));
    newRow.insertCell(1).appendChild(document.createTextNode(messageData.message));



});