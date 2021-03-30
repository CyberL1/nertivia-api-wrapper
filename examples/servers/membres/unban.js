const NertiviaAPI = require("../../../lib/Client");
const { token } = require("../../token");

const client = new NertiviaAPI(token);

client.servers.members.unban('guildID', 'memberID').then(res => res.json()).then(console.log);