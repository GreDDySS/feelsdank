exports.run = async (client, args, channel, tags, message) => {
    if (!args[0]) return
    const channelTarget = args[0].toLowerCase()
    const chonnel = await feelsdank.DB.Channel.findOne({username: channelTarget})

    if (chonnel == null) {
        const newChannel = new feelsdank.DB.Channel({
            username: channelTarget,
            customPrefix: args[1]
        })
        newChannel.save();
        await client.join(channelTarget)
        await client.say(channel,`Успешно подключился к ${args[0]} FeelsOkayMan`)
    } else {
        client.say(channel, "Данный канал уже используется 😶")
    }

}

module.exports.config = {
    name: "join",
    description: "connect to other channel",
    cooldown: 5000,
    aliases: [],
    adminOnly: true,
}