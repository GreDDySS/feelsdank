exports.run = async (client, args, channel, tags, message) => {
    if (!args[0]) {
        const TargetName = tags.username.toLowerCase()
        const channelName = await feelsdank.DB.Channel.findOne({username: TargetName})

        if (channelName == null) {
            const newChannel = new feelsdank.DB.Channel({
                username: TargetName,
                customPrefix: args[1]
            })
            newChannel.save();
            await client.join(TargetName)
            await client.say(`${TargetName}`, `@${TargetName}, YO!`)
            await client.say(channel,`Успешно подключился к ${TargetName} FeelsOkayMan`)
        } else {
            client.say(channel, "Вы уже добавлены 😶")
        }
    }

    if (tags.username === feelsdank.Config.owner) {
        const channelTarget = args[0].toLowerCase()
        const chonnel = await feelsdank.DB.Channel.findOne({username: channelTarget})

        if (chonnel == null) {
            const newChannel = new feelsdank.DB.Channel({
                username: channelTarget,
                customPrefix: args[1]
            })
            newChannel.save();
            await client.join(channelTarget)
            await client.say(`${args[0]}`, `@${args[0]}, YO!`)
            await client.say(channel,`Успешно подключился к ${args[0]} FeelsOkayMan`)
        } else {
            client.say(channel, "Данный канал уже используется 😶")
        }
    } else {return}
}

module.exports.config = {
    name: "join",
    description: "connect to other channel",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}