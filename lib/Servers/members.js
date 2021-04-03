const API_ENDPOINTS = require("../endpoints");
const fetch = require("node-fetch");

module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async kick(guildID, memberID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/members/${memberID}`, { method: "DELETE", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.client.token }}).catch(console.log);
    }
    async ban(guildID, memberID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/bans/${memberID}`, { method: "PUT", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.client.token }}).catch(console.log);
    }
    async unban(guildID, memberID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/bans/${memberID}`, { method: "DELETE", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.client.token }}).catch(console.log);
    }
}