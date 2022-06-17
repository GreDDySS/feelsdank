exports.run = async (client, args, channel, tags, message, user) => {
    if (!args[0]) return
    const channelTarget = args[0].toLowerCase()

    await feelsdank.DB.Channel.findOneAndUpdate(
        { username: channelTarget },
        { customPrefix: args[1] }
    )

    client.say(channel, `FeelsOkayMan 👍 Префикс канала ${channelTarget} успешно заменён на "${args[1]}"`)
}
module.exports.config = {
    name: "prefix",
    description: "change prefix",
    aliases: ["updateprefix", "changeprefix"],
    adminOnly: true,
}