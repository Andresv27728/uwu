import moment from 'moment-timezone'

global.canalIdM = [
  "120363401008003732@newsletter",
  "120363401008003732@newsletter",
  "120363401008003732@newsletter"
]
global.canalNombreM = [
  "▐ 𝗧𝗢𝗖𝗔 𝗔𝗤𝗨𝗜▐ ",
  "✦ 𝗥𝗶𝗻 𝗜𝘁𝗼𝘀𝗵𝗶 - 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 ✦",
  "⚽𐚁 ֹ ִ Rin Itoshi - Official ୧ ֹ ִ⚽ᩚ꤬ᰍ"
]

global.getRandomChannel = () => {
  let i = Math.floor(Math.random() * global.canalIdM.length)
  return { id: global.canalIdM[i], nombre: global.canalNombreM[i] }
}
global.channelRD = global.getRandomChannel()

let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    let fecha = moment.tz('America/Lima').format('DD/MM/YYYY')
    let hora = moment.tz('America/Lima').format('hh:mm:ss A')
    let dia = moment.tz('America/Lima').format('dddd')

    let owner = "Shadow'Core 🧪"
    let comandos = Object.keys(global.plugins).length
    let bot = "⚽ Rin Itoshi - MD 🧪"

    let menu = `
╭━━━〔 *📥 𝘔𝘌𝘕𝘜 𝘋𝘌𝘚𝘊𝘈𝘙𝘎𝘈𝘚* 〕━━⬣
┃ ⏱️ 𝐇𝐨𝐫𝐚: *${hora}*
┃ 📅 𝐅𝐞𝐜𝐡𝐚: *${fecha}*
┃ 📆 𝐃𝐢́𝐚: *${dia}*
┃ 🧑‍💻 𝐎𝐰𝐧𝐞𝐫: *${owner}*
┃ ⚙️ 𝐏𝐫𝐞𝐟𝐢𝐣𝐨: *${usedPrefix}*
┃ 📚 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬: *${comandos}*
╰━━━〔 *${bot}* 〕━━⬣

╭─⬣「 *Descargas Disponibles* 」
│ 📥 ${usedPrefix}play <texto>
│ 🎵 ${usedPrefix}ytmp3 <url>
│ 🎥 ${usedPrefix}ytmp4 <url>
│ 🔊 ${usedPrefix}tiktok <url>
│ 📸 ${usedPrefix}igdl <url>
│ 📘 ${usedPrefix}fb <url>
╰─────────────⬣

📢 Canal Oficial: 
🔗 wa.me/subscribe/${global.channelRD.id}
「 ${global.channelRD.nombre} 」
    `.trim()

    await conn.sendMessage(m.chat, {
      image: { url: logo }, // imagen principal
      caption: menu,
      footer: '⚽ Rin Itoshi - MD 🧪',
      buttons: [
        { buttonId: `${usedPrefix}play`, buttonText: { displayText: "🎵 YouTube" }, type: 1 },
        { buttonId: `${usedPrefix}tiktok`, buttonText: { displayText: "🎥 TikTok" }, type: 1 }
      ],
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: '📥 Rin Itoshi - Descargas',
          body: '☯︎ Dev by Shadow\'Core',
          thumbnailUrl: 'https://files.catbox.moe/us0m4f.jpg',
          sourceUrl: `https://wa.me/subscribe/${global.channelRD.id}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    m.reply('❌ Error al mostrar el menú de descargas.')
  }
}
handler.help = ['descargas', 'dlmenu']
handler.command = ['descargas', 'dlmenu']
export default handler