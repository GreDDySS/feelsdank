const shell = require("child_process")
exports.run = async (client, args, channel, tags, message) => {
    await client.say(channel, `🔁 Restart...`)
    await shell.exec("git pull")
    await shell.exec("npm i")
    shell.execSync("node bot.js")

}

module.exports.config = {
    name: "restart",
    description: "restart bot",
    cooldown: 5000,
    aliases: ['rs'],
    adminOnly: true,
}