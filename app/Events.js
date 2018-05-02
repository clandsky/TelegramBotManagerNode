global.EVENT_TYPES = {
    incomming_message: "incmsg"
};


class EVENT {
    constructor(type, event){
        this.type=type;
        this.event = event;
    }
}
class IncommingMessageEvent {
    constructor(chatID, message){
        this.chatID=chatID;
        this.message = message;
    }
}


module.exports = {
    EVENT: EVENT,
    IncommingMessageEvent: IncommingMessageEvent
}

