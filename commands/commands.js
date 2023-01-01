exports.run = async (client, args, channel, tags, message) => {
    client.say(channel, `${tags["display-name"]}, Список команд пока тут 👉 github.com/GreDDySS/feelsdank/blob/master/README.md 🟨 Сайт в процессе.`)
}

module.exports.config = {
    name: "commands",
    description: "",
    cooldown: 5000,
    aliases: ["cmd", "help"],
    adminOnly: false,
}