const API_ENDPOINTS = require("./endpoints");
const fetch = require("node-fetch");

module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async create(guildID, roleName) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/roles`, { method: "POST", body: JSON.stringify({name: roleName}), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async add(guildID, memberID, roleID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/members/${memberID}/roles/${roleID}`, { method: "PATCH", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async remove(guildID, memberID, roleID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/members/${memberID}/roles/${roleID}`, { method: "DELETE", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async edit(guildID, roleID, options = {name, permissions, color}) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/roles/${roleID}`, { method: "PATCH", body: JSON.stringify(options), headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
    async delete(guildID, roleID) {
        return await fetch(`${API_ENDPOINTS.SERVERS}/${guildID}/roles/${roleID}`, { method: "DELETE", headers: { 'Content-Type': 'application/json', 'Authorization': this.client.token }});
    }
}