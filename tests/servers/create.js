const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.servers.create('guildName').then(res => res.json()).then(console.log);