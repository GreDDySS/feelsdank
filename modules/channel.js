const getById = async (userId) => {
    const channelData = await feelsdank.DB.Channel.findOne({id: userId})
    if(!channelData) {
        return undefined
    }
    return channelData
}

const getByName = async (username) => {
    const channelData = await feelsdank.DB.Channel.findOne({username: username})
    if (!channelData) {
        return undefined
    }
    return channelData
}

const getJoinable = async () => {
    const channels = await feelsdank.DB.Channel.find({ignore: false})
    if(!channels) {
        return []
    }

    const result = channels.map((item) => {
        return item.username
    })
    return result
}

const getListenable = async () => {
    const channels = await feelsdank.DB.Channel.find({listenStreamStatus: true})
    if (!channels) {
        return []
    }

    const result = channels.map((item) => {
        return item.id
    })
    return result
}

module.exports = {getById, getByName, getJoinable, getListenable}