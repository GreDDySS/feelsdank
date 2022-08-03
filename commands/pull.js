const shell = require("child_process")
exports.run = async (client, args, channel, tags, message) => {
    await client.say(channel, `🔁 Pull file...`)
    await shell.exec("git pull")
    await shell.exec("npm i")

}

module.exports.config = {
    name: "pull",
    description: "pull the files from github",
    cooldown: 5000,
    aliases: ['rs'],
    adminOnly: true,
}