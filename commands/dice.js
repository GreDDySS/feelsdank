exports.run = async (client, args, channel, tags, message) => {
    client.say(channel, `@${tags['display-name']}, Результат: ${feelsdank.Misc.random(6)}`);
}

module.exports.config = {
    name: "dice",
    description: "random number from 1 to 6",
    cooldown: 5000,
    aliases: ["кубик"],
    adminOnly: false,
}