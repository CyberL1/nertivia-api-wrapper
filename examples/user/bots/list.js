const NertiviaAPI = require("../../../lib/Client");
const { token } = require("../../token");

const client = new NertiviaAPI(token);

client.user.bots.list().then(res => res.json()).then(console.log);