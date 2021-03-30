const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.roles.edit('guildID', 'roleID', {name: 'name', permissions: 2, color: '#000000'}).then(res => res.json()).then(console.log);