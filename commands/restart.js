const {exec} = require("child_process")
exports.run = async (client, args, channel, tags, message) => {
    await exec("git pull")
    await client.say(channel, '🔁 restart!')
    await process.exit()
    await exec("npm start")
}

module.exports.config = {
    name: "restart",
    description: "restart bot",
    cooldown: 5000,
    aliases: [],
    adminOnly: true,
}