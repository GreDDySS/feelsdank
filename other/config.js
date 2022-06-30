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
    db_user: process.env.DB_USERNAME,
    db_pass: process.env.DB_PASSWORD,
    db_ip: process.env.DB_IP,
    db_db: process.env.DB_DATABASE,
};