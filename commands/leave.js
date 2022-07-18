exports.run = async (client, args, channel, tags, message, user) => {
    const arg = args[0].toLowerCase();
    await feelsdank.DB.Channel.deleteOne({username: arg})
    client.part(args[0])
    client.say(channel, `Отключился от канала ${args[0]} Okayeg`)
}

module.exports.config = {
    name: "leave",
    description: "leave channel",
    aliases: [""],
    adminOnly: true,
}