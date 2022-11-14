const url = "https://chat.ilotterytea.kz"
exports.run = async (client, args, channel, tags, message) => {
    client.say(channel, `@${tags["display-name"]}, ${url}`)
}

module.exports.config = {
    name: "chat",
    description: "web chat",
    cooldown: 5000,
    aliases: ["чат", "пипочат", "пиппочат", "peppochat", ""],
    adminOnly: false,
}