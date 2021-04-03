const Messages = require("./messages");
const Channels = require("./channels");
const Roles = require("./roles");
const Servers = require("./Servers/Servers");
const User = require("./User/User");

module.exports = class {
    constructor(token) {
        this.token = token;
        this.messages = new Messages(this);
        this.channels = new Channels(this);
        this.roles = new Roles(this);
        this.servers = new Servers(this);
        this.user = new User(this);
    }
}