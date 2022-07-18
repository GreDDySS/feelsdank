const client = require("./twitch")
const EventSource = require("eventsource")
const Main = `https://events.7tv.app/v1/channel-emotes?channel=${feelsdank.Config.owner}`

var source = null

const createEventSource = async () => {
    var channels = await feelsdank.DB.Channel.find({SevenTV_Events: "true"})
        const url = `${Main}&channel=${channels
            .map((c) => c.twitch_name)
            .join("&channel=")}`
    source = new EventSource(Main)
}

const handleEvent = (e) => {
    const data = JSON.parse(e.data)
    switch (data.action) {
        case "ADD":
            client.say(data.channel, `/me [7TV] - Добавлен эмоут ${data.name}`)
            break
        case "REMOVE":
            client.say(data.channel, `/me [7TV] - Убран эмоут ${data.name}`)
            break
        case "UPDATE":
            client.say(data.channel, `/me [7TV] - Изменён эмоут ${data.emote.name} на ${data.name}`)
            break
    }
}

const addListener = () => {
    source.addEventListener("update", handleEvent, false)
}

const initialize = async () => {
    source = null
    await createEventSource().then(() => {
        addListener()
    })
}

module.exports = { initialize }