const axios = require("axios")
const cheerio = require("cheerio")
const url = "https://kakoysegodnyaprazdnik.ru"
exports.run = async (client, args, channel, tags, message) => {
    
   await axios.get("https://my-calend.ru/holidays").then(html => {
        const $ = cheerio.load(html.data)
        let text = ""
        $("body > div.wrapper > main > div.holidays.main > article > section:nth-child(5) > ul > li:nth-child(1) > a").each((i, elem) => {
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