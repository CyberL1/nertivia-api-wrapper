const API_ENDPOINTS = require("./endpoints");
const fetch = require("node-fetch");

module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async create(guildID, channelName = "New Channel") {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/channels`, { method: "PUT", body: JSON.stringify({name: channelName}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async edit(guildID, channelID, options = {name, permissions}) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/channels/${channelID}`, { method: "PATCH", body: JSON.stringify(options), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async delete(guildID, channelID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/channels/${channelID}`, { method: "DELETE", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
}