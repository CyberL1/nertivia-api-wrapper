const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.servers.edit('guildID', {name: 'name'}).then(res => res.json()).then(console.log);