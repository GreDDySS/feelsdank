const math = require("mathjs")
exports.run = async (client, args, channel, tags, message) => {
    const mathem = () => {
        var result = `${math.evaluate(args.join(' '))}`

        if (result.length > 350) {
            result = `${result.substring(0, 347)}...`
        } 
        return result
    }
    

    if (!args[0]) {
        client.say(channel, "There is no argument.")
        return
    }

    client.say(channel, `@${tags.username}, ${mathem()}`)
}

module.exports.config = {
    name: "math",
    description: "mathematical calculations",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}