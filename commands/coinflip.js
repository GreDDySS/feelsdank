exports.run = async (client, args, channel, tags, message) => {
    let response = ["Орёл", "Решка"]
    let random = Math.floor(Math.random() * response.length) + 0
    client.say(channel, `@${tags["display-name"]}, Выпал: ${response[random]}`)
}

module.exports.config = {
    name: "coinflip",
    description: "This command will do a 50/50 coinflip",
    cooldown: 5000,
    aliases: ["cf"],
    adminOnly: false,
}