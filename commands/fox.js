exports.run = async (client, args, channel, tags, message) => {
    const fox = await feelsdank.Api.request("randomfox.ca/floof/")
    client.say(channel, `@${tags["display-name"]}, 🦊 ${fox.image}`)
}

module.exports.config = {
    name: "fox",
    description: "random image fox",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}