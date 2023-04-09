const {pars} = require("../modules/parsing")
exports.run = async (client, args, channel, tags, message) => {
  pars().then(() => client.say(channel, `Обновление праздников завершено!`))
}

module.exports.config = {
    name: "update",
    description: "",
    cooldown: 5000,
    aliases: [],
    adminOnly: true,
}