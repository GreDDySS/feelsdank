exports.run = async (client, args, channel, tags, message) => {
    if(args[0]) {
        const arg = args[0].toLowerCase()
        const targe = await feelsdank.DB.User.findOne({username: arg})
        if (targe == null) {
            client.say(channel, `@${tags["display-name"]}, Данный пользователь не найден. FeelsBadMan `)
        } else {
            client.say(channel, `@${tags["display-name"]}, Пользователь ${args} имеет ${targe.points} points.`)
        }
    } else {

    const result = await feelsdank.DB.User.findOne(
        {username: tags.username}
    )
    client.say(channel, `@${tags["display-name"]}, Пользователь ${tags["display-name"]} имеет ${result.points} points.`)
    } 
}

module.exports.config = {
    name: "points",
    description: "",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}
