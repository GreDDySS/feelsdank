exports.run = async (client, args, channel, tags, message, user) => {
    await client.say(channel, "ppPoof off!")
    process.exit()
}

module.exports.config = {
    name: "off",
    description: "off bot",
    cooldown: 500,
    aliases: ["shutdown"],
    adminOnly: true,
}