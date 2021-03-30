const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.roles.create('guildID', 'roleName (optional)').then(res => res.json()).then(console.log);