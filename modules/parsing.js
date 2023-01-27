const rp = require("request-promise")
const cheerio = require("cheerio")
const pc = require("picocolors")
const urlKak = "https://kakoysegodnyaprazdnik.ru"
const urlMy = "https://my-calend.ru/holidays"
const fs = require("fs")
async function pars() {
    const celebration = []
    await rp(urlKak).then(htm => {
        const $ = cheerio.load(htm)
        const regex = /\([^)]*\)/;
        for (let i = 0; i < 1; i++) {
         $(`div > * > *[itemprop = "text"]`).each((i, elem) => {
            celebration.push(`${$(elem).text().replace(regex, "")}`)
         })
        }
    })
    await rp(urlMy).then(htm => {
        const $ = cheerio.load(htm)
        const regex = /^\d*\n*|\n*\d*$/gm;
        for (let i = 0; i < 1; i++) {
         $(`article > section:nth-child(5) > ul > li`).each((i, elem) => {
            celebration.push(`${$(elem).text().replace(regex, "")}`)
         })
        }
    })
    fs.writeFileSync("./other/celebration.json", JSON.stringify(celebration, null, 2), {encoding: "utf-8"})
}

function parsing() {
    setTimeout(() => {
        pars().then(() => feelsdank.Logger.info(`${pc.green('[CELEBRATION]')} || Celebration update!`))
    }, 7200 * 1000)
}
module.exports = parsing
