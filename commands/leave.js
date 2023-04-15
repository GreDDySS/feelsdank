exports.run = async (client, args, channel, tags, message, user) => {
    if (tags.badges.broadcaster) {
        if (!args) return

        const streamer = tags['user-id'];
        await feelsdank.SB.db.channel.delete({where: {userId: streamer}})
        client.part(tags.username)
    } else {
        client.say(channel, "NOIDONTTHINKSO")
    }
    if (tags.username === feelsdank.Config.owner) {
        const channelTarget = args[0].toLowerCase()
        const chonnel = await feelsdank.Channel.getByName(channelTarget)
        const uid = await feelsdank.Api.leppunen(`resolve/${channelTarget}`)
        await feelsdank.SB.db.channel.delete({where: {userId: uid.id}})
        client.part(chonnel)
        client.say(channel, `Отключился от канала ${chonnel} Okayeg`)
    }
}
module.exports.config = {
    name: "leave",
    description: "leave channel",
    aliases: [""],
    adminOnly: false,
}