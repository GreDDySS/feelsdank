require("dotenv").config();
module.exports = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    token: process.env.TOKEN,
    prefix: process.env.PREFIX,
    owner: process.env.OWNER,
    botId: process.env.BOTID,
    db_user: process.env.DB_USERNAME,
    db_pass: process.env.DB_PASSWORD,
    db_ip: process.env.DB_IP,
    db_db: process.env.DB_DATABASE,
};