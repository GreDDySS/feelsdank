exports.run = async (client, args, channel, tags, message) => {
    const jackpot = await feelsdank.DB.Jackpot.findOne({})
    if(tags["user-id"] === "176257472") {
        if(args[0] === "add") {
            const addJeckpot = feelsdank.DB.Jackpot.findOneAndUpdate(
                { name: "now"},
                { $inc: {jackpot: args[1]}}
            )
            addJeckpot.save()
            client.say(channel, `@${tags["display-name"]}, Успешно добавлено: ${args[1]} points`)
        } else {
            return client.say(channel, `@${tags["display-name"]}, Сумма джекпота составляет: ${jackpot.jackpot} points`)
        }
    } else { return client.say(channel, `@${tags["display-name"]}, Сумма джекпота составляет: ${jackpot.jackpot} points`)}
    
    
}

module.exports.config = {
    name: "jackpot",
    description: "",
    cooldown: 5000,
    aliases: [],
    adminOnly: true,
}