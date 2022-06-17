exports.run = async (client, args, channel, tags, message, user) => {
    await feelsdank.DB.Channel.deleteOne({username: args[0]})
    await client.part(args[0])
    await client.say(channel, `Отключился от канала ${args[0]} Okayeg`)
}
module.exports.config = {
    name: "leave",
    description: "leave channel",
    aliases: [""],
    adminOnly: true,
}