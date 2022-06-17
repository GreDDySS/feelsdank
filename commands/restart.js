exports.run = async (client, args, channel, tags, message, user) => {
    await client.say(channel, "ppHopper restart 🔄")
    
    process.exit()
}

module.exports.config = {
    name: "off",
    description: "off bot",
    aliases: ["shutdown"],
    author: true,
}