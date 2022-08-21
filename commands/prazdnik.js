const rp = require("request-promise")
const cheerio = require("cheerio")
const url = "https://kakoysegodnyaprazdnik.ru"
exports.run = async (client, args, channel, tags, message) => {
    rp(url).then(htm => {
        const $ = cheerio.load(htm)
        let text = ""
        $("#main_frame > div > div > div:nth-child(1) > div > a > span").each((i, elem) => {
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