exports.run = async (client, args, channel, tags, message) => {
    let chatters = await feelsdank.Api.tmi(`group/user/${channel}/chatters`);
    chattercount = chatters["chatter_count"];
    client.say(channel, `@${tags["display-name"]}, Здесь находится ${chattercount} пользователей.`)
}

module.exports.config = {
    name: "chatters",
    description: "Tells how many users are in the chat.",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}