exports.run = async (client, args, channel, tags, message) => {
    client.say(channel, `@${tags['display-name']}, Результат: ${feelsdank.Misc.random(100)}%`);
}

module.exports.config = {
    name: "%",
    description: "random precentage between 0% and 100%",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}