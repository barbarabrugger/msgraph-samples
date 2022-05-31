import dotenv from 'dotenv';
import msgraphApi from './msgraph-api.js';


async function main() {
    dotenv.config();

    try {
        const channelMembers = await msgraphApi.getChannelMembers(process.env.TEAM_ID, process.env.CHANNEL_ID);
        channelMembers.value.forEach(member => msgraphApi.getUser(member.userId).then(user => console.info(formatUser(user))));

        // const channelMessages = await msgraphApi.getChannelMessages(process.env.TEAM_ID, process.env.CHANNEL_ID);

    } catch (error) {
        console.error(error);
    }
};

function formatUser(user) {
    return user.displayName + " (" + user.mobilePhone + ")";
}

main();