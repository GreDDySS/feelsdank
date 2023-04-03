const fs = require("fs")
const user = `Artemu5 BJlaguK_ Bustegg Eggrereal Fedotir GreDDySS GuyRalt Gvardovskiy Gwinsen Iamplugg Iamplugs Matria9 RandomCancer RandomCancer2 StreamElements SunsetColours_ Tuwka_ Xomachel ZULULpa aetenae borobushE crestavlennn eggUrt iLotterytea BetterCallTelevizor m4x0nn monkeoS oladushegg_ rilaveon saopin vexenigmus SunsetColours_ lydeco_ HumanStudi0 AlexanderLer Nipropieren`
exports.run = async (client, args, channel, tags, message) => {
    const data = JSON.parse(fs.readFileSync("other/celebration.json", {encoding: "utf-8"}))
    const num = feelsdank.Misc.random(data.length)
    if(args[0] === "тык" && channel === "iamplugg") {
        return client.say(channel, `${user} Сегодняшний праздник: ${data[num - 1]}`)
    }
    if(args[0] === "info") {
        return client.say(channel, `Сегодняшний праздник: ${data[num - 1]} — ${num} из ${data.length}`)
    } else {
        return client.say(channel, `Сегодняшний праздник: ${data[num - 1]}`)
    }
}
module.exports.config = {
    name: "prazdnik",
    description: "What a holiday today",
    cooldown: 5000,
    aliases: ["праздник"],
    adminOnly: false,
}