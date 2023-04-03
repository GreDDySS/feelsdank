const client = require("./twitch")
const EventSource = require("eventsource")
const Main = `https://events.7tv.io/v3@`
var source = null

const createEventSource = async () => {
    var channels = await feelsdank.DB.Channel.find({SevenTV: "true"})
        const url = `${Main},emote_set.update<object_id=${channels
            .map((c) => c.SevenID)
            .join(">,emote_set.update<object_id=")}>`
    source = new EventSource(url)
}

const handleEvent = async (e) => {
    const data = JSON.parse(e.data)
    var channel = await feelsdank.DB.Channel.findOne({SevenID: data.body.id})
    if (data.body.pushed){
        client.say(channel.username, `/me [7TV] - Добавили эмоут ${data.body.pushed[0].value.name}`)
    }
    if (data.body.pulled){
        client.say(channel.username, `/me [7TV] - Убрали эмоут ${data.body.pulled[0].old_value.name}`)
    }
    if (data.body.updated){
        client.say(channel.username, `/me [7TV] - Изменили эмоут ${data.body.updated[0].old_value.name} на ${data.body.updated[0].value.name}`)
    }
}

const addListener = () => {
    source.addEventListener("dispatch", handleEvent, false)
}

const initialize = async () => {
    if (source !== null) {
        source.close()
    }
    source = null
    await createEventSource().then(() => {
        addListener()
    })
}

module.exports = { initialize, source}