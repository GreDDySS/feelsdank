exports.run = async (client, args, channel, tags, message) => {
    if (!args[0]) {
        const TargetName = tags.username.toLowerCase()
        const channelName = await feelsdank.Channel.getByName(TargetName)
        if (channelName == null) {
            await feelsdank.SB.db.channel.create({
                data: {
                    name: TargetName,
                    userId: tags['user-id'],
                }
            })
            await client.join(TargetName)
            //await client.say(`${TargetName}`, `@${TargetName}, YO!`)
            await client.say(channel,`Успешно подключился к ${TargetName} FeelsOkayMan`)
        } else {
            client.say(channel, "Вы уже добавлены 😶")
        }
    }

    if (tags.username === feelsdank.Config.owner) {
        const channelTarget = args[0].toLowerCase()
        const chonnel = await feelsdank.Channel.getByName(channelTarget)
        const uid = await feelsdank.Api.leppunen(`resolve/${channelTarget}`)

        if (chonnel == null) {
            await feelsdank.SB.db.channel.create({
                data: {
                    name: channelTarget,
                    userId: uid.id,
                    prefix: args[1],
                    sevenID: args[2]
                }
            })
            await client.join(channelTarget)
            //await client.say(`${args[0]}`, `@${args[0]}, YO!`)
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