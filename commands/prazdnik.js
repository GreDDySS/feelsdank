const axios = require("axios")
const cheerio = require("cheerio")
const url = "https://kakoysegodnyaprazdnik.ru"
exports.run = async (client, args, channel, tags, message) => {
    
    axios.get("https://kakoysegodnyaprazdnik.ru").then(html => {
        const $ = cheerio.load(html.data)
        let text = ""
        $("#main_frame > div > div > div:nth-child(1) > div > a > span").each((i, elem) => {
            text += `${$(elem).text()}`
        })
        console.log(text)
    })

}
module.exports.config = {
    name: "prazdnik",
    description: "",
    cooldown: 5000,
    aliases: ["test"],
    adminOnly: true,
}