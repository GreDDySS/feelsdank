exports.run = async (client, args, channel, tags, message) => {
    let argum = args[0].replace(/[^0-9]/g,"").length
    client.say(channel, `@${tags.username}, ${argum}`)
}

module.exports.config = {
    name: "num",
    description: "",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}