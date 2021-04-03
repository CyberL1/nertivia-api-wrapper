const API_ENDPOINTS = require("../endpoints");
const fetch = require("node-fetch");

module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async list() {
        return await fetch(`${API_ENDPOINTS.BOTS}`, { headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async create() {
        return await fetch(`${API_ENDPOINTS.BOTS}`, { method: "POST", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async get(botID) {
        return await fetch(`${API_ENDPOINTS.BOTS}/${botID}`, { headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
    async delete(botID) {
        return await fetch(`${API_ENDPOINTS.BOTS}/${botID}`, { method: "DELETE", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }}).catch(console.log);
    }
}