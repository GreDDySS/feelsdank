exports.run = async (client, args, channel, tags, message) => {
    const msgArgs = args
    const isMod = tags.badges.moderator
    const isBroad = tags.badges.broadcaster
    const channelID = await feelsdank.Api.leppunen(`subage/greddyss/${channel}`)
    if (msgArgs && (isMod || isBroad) && feelsdank.Config.owner ) {
        await feelsdank.Api.helix(`games?name=${msgArgs}`)
        .then(async (response) => {
            if (response.data.length > 0) {
                const gameId = response.data[0].id;
                await feelsdank.Api.helix(`channels?broadcaster_id=176257472`, {
                    method: "PATCH",
                    data: {
                        game_id: gameId
                    },
                }).then(() => {
                    client.say(channel, `@${tags["display-name"]}, Успешно обновлено!`)
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                client.say(channel, `@${tags["display-name"]}, данной игры не найдено`)
            }
        })
    }
}

module.exports.config = {
    name: "game",
    description: "",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}