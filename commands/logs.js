exports.run = async (client, args, channel, tags, message) => {
    const line = await feelsdank.DB.Log.countDocuments({});
    client.say(channel, `Сообщений: ${line}`)
}

module.exports.config = {
    name: "logs",
    description: "Check lines message",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}