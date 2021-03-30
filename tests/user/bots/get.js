const NertiviaAPI = require("../../../lib/Client");
const { token } = require("../../token");

const client = new NertiviaAPI(token);

client.user.bots.get('botID').then(res => res.json()).then(console.log);