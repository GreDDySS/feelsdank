const axios = require('axios');
const pc = require('picocolors')
exports.run = async (client, args, channel, tags, message, user) => {

    const location = encodeURIComponent(args.join(" "))
    await axios.get(`http://api.weatherapi.com/v1/current.json?key=${feelsdank.Config.weather}&q=${location}`)
        .then(async (res) => {
            await client.say(channel, `@${tags.username}, ${location} (сейчас): ${res.data.current.temp_c}°C, по ощущениям ${res.data.current.feelslike_c}°C. Облачность ${res.data.current.cloud}%. Порывы ветра до ${res.data.current.wind_kph}km/h. Влажность ${res.data.current.humidity}%. (Обновлено: ${res.data.current.last_updated})`)
    }).catch((error) => {feelsdank.Logger.error(`${pc.yellow("[WEATHER]")}|| ${error}` && client.say(channel, `@${tags.username}, Я такого города не нашёл 🤨`))})
    
}
module.exports.config = {
    name: "weather",
    description: "check weather",
    cooldown: 5000,
    aliases: ["wet"],
    adminOnly: false,
}