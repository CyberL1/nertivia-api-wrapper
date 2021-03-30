const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.roles.delete('guildID', 'roleID').then(res => res.json()).then(console.log);