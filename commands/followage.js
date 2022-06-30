exports.run = async (client, args, channel, tags, message) => {
    let username = tags.username;
    if (args[0]) {
        if(args[0].startsWith("@")) {
            username = args[0].substring(1);
        } else {
            username = args[0]
        }
    }

    let Rchannel = channel
    if (args[1]) {
        if (args[1].startsWith("@")) {
            Rchannel = args[1].substring(1)
        } else {
            Rchannel = args[1]
        }
    }

    const follow = await feelsdank.Api.leppunen(`subage/${username}/${Rchannel}`)

    if (follow["followedAt"]) {
        const ms = new Date().getTime - Date.parse(follow["followedAt"]);
        client.say(channel, `@${tags["display-name"]}, Пользователь ${username} подписан на ${Rchannel} ${feelsdank.Misc.humanizeDuration(ms)}.`)

    } else { 
        client.say(channel, `@${tags["display-name"]}, Пользователь ${username} не подписан на ${Rchannel}.`)
    }
    
}
module.exports.config = {
    name: "followage",
    description: "give you the time a given user has followed a given channel",
    cooldown: 5000,
    aliases: ["followe"],
    adminOnly: true,
}