const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.messages.delete('channelID', 'messageID').then(res => res.json()).then(console.log);