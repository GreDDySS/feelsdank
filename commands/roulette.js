exports.run = async (client, args, channel, tags, message) => {
    const roulette = Math.floor(Math.random()*100) +1
    const bet = args[0]
    const jokpot = await feelsdank.DB.Jackpot.findOne({})
    var reg = /^\d+$/
    const points = await feelsdank.DB.User.findOne({username: tags.username});
    // regex number
    if(reg.test(bet)) {
        if (bet < points.points) {
            if(roulette >= 50) {
                if (roulette <= 10) {
                    const point = await feelsdank.DB.User.findOneAndUpdate(
                        { id: tags['user-id']},
                        { $inc : {'points' : jokpot}}
                        )
                        point.save();
                    const jackpots = await feelsdank.DB.Jackpot.findOneAndUpdate(
                        {name: "one"},
                        {$inc: {'jackpot': -JECKPOT}}
                        )
                        jackpots.save()
                    const pointNow = await feelsdank.DB.User.findOne({username: tags.username});
                        client.say(channel, `@${tags["display-name"]}, Вы выиграли ❗ДЖЕКПОТ❗  ${jokpot.jeckpot} points, теперь вы имеете ${pointNow.points} points PogChamp `)
                } else {
                    const win = bet*2
                    const point = await feelsdank.DB.User.findOneAndUpdate(
                        { id: tags['user-id']},
                        { $inc : {'points' : bet}}
                    )
                    point.save();
                    const pointNow = await feelsdank.DB.User.findOne({username: tags.username});
                    client.say(channel, `@${tags["display-name"]}, Вы выиграли ${win} points, теперь вы имеете ${pointNow.points} points FeelsOkayMan `)
                }
            } else {
                const point = await feelsdank.DB.User.findOneAndUpdate(
                    { id: tags['user-id']},
                    { $inc : {'points' : -bet}}
                )
                point.save();
                const jackpots = await feelsdank.DB.Jackpot.findOneAndUpdate(
                    {name: "one"},
                    {$inc: {'jackpot': bet}}
                    )
                    jackpots.save()
                const pointNow = await feelsdank.DB.User.findOne({username: tags.username});
                client.say(channel, `@${tags["display-name"]}, Вы проиграли ${bet} points, теперь вы имеете ${pointNow.points} points FeelsBadMan `)
            }
        } 
    } else return
}

module.exports.config = {
    name: "roulette",
    description: "",
    cooldown: 5000,
    aliases: ['gamble'],
    adminOnly: false,
}