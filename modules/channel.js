const getById = async (userId) => {
    const channelData = await feelsdank.SB.db.channel.findFirst({
        where: {userId: userId},
    })
    if(!channelData) {
        return undefined
    }
    return channelData
}

const getByName = async (username) => {
    const channelData = await feelsdank.SB.db.channel.findFirst({
        where: {name: username}
    })
    if (!channelData) {
        return undefined
    }
    return channelData
}

const getJoinable = async () => {
    const channels = await feelsdank.SB.db.channel.findMany({
        where: {ignore: false}
    })
    if(!channels) {
        return []
    }

    const result = channels.map((item) => {
        return item.name
    })
    return result
}

const getListenable = async () => {
    const channels = await feelsdank.SB.db.channel.findMany({
        where: { listenStreamStatus: false}
    })
    if (!channels) {
        return []
    }

    const result = channels.map((item) => {
        return item.userId
    })
    return result
}

module.exports = {getById, getByName, getJoinable, getListenable}