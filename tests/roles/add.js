const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.roles.add('guildID', 'memberID', 'roleID').then(res => res.json()).then(console.log);