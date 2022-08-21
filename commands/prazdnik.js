const rp = require("request-promise")
const cheerio = require("cheerio")
const url = "https://kakoyprazdniksegodnya.ru/"
exports.run = async (client, args, channel, tags, message) => {
    rp(url).then(htm => {
        const $ = cheerio.load(htm)
        let text = ""
        $("body > div.wrap-page > div.prazdnik-block.prazdnik-block-1 > div > ol > li:nth-child(1)").each((i, elem) => {
            text += `${$(elem).text()}`
        })
        if (text.length > 350) {
                text = `${result.substring(0, 347)}...`
            } 
            client.say(channel, `Сегодняшний праздник: ${text}`)
    })

}
module.exports.config = {
    name: "prazdnik",
    description: "What a holiday today",
    cooldown: 10000,
    aliases: ["праздник"],
    adminOnly: false,
}