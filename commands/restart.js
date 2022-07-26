const shell = require("child_process")
exports.run = async (client, args, channel, tags, message) => {
    await shell.exec("git pull")
    await client.say(channel, '🔁 restart!')
    await shell.exec("sudo reboot")
}

module.exports.config = {
    name: "restart",
    description: "restart bot",
    cooldown: 5000,
    aliases: [],
    adminOnly: true,
}