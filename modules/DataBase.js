const mongoose  = require('mongoose');
const pc = require('picocolors');

main().catch(e => feelsdank.Logger.error(`${pc.red("[DATABASE]")} || Error: ${e}`))

async function main() {
  await mongoose.connect(`mongodb+srv://GreDDySS:28Chrome201826@cluster0.744az.mongodb.net/TwitchBot`).then(() => {
  feelsdank.Logger.info(`${pc.green("[DATABASE]")} || DataBase connect successfully`)
  })
}

const User =  mongoose.Schema({
    id: String,
    username: String,
    displayname: String,
    permission: {
        type: String,
        default: 'user'
    }
})
const ChannelSchema = new mongoose.Schema({
    username: String,
    id: Number,
    customPrefix: {
        type: String,
        required: false
    },
    ignore: {
        type: Boolean,
        default: false
    },
    SevenTV: {
        type: Boolean,
        default: true
    },
    SevenID: String,
    listenStreamStatus: {
        type: Boolean,
        default: true
    },
})

const SuggestSchema = new mongoose.Schema({
    author: String,
    message: String,
    date: String,
})

const ErrorSchema = new mongoose.Schema({
    name: String,
    message: String,
    stack: String,
})

const StreamPingSchema = new mongoose.Schema({
    username: String
})

module.exports.Suggest = mongoose.model("Suggest", SuggestSchema, "Suggests")
module.exports.Channel = mongoose.model("Channel", ChannelSchema, "Channels");
module.exports.User = mongoose.model('User', User, "Users");
module.exports.Error = mongoose.model("Error", ErrorSchema, "Errors")
module.exports.PingStream = mongoose.model("Ping", StreamPingSchema, "Pings")