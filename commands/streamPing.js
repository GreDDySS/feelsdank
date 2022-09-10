exports.run = async (client, args, channel, tags, message) => {

    if(channel === feelsdank.Config.owner) {
        if (!args[0]) {
            const TargetName = tags.username.toLowerCase()
            const user = await feelsdank.DB.PingStream.findOne({username: TargetName})
    
            if (user === null) {
                const ping = await new feelsdank.DB.PingStream({
                    username: TargetName,
                    ping: true
                })
                ping.save()
                client.say(channel, `${tags["display-name"]}, Вы успешно подписались на уведомления о стриме`)
            }
        }

        if (tags.username === feelsdank.Config.owner && args[0] === "start") {
            const ping = await feelsdank.DB.PingStream.find({ping: true}, {username: 1})
            client.say(channel, `Стрим начался: ${ping.map((c) => c.username)}`)
        }

    } else return
}

module.exports.config = {
    name: "stream",
    description: "",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}