const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.user.get('userID (Optional)').then(res => res.json()).then(console.log);