exports.run = async (client, args, channel, tags, message) => {
    const dice = Math.floor(Math.random()*6) +1;
    client.say(channel, `@${tags['display-name']}, Результат: ${dice}`);
}

module.exports.config = {
    name: "dice",
    description: "random number from 1 to 6",
    cooldown: 5000,
    aliases: ["кубик"],
    adminOnly: false,
}