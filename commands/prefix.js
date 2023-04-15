exports.run = async (client, args, channel, tags, message) => {
    if (tags.badges.broadcaster) {
        if (!args) return

        const targetName = tags.username.toLowerCase()
        await feelsdank.SB.db.channel.update({where: {name: targetName}, data: {prefix: args[0]}})
        client.say(channel, `${tags["display-name"]}, Успешно установлен префикс! feelsOkayMan`)

    } else {
        client.say(channel, `${tags["display-name"]}, Вы не стример этого канала!`)
    }
}

module.exports.config = {
    name: "prefix",
    description: "set prefix channel",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}