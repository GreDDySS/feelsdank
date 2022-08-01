const math = require("mathjs")
exports.run = async (client, args, channel, tags, message) => {
    const arg = args.join(" ")
    const result = math.evaluate(arg)
    
    if (!args[0]) {
        client.say(channel, "There is no argument.")
        return
    }

    client.say(channel, `@${tags.username}, ${result}`)
}

module.exports.config = {
    name: "math",
    description: "mathematical calculations",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}