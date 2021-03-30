const NertiviaAPI = require("../../lib/Client");
const { token } = require("../token");

const client = new NertiviaAPI(token);

client.user.editSurvey({country: 'country', age: age, about_me: "about_me", name: "name"}).then(res => res.json()).then(console.log);