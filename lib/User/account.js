const API_ENDPOINTS = require("../endpoints");
const fetch = require("node-fetch");

module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async register(email, password, username) {
        return await fetch(`${API_ENDPOINTS.USER}/register`, { method: "POST", body: JSON.stringify({email: email, password: password, username: username}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.client.token }});
    }
    async delete(password) {
        return await fetch(`${API_ENDPOINTS.USER}/delete-account`, { method: "DELETE", body: JSON.stringify({password: password}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.client.token }});
    }
}