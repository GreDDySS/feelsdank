exports.run = async (client, args, channel, tags, message) => {
    client.say(channel, `${tags["dispalay-name"]}, Информация бота тут 👉 greddyss.ru`)
}

module.exports.config = {
    name: "templ",
    description: "",
    cooldown: 5000,
    aliases: ["cmd"],
    adminOnly: false,
}