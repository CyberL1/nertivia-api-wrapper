const NertiviaAPI = require("../../../lib/Client");
const { token } = require("../../token");

const client = new NertiviaAPI(token);

client.user.account.register('email', 'password', 'username').then(res => res.json()).then(console.log);