const NertiviaAPI = require("../../../lib/Client");
const { token } = require("../../token");

const client = new NertiviaAPI(token);

client.user.friendRequest.declineorcancel('userID').then(res => res.json()).then(console.log);