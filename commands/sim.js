const rp = require("request-promise")
const cheerio = require("cheerio")
const url = "https://ilotterytea.itch.io/maxon"
exports.run = async (client, args, channel, tags, message) => {
    rp(url).then(htm => {
        const $ = cheerio.load(htm)
        let text = ""
        $("body > div.main.wrapper > div.inner_column.size_large.family_comic-neue > div.view_game_page.page_widget > div.columns > div.left_col.column > div.uploads > div > div > div > div > strong").each((i, elem) => {
            
          text += `${$(elem).text()}`
        })
        
         client.say(channel, `Версия Симулятора: ${text}`)
        
            
    })
// #view_game_page_86405 > div.columns > div.left_col.column > div.uploads > div > div > div > div > strong
}
module.exports.config = {
    name: "sim",
    description: "kek",
    cooldown: 10000,
    aliases: ["simulator", "maxon"],
    adminOnly: false,
}