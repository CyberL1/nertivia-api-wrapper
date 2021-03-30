const API_ENDPOINTS = require("../endpoints");
const fetch = require("node-fetch");

module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async send(username, tag) {
        return await fetch(`${API_ENDPOINTS.USER}/relationship`, { method: "POST", body: JSON.stringify({username: username, tag: tag}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async accept(userID) {
        return await fetch(`${API_ENDPOINTS.USER}/relationship`, { method: "PUT", body: JSON.stringify({uniqueID: userID}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async declineorcancel(userID) {
        return await fetch(`${API_ENDPOINTS.USER}/relationship`, { method: "DELETE", body: JSON.stringify({uniqueID: userID}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
}