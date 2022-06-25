exports.run = async (client, args, channel, tags, message) => {
    let today = new Date();
    newYearDate = new Date(today.getFullYear() + 1, 0, 1);
    let msDiff = newYearDate - today;
    days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),
    hours = Math.floor((msDiff / (1000 * 60 * 60) - 3) % 24),
    mins = Math.floor((msDiff / 1000 / 60) % 60)

    client.say(channel, `До конца года осталось: ${days}d ${hours}h ${mins}m `)

}

module.exports.config = {
    name: "year",
    description: "",
    cooldown: 5000,
    aliases: [],
    adminOnly: false,
}