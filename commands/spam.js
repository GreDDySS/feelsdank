exports.run = async (client, args, channel, tags, message) => {
    var range = parseInt(args[0])

    if (isNaN(range)) return

    if (range > 50) return client.say(channel, `${tags.username}, [0-50] text`)

    var msg = args.slice(1, args.length).join(' ')
    var regex = /(!|@|#|\$|%|\^|&|\*|\(|\)|-|=|\+|\\|\/|:|"|'|\[|\]|\||<|>|\?|\.)/;
    
    if (regex.test(msg)) {
        client.say(channel, `NOIDONTTHINKSO`)
        return
    }

    for (let i = 0; i < range; i++) {
        client.say(channel, msg)
    }
}

module.exports.config = {
    name: "spam",
    description: "",
    cooldown: 5000,
    aliases: [],
    adminOnly: true,
}