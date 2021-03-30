const NertiviaAPI = require("../../../lib/Client");
const { token } = require("../../token");

const client = new NertiviaAPI(token);

client.user.friendRequest.send('username', 'tag').then(res => res.json()).then(console.log);