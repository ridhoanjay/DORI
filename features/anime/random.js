/*  [ Info singkat ]
 true = iya
 false = tidak
 %cmd = prefix+commsnd
*/
module.exports = {
  help: [
    "akira",
    "akiyama",
    "anna",
    "asuna",
    "ayuzawa",
    "boruto",
    "chitanda",
    "chitoge",
    "deidara",
    "doraemon",
    "elaina",
    "emilia",
    "asuna",
    "erza",
    "gremory",
    "hestia",
    "hinata",
    "inori",
    "itachi",
    "isuzu",
    "itori",
    "kaga",
    "kagura",
    "kakasih",
    "kaori",
    "kaneki",
    "kosaki",
    "kotori",
    "kuriyama",
    "kuroha",
    "kurumi",
    "madara",
    "mikasa",
    "miku",
    "minato",
    "naruto",
    "natsukawa",
    "nekohime",
    "nezuko",
    "nishimiya",
    "onepiece",
    "pokemon",
    "rem",
    "rize",
    "sagiri",
    "sakura",
    "sasuke",
    "shina",
    "shinka",
    "shizuka",
    "shota",
    "tomori",
    "toukachan",
    "tsunade",
    "yatogami",
    "yuki",
  ], //nama fitur kamu
  usage: "*random image*", //deskripsi singkat
  command: [
    "akira",
    "akiyama",
    "anna",
    "asuna",
    "ayuzawa",
    "boruto",
    "chitanda",
    "chitoge",
    "deidara",
    "doraemon",
    "elaina",
    "emilia",
    "asuna",
    "erza",
    "gremory",
    "hestia",
    "hinata",
    "inori",
    "itachi",
    "isuzu",
    "itori",
    "kaga",
    "kagura",
    "kakasih",
    "kaori",
    "kaneki",
    "kosaki",
    "kotori",
    "kuriyama",
    "kuroha",
    "kurumi",
    "madara",
    "mikasa",
    "miku",
    "minato",
    "naruto",
    "natsukawa",
    "nekohime",
    "nezuko",
    "nishimiya",
    "onepiece",
    "pokemon",
    "rem",
    "rize",
    "sagiri",
    "sakura",
    "sasuke",
    "shina",
    "shinka",
    "shizuka",
    "shota",
    "tomori",
    "toukachan",
    "tsunade",
    "yatogami",
    "yuki",
  ], //untuk eksekusi fitur nya
  category: ["anime"], //fitur kamu termasuk kategori apa?
  run: async (
    m,
    {
      kgy,
      usedPrefix,
      command,
      text,
      isOwner,
      isPrems,
      isMods,
      isAdmin,
      isBotAdmin,
      chatUpdate,
      args,
    },
  ) => {
    let res = await Func.fetchJson(
      `https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`,
    );
    m.reply(`*[ RANDOM ${command.toUpperCase()} ]*`, await Func.random(res));
  },
  wait: true, //menampilkan pesan menunggu
  owner: false, //Fitur ini Khusus owner
  group: false, //Fitur ini khusus didalam group
  private: false, //Fitur ini khusus di private chat
  botadmin: false, //Fitur ini khusus ketikan bot menjadi admin
  premium: false, //Fitur ini khusus pengguna premium
  error: 0, //Menghitung total Error ( Jangan di ubah )
  update: Date.now(), //kapan terakhir fitur ini di perbarui? ( Jangan di ubah )
  description: "Menampilkan random photo dari karakter anime", //kosongkan jika tidak ingin di isi
};
