const API_ENDPOINTS = require("../endpoints");
const fetch = require("node-fetch");
const Members = require("./members");

module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async create(guildName) {
        return await fetch(`${API_ENDPOINTS.SERVERS}`, { method: "POST", body: JSON.stringify({name: guildName}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async get(guildID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}`, { headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async find(inviteCode) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/invite/${inviteCode}`, { headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async edit(guildID, options = {name}) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}`, { method: "PATCH", body: JSON.stringify(options), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async join(inviteCode) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/invite/${inviteCode}`, { method: "POST", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async leave(guildID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}`, { method: "DELETE", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async delete(guildID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/delete`, { method: "POST", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    members = new Members(this);
    async bans(guildID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/bans`, { headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
}