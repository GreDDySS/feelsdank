exports.run = async (client, args, channel, tags, message) => {
    const ev = await eval('(async () => {' + args.join(' ') + '})()')

    if (ev) return client.say(channel, `${String(ev)}`)
}

module.exports.config = {
    name: "eval",
    description: "js code",
    cooldown: 5000,
    aliases: [],
    adminOnly: true,
}