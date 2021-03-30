const API_ENDPOINTS = require("./endpoints");
const fetch = require("node-fetch");

module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async get(channelID) {
        return await fetch(`${API_ENDPOINTS.MESSAGES}/channels/${channelID}`, { headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async send(channelID, message) {
        return await fetch(`${API_ENDPOINTS.MESSAGES}/channels/${channelID}`, { method: "POST", body: JSON.stringify({message: message}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async delete(channelID, messageID) {
        return await fetch(`${API_ENDPOINTS.MESSAGES}/${messageID}/channels/${channelID}`, { method: "DELETE", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
}