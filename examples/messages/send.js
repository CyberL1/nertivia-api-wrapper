const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.messages.send('channelID', 'message').then(res => res.json()).then(console.log);