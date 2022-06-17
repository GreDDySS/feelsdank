require("dotenv").config();

module.exports = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    clientId: process.env.CLIENTID,
    bearer: process.env.BEARER,
    clientSecret: process.env.CLIENTSECRET,
    token: process.env.TOKEN,
    refresh: process.env.REFRESH,
    prefix: process.env.PREFIX,
    userCooldown: Number(process.env.USERCD),
    defaultCooldown: Number(process.env.DEFAULTCD),
    msgLenghtLimit: Number(process.env.MSGLENGTHLIMIT),
    owner: process.env.OWNER,
    botId: process.env.BOTID,
    db_user: process.env.DB_USERNAME,
    db_pass: process.env.DB_PASSWORD,
    db_ip: process.env.DB_IP,
    db_db: process.env.DB_DATABASE,
    weather: process.env.WEATHER,
};