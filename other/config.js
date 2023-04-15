require("dotenv").config();
module.exports = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    bearer: process.env.BEARER,
    clientId: process.env.CLIENT_ID,
    token: process.env.TOKEN,
    prefix: process.env.PREFIX,
    owner: process.env.OWNER,
    botId: process.env.BOTID,
    db_supa: process.env.DATABASE_URL,
};