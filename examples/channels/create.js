const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.channels.create('guildID').then(res => res.json()).then(console.log);