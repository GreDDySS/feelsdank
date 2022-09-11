const pc = require("picocolors")
exports.run = async (client, args, channel, tags, message) => {
    const msgArgs = args.join(" ")
    const isMod = tags.badges.moderator
    const isBroad = tags.badges.broadcaster
    try {
        if (msgArgs && (isMod || isBroad) && feelsdank.Config.owner ) {

            await feelsdank.Api.helix(`channels?broadcaster_id=176257472`, {
                method: "PATCH",
                data: {
                    title: msgArgs
                },
            }).then(() => {
                client.say(channel, `@${tags["display-name"]}, Название успешно обновлено!`)
            }).catch((error) => {
                console.log(error)
            })
            
        } else {
            await feelsdank.Api.helix(`channels?broadcaster_id=176257472`)
            .then(async (response) => {
                const title = response.data[0].title
                client.say(channel, `Название стрима: "${title}"`)
            })
        }

    } catch (error) {
        console.log(error)
        feelsdank.Logger.error(`${pc.red(`[ERROR]`)} || Error: ${error}`)
    }
}

module.exports.config = {
    name: "tittle",
    description: "set tittle stream",
    cooldown: 5000,
    aliases: ["title"],
    adminOnly: false,
}