const API_ENDPOINTS = require("../endpoints");
const fetch = require("node-fetch");
const FriendRequest = require("./friendRequest");
const Bots = require("./bots");
const Account = require("./account");

module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async get(userID) {
        return await fetch(`${API_ENDPOINTS.USER}${userID ? `/${userID}` : ""}`, { headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async editSurvey(options = {about_me, age, continent, country, gender, name}) {
        return await fetch(`${API_ENDPOINTS.USER}/survey`, { method: "PUT", body: JSON.stringify(options), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async customStatus(status) {
        return await fetch(`${API_ENDPOINTS.SETTINGS}/custom-status`, { method: "POST", body: JSON.stringify({custom_status: status}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});   
    }
    friendRequest = new FriendRequest(this);
    async block(userID) {
        return await fetch(`${API_ENDPOINTS.USER}/block`, { method: "POST", body: JSON.stringify({uniqueID: userID}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async unblock(userID) {
        return await fetch(`${API_ENDPOINTS.USER}/block`, { method: "DELETE", body: JSON.stringify({uniqueID: userID}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    bots = new Bots(this);
    account = new Account(this);
    async login(email, password) {
        return await fetch(`${API_ENDPOINTS.USER}/login`, { method: "POST", body: JSON.stringify({email: email, password: password}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async logout() {
        return await fetch(`${API_ENDPOINTS.USER}/logout`, { method: "DELETE", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
}