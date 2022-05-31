import auth from "./auth.js";
import fetch from "./fetch.js";

async function getUser(userId) {
    console.debug("Getting user...");
    const authResponse = await auth.getToken(auth.tokenRequest);
    return fetch.callApi(auth.apiConfig.uri + '/users/' + userId, authResponse.accessToken);
}

async function getChannelMembers(teamId, channelId) {
    console.debug("Getting members...");
    const authResponse = await auth.getToken(auth.tokenRequest);
    return fetch.callApi(auth.apiConfig.uri + "/teams/" + teamId + "/channels/" + channelId + "/members", authResponse.accessToken);
}

async function getChannelMessages(teamId, channelId) {
    console.debug("Getting messages...");
    const authResponse = await auth.getToken(auth.tokenRequest);
    return fetch.callApi(auth.apiConfig.uri + "/teams/" + teamId + "/channels/" + channelId + "/messages", authResponse.accessToken);
}

async function getChannelMessage(teamId, channelId, messageId) {
    console.debug("Getting message...");
    const authResponse = await auth.getToken(auth.tokenRequest);
    return fetch.callApi(auth.apiConfig.uri + "/teams/" + teamId + "/channels/" + channelId + "/messages/" + messageId, authResponse.accessToken);
}

export default {
    getUser: getUser,
    getChannelMembers: getChannelMembers,
    getChannelMessages: getChannelMessages,
    getChannelMessage: getChannelMessage
};