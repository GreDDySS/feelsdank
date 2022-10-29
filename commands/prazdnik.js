const rp = require("request-promise")
const cheerio = require("cheerio")
const url = "https://my-calend.ru/holidays"
const user = `Artemu5 BJlaguK_ Bustegg Eggrereal Fedotir GreDDySS GuyRalt Gvardovskiy Gwinsen Iamplugg Iamplugs Matria9 RandomCancer RandomCancer2 StreamElements SunsetColours_ Tuwka_ Xomachel ZULULpa aetenae borobushE crestavlennn eggUrt iLotterytea BetterCallTelevizor m4x0nn monkeoS oladushegg_ rilaveon saopin vexenigmus SunsetColours_ lydeco_ HumanStudi0 AlexanderLer Nipropieren`
const selector = 
["body > div.wrapper > main > div.holidays.main > article > section:nth-child(5) > ul > li:nth-child(1) ",
"body > div.wrapper > main > div.holidays.main > article > section:nth-child(5) > ul > li:nth-child(2) ",
"body > div.wrapper > main > div.holidays.main > article > section:nth-child(5) > ul > li:nth-child(3) ",
"body > div.wrapper > main > div.holidays.main > article > section:nth-child(5) > ul > li:nth-child(4)",
"body > div.wrapper > main > div.holidays.main > article > section:nth-child(5) > ul > li:nth-child(5)",
"body > div.wrapper > main > div.holidays.main > article > section:nth-child(5) > ul > li:nth-child(6)"
]
exports.run = async (client, args, channel, tags, message) => {
    rp(url).then(htm => {
        const $ = cheerio.load(htm)
        let text = ""
        $(feelsdank.Misc.randomArg(selector)).each((i, elem) => {
            text += `${$(elem).text()}`
            var lastWord = text.lastIndexOf(" ")
            text = text.substring(0, lastWord)
        })
        
        if (text.length > 350) {
            text = `${result.substring(0, 347)}...`
        }

        if(args[0] === "тык" && channel === "iamplugg") {
            // if(tags["user-id"] === "428322198") return
            client.say(channel, `${user} Сегодняшний праздник: ${text}`)
        } else {
            client.say(channel, `Сегодняшний праздник: ${text}`)
        }
        
            
    })

}
module.exports.config = {
    name: "prazdnik",
    description: "What a holiday today",
    cooldown: 10000,
    aliases: ["праздник"],
    adminOnly: false,
}