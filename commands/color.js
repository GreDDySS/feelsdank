exports.run = async (client, args, channel, tags, message) => {
    let username = tags.username;

    if (args[0]) {
        if (args[0].startsWith("@")) {
            args[0] = args[0].substring(1);
        }
        username = args[0]
    }

    let isColor = false
    if(args[0]) {
        if(args[0].startsWith("#")) {
            isColor = true
        }
    }

    let color = ""
    if (isColor === false) {
        let userColor = await feelsdank.Api.leppunen(`resolve/${username}`)

        color = userColor.chatColor
    } else {
        color = args[0]
    }

    if (username === tags.username) {
        color = tags.color
    }

    const colorName = await feelsdank.Api.request(`www.thecolorapi.com/id?hex=${color.replace('#', '')}`)

    if (isColor === true) {
        client.say(channel, `@${tags["display-name"]}, HEX цвет: ${colorName.name.value} ${color}`)
    }

    client.say(channel, `@${tags["display-name"]}, Этот пользователь использует: ${colorName.name.value} ${color} `)
}

module.exports.config = {
    name: "color",
    description: "Says the name of the user's color",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}