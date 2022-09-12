const TwitchPubSub = require("twitchps")
const pc = require("picocolors")
const client = require("./twitch")

const pubsub = new TwitchPubSub({
    init_topics: [{
        topic: `video-playback.${feelsdank.Config.owner}`,
        token: feelsdank.Config.token
    }],
    reconnect: true,
    debug: false
});

pubsub.on('connected', () => {
	feelsdank.Logger.info(`${pc.green("[PUBSUB]")} || Connected to PubSub.`);
});

pubsub.on('disconnected', () => {
	feelsdank.Logger.warn(`${pc.red("[PUBSUB]")} || Disconnected from PubSub.`);
});

pubsub.on('reconnect', () => {
	feelsdank.Logger.info(`${pc.green("[PUBSUB]")} || Reconnecting to PubSub...`);
});

pubsub.on('stream-up', async (data) => {
    const ping = await feelsdank.DB.PingStream.find({ping: true}, {username: 1})
    client.say("greddyss", `/announce Стрим начался`)
    client.sau("greddyss", `/announce ${ping.map((c) => c.username)}`)
})

pubsub.on('stream-down', async (data) => {
    client.say("greddyss", `/announce Стрим закончился`)
})