const Function = require(process.cwd() + "/lib/function");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const moment = require("moment-timezone");
//===========//
global.owner = ["6283897023533"];
global.settings = {
  cover: "https://files.catbox.moe/ed7ekj.jpg",
  footer: "© Dori-bot 2024",
  packname: "D O R I",
  version: require(process.cwd() + "/package.json").version,
  message: {
    admin: "[ ⚠️ ] Fitur ini hanya untuk admin group",
    owner: "[ ⚠️ ] Fitur ini hanya untuk owner bot",
    premium: "[ ⚠️ ] Fitur ini hanya untuk pengguna premium",
    group: "[ ⚠️ ] Fitur ini hanya dapat digunakan di group",
    private: "[ ⚠️ ] Fitur ini hanya dapat digunakan di private chst",
    botadmin: "[ ⚠️ ] Jadikan bot sebagai admin sebelum mengunnakan fitur ini",
  },
  dataname: "kgy-db.json",
  sessions: "kgy-sessions",
  use_pairing: false,
};
global.Func = new Function();
global.api = {
  skizo: "YOUR_KEY",
  yanz: "YOUR_KEY",
};
global.baileys = require("baileys");

//Kalo kurang tambahin sendiri
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update :") + chalk.yellow.bold(file));
  delete require.cache[file];
  if (global.reloadHandler) console.log(global.reloadHandler());
});
