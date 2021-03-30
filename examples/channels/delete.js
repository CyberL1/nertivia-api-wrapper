const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.channels.delete('guildID', 'channelID').then(res => res.json()).then(console.log);