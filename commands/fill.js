exports.run = async (client, args, channel, tags, message) => {
    let arr = ''
    const arg = args.join(" ").replace('!', 'ǃ').replace('=', '꓿').replace('$', '💲') + ' '

    while (arr.length + arg.length + 1 < 485) arr += arg.repeat(1) + ' '

    return client.say(channel, `${arr}`)
}

module.exports.config = {
    name: "fill",
    description: "'repeats the specified phrase until it reaches 500 characters",
    cooldown: 30000,
    aliases: [],
    adminOnly: false,
}