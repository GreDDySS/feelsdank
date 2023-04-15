exports.run = async (client, args, channel, tags, message) => {

    //if (channel === feelsdank.Config.owner) {
    //    if (!args[0]) {
    //        client.say(channel, `@${tags["display-name"]}, Существуют эвенты: live, live:unsubsc `)
    //    } if (args[0] === "live") {
    //        const TargetName = tags.username
    //        const user = await feelsdank.DB.PingStream.findOne({username: TargetName})
    //
    //        if (user === null) {
    //            const ping = await new feelsdank.DB.PingStream({
    //                username: TargetName
    //            })
    //            ping.save()
    //            client.say(channel, `@${tags["display-name"]}, Вы успешно подписались на уведомления о стриме`)
    //        } else {
    //            client.say(channel, `@${tags["display-name"]}, Вы уже подписаны на уведомления о стриме`)
    //        }
    //    } if (args[0] === "live:unsubsc") {
    //        const TargetName = tags.username
    //        const user = await feelsdank.DB.PingStream.findOne({username: TargetName})
//
    //        if (user === null) {
    //            client.say(channel, `@${tags["display-name"]}, Вы не были подписаны на уведомления о стриме`)
    //        } else {
    //            const TargetName = tags.username
    //            await feelsdank.DB.PingStream.deleteOne({username: TargetName})
    //            client.say(channel, `@${tags["display-name"]}, Вы успешно отписались от уведомления`)
    //        }
    //    }
//
    //} else return
}

module.exports.config = {
    name: "notify",
    description: "notify stream live",
    cooldown: 5000,
    aliases: [],
    adminOnly: true,
}