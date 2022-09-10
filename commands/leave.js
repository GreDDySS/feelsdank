exports.run = async (client, args, channel, tags, message, user) => {
    if (tags.badges.broadcaster) {
        if (!args) return

        const streamer = tags.username.toLowerCase();
        await feelsdank.DB.Channel.deleteOne({username: streamer})
    }
    if (tags.username === feelsdank.Config.owner) {
        const arg = args[0].toLowerCase();
        await feelsdank.DB.Channel.deleteOne({username: arg})
        client.part(args[0])
        client.say(channel, `Отключился от канала ${args[0]} Okayeg`)
    } else {
        client.say(channel, `NOIDONTTHINKSO`)
    }
}
module.exports.config = {
    name: "leave",
    description: "leave channel",
    aliases: [""],
    adminOnly: false,
}