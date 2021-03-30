const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.channels.edit('guildID', 'channelID', {name: "name", permissions: {"send_message": boolean}}).then(console.log);