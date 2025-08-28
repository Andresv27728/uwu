import axios from 'axios'
import moment from 'moment-timezone'
//import sharp from 'sharp'

let handler = async (m, { conn, args }) => {
  try {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let userData = global.db.data.users[userId] || {}
    let exp = userData.exp || 0
    let coin = userData.coin || 0
    let level = userData.level || 0
    let role = userData.role || 'Sin Rango'
    let name = await conn.getName(userId)

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.keys(global.plugins).length
    
/*    
    const imgenUrl = logo
    const imgBuffer = await (await fetch(imgenUrl)).buffer()

    const thumb = await sharp(imgBuffer)
      .resize(400, 400)
      .jpeg({ quality: 70 })
      .toBuffer()

    const docBuffer = await sharp(imgBuffer)
      .webp({ quality: 90 })
      .toBuffer()
*/
    let videos = [
        'https://qu.ax/tOlsB.mp4',
        'https://qu.ax/GOETt.mp4',
        'https://qu.ax/ugzCY.mp4',
        'https://qu.ax/WQikc.mp4'
    ]
  
    let video = videos[Math.floor(Math.random() * videos.length)]

    const imgRandom = [
      "https://files.catbox.moe/v9qsok.jpg",
      "https://files.catbox.moe/f6vksl.jpg"
    ].getRandom?.() || "https://files.catbox.moe/e2n2sq.jpg"

    const text = [
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]",
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]",
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]",
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]",
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]",
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]",
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]",
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]",
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]",
   "[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]\n[̲̲̅̅A̲̲̅̅c̲̲̅̅á̲̲̅̅ ̲̲̅̅E̲̲̅̅s̲̲̅̅t̲̲̅̅a̲̲̅̅ ̲̲̅̅e̲̲̅̅l̲̲̅̅ ̲̲̅̅M̲̲̅̅e̲̲̅̅n̲̲̅̅ú̲̲̅̅ ̲̲̅̅]"
    ].getRandom?.() || "✦ 𝐌𝐄𝐍𝐔 ✦"

    const thumbnailBuffer = Buffer.from((await axios.get(imgRandom, { responseType: 'arraybuffer' })).data)

    const shadow = {
      key: { participants: "0@s.whatsapp.net", fromMe: false, id: "Halo" },
      message: {
        locationMessage: {
          name: text,
          jpegThumbnail: thumbnailBuffer
        }
      },
      participant: "0@s.whatsapp.net"
    }

    await conn.sendMessage(m.chat, {
      text: '╭─〔 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎... 🌷 〕─⬣\n┃ 🌱 *𝒄𝒐𝒏𝒆𝒄𝒕𝒂𝒏𝒅𝒐 𝒂 𝒍𝒂 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔...*\n┃ 📡 *sɪɴᴄʀᴏɴɪᴢᴀɴᴅᴏ ᴍᴇɴᴜ...*\n╰─ ─ ─ ─ ─ ─ ─ ─ ─ ╴ ╴ ╴ ╴',
      mentions: [m.sender],
      contextInfo: {
        externalAdReply: {
          title: 'GAWR GURA ULTRA | ʙʏ (っ◔◡◔)っ ♥ Yo Soy YO ♥',
          body: club,
          thumbnailUrl: 'https://files.catbox.moe/qifsi4.jpg',
          sourceUrl: redes,
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m })

    await new Promise(resolve => setTimeout(resolve, 2000))

    let fechaObj = new Date()
    let hora = new Date().toLocaleTimeString('es-PE', { timeZone: 'America/bogota' })
    let fecha = fechaObj.toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/bogota' })
    let dia = fechaObj.toLocaleDateString('es-PE', { weekday: 'long', timeZone: 'America/bogota' })


    let readMore = String.fromCharCode(8206).repeat(4001)
    let menuText = `
🌷｡･:*˚:✧｡  Gะaะwะrะ Gะuะrะaะ  ʙᴏᴛ ｡✧:˚*:･｡🌱
⊱ ────── {.⋅ ✯ ⋅.} ────── ⊰

☁️ ${ucapan()} @${userId.split('@')[0]} ⚡

  \`[ 𝗜 𝗡 𝗙 𝗢 - 𝗨 𝗦 𝗘 𝗥 ]\`
  ﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊
> ✩⚞ ᴜsᴇʀ: *${name}*
> ✩⚞ ɴɪᴠᴇʟ: *${level}*
> ✩⚞ ᴇxᴘ ᴛᴏᴛᴀʟ: *${exp}*
> ✩⚞ ʀᴀɴɢᴏ: ${role}
> ✩⚞ ᴘʀᴏɢʀᴇsᴏ: [██████████]
──────────────────────
${readMore}
  \`[ 𝗜 𝗡 𝗙 𝗢 - 𝗕 𝗢 𝗧 ]\`
  ﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊
> ✧⚞ ⚙️ ᴍᴏᴅᴏ: *ɢʀᴀᴛɪs*
> ✧⚞ 👑 ᴏᴡɴᴇʀ: *+573133374132*
> ✧⚞ 🤖 ʙᴏᴛ: ${(conn.user.jid == global.conn.user.jid ? '🌟 `ʙᴏᴛ ᴏғɪᴄɪᴀʟ`' : '✨ `sᴜʙ ʙᴏᴛ`')}
> ✧⚞ 📚 ᴄᴏᴍᴀɴᴅᴏs: *${totalCommands}*
> ✧⚞ 🧑‍🤝‍🧑 ᴛᴏᴛᴀʟ ᴜsᴇʀs: *${totalreg}*
> ✧⚞ ⏱️ ʀᴜɴᴛɪᴍᴇ: *${uptime}*
──────────────────────
${readMore}
   \`[ 𝗜 𝗡 𝗙 𝗢 - 𝗙 𝗘 𝗖 𝗛 𝗔 ]\`
  ﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊
> ✧⚞ ⚡ ʜᴏʀᴀ Colombia: *${hora}*
> ✧⚞ 🍩 ғᴇᴄʜᴀ: *${fecha}*
> ✧⚞ ☘️ ᴅɪᴀ: *${dia}*
──────────────────────
${readMore}
  *🔥 \`𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗜𝗦𝗣𝗢𝗡𝗜𝗕𝗟𝗘𝗦\` ⚽*
   ﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊﹊
${readMore}
✮ ≽ܫ≼ -۪۫ɪ۪۫ɴ۪۫ғ۪۫ᴏ۪۫- 𓍢ִ🌷͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .afk [alasan]
*│ᜓ ݊ ᜒ𝅄˚--»* .menu
*│ᜓ ݊ ᜒ𝅄˚--»* .uptime
*│ᜓ ݊ ᜒ𝅄˚--»* .script
*│ᜓ ݊ ᜒ𝅄˚--»* .staff
*│ᜓ ݊ ᜒ𝅄˚--»* .creador
*│ᜓ ݊ ᜒ𝅄˚--»* .grupos
*│ᜓ ݊ ᜒ𝅄˚--»* .estado
*│ᜓ ݊ ᜒ𝅄˚--»* .infobot
*│ᜓ ݊ ᜒ𝅄˚--»* .sug
*│ᜓ ݊ ᜒ𝅄˚--»* .ping
*│ᜓ ݊ ᜒ𝅄˚--»* .reportar <txt>
*│ᜓ ݊ ᜒ𝅄˚--»* .reglas
*│ᜓ ݊ ᜒ𝅄˚--»* .speed
*│ᜓ ݊ ᜒ𝅄˚--»* .sistema
*│ᜓ ݊ ᜒ𝅄˚--»* .usuarios
*│ᜓ ݊ ᜒ𝅄˚--»* .ds
*│ᜓ ݊ ᜒ𝅄˚--»* .funciones
*│ᜓ ݊ ᜒ𝅄˚--»* .editautoresponder
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫ᴍ۪۫ᴇ۪۫ɴ۪۫ᴜ۪۫•۪۫ʟ۪۫ɪ۪۫s۪۫ᴛ-۪۫ 𓍢ִ🍂͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .menulist
*│ᜓ ݊ ᜒ𝅄˚--»* .dev - ᴍᴇɴᴜ ᴏᴡɴᴇʀ
*│ᜓ ݊ ᜒ𝅄˚--»* .menusticker - ᴍᴇɴᴜ sᴛɪᴄᴋᴇʀs
*│ᜓ ݊ ᜒ𝅄˚--»* .menusearch - ᴍᴇɴᴜ sᴇᴀʀᴄʜ
*│ᜓ ݊ ᜒ𝅄˚--»* .menudl - ᴍᴇɴᴜ ᴅᴇsᴄᴀʀɢᴀs
*│ᜓ ݊ ᜒ𝅄˚--»* .menulogos - ʟᴏɢᴏs
*│ᜓ ݊ ᜒ𝅄˚--»* .menunsfw - ᴍᴇɴᴜ 18
*│ᜓ ݊ ᜒ𝅄˚--»* .menugp - ᴍᴇɴᴜ ɢʀᴜᴘᴏ
*│ᜓ ݊ ᜒ𝅄˚--»* .menu2 - ᴍᴇɴᴜ ᴀᴜᴅɪᴏs
*│ᜓ ݊ ᜒ𝅄˚--»* .menurpg - ᴍᴇɴᴜ ʀᴘɢ
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫s۪۫ᴇ۪۫ᴀ۪۫ʀ۪۫ᴄ۪۫ʜ۪۫- 𓍢ִ🌱͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴀɴɪᴍᴇɪɴғᴏ
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴀɴɪᴍᴇsᴇᴀʀᴄʜ
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴄᴜᴇᴠᴀɴᴀ
*│ᜓ ݊ ᜒ𝅄˚--»* .ɢɪᴛʜᴜʙsᴇᴀʀᴄʜ
*│ᜓ ݊ ᜒ𝅄˚--»* .sᴇᴀʀᴄʜʜᴇɴᴛᴀɪ
*│ᜓ ݊ ᜒ𝅄˚--»* .ɢᴏᴏɢʟᴇ *<ʙúsǫᴜᴇᴅᴀ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ɪᴍᴀɢᴇɴ *<ǫᴜᴇʀʏ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ɪɴғᴏᴀɴɪᴍᴇ
*│ᜓ ݊ ᜒ𝅄˚--»* .ɢɪᴛʜᴜʙsᴛᴀʟᴋ *<ǫᴜᴇʀʏ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .sᴏᴜɴᴅᴄʟᴏᴜᴅsᴇᴀʀᴄʜ *<ᴛxᴛ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴘɪɴᴛᴇʀᴇsᴛ
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴘᴏʀɴʜᴜʙsᴇᴀʀᴄʜ
*│ᜓ ݊ ᜒ𝅄˚--»* .sᴘᴏᴛɪғʏsᴇᴀʀᴄʜ *<ᴛᴇxᴛᴏ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ʏᴛsᴇᴀʀᴄʜ2 *<ᴛᴇxᴛ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ɴᴘᴍᴊs
*│ᜓ ݊ ᜒ𝅄˚--»* .ɢɴᴜʟᴀ
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴀᴘᴋsᴇᴀʀᴄʜ
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴡɪᴋɪs
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴛɪᴋᴛᴏᴋsᴇᴀʀᴄʜ *<ᴛxᴛ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴛᴡᴇᴇᴛᴘᴏsᴛs
*│ᜓ ݊ ᜒ𝅄˚--»* .xɴxxs
*│ᜓ ݊ ᜒ𝅄˚--»* .xᴠsᴇᴀʀᴄʜ
*│ᜓ ݊ ᜒ𝅄˚--»* .ʏᴛs
*│ᜓ ݊ ᜒ𝅄˚--»* .ғᴅʀᴏɪᴅsᴇᴀʀᴄʜ *<ᴛéʀᴍɪɴᴏ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ʜᴀᴘᴘʏᴍᴏᴅsᴇᴀʀᴄʜ *<ʙúsǫᴜᴇᴅᴀ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴄɪɴᴇᴄᴀʟɪᴅᴀᴅsᴇᴀʀᴄʜ *<ʙúsǫᴜᴇᴅᴀ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ʏᴀʜᴏᴏsᴇᴀʀᴄʜ *<ʙúsǫᴜᴇᴅᴀ>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ᴍᴏᴠɪᴇ *<ᴛéʀᴍɪɴᴏ>*
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫s۪۫ᴜ۪۫ʙ۪۫ʙ۪۫ᴏ۪۫ᴛ۪۫s۪۫- 𓍢ִ🚀͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .qr
*│ᜓ ݊ ᜒ𝅄˚--»* .code
*│ᜓ ݊ ᜒ𝅄˚--»* .token
*│ᜓ ݊ ᜒ𝅄˚--»* .sockets
*│ᜓ ݊ ᜒ𝅄˚--»* .deletesesion
*│ᜓ ݊ ᜒ𝅄˚--»* .pausarai
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫ᴅ۪۫ᴏ۪۫ᴡ۪۫ɴ۪۫ʟ۪۫ᴏ۪۫ᴀ۪۫ᴅ۪۫- 𓍢ִ🍓͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .fb2
*│ᜓ ݊ ᜒ𝅄˚--»* .fdroid *<url>*
*│ᜓ ݊ ᜒ𝅄˚--»* .fb
*│ᜓ ݊ ᜒ𝅄˚--»* .sound
*│ᜓ ݊ ᜒ𝅄˚--»* .gitclone *<url git>*
*│ᜓ ݊ ᜒ𝅄˚--»* .gdrive
*│ᜓ ݊ ᜒ𝅄˚--»* .ig
*│ᜓ ݊ ᜒ𝅄˚--»* .mediafire *<url>*
*│ᜓ ݊ ᜒ𝅄˚--»* .mega
*│ᜓ ݊ ᜒ𝅄˚--»* .apk *<nombre>*
*│ᜓ ݊ ᜒ𝅄˚--»* .pinvid *<link>*
*│ᜓ ݊ ᜒ𝅄˚--»* .apk2 *<busqueda>*
*│ᜓ ݊ ᜒ𝅄˚--»* .npmdl
*│ᜓ ݊ ᜒ𝅄˚--»* .tt2
*│ᜓ ݊ ᜒ𝅄˚--»* .kwaidl
*│ᜓ ݊ ᜒ𝅄˚--»* .likee *<url>*
*│ᜓ ݊ ᜒ𝅄˚--»* .aplay2 • applemusic2
*│ᜓ ݊ ᜒ𝅄˚--»* .capcut *<url>*
*│ᜓ ݊ ᜒ𝅄˚--»* .play
*│ᜓ ݊ ᜒ𝅄˚--»* .play2
*│ᜓ ݊ ᜒ𝅄˚--»* .ytmp3doc
*│ᜓ ݊ ᜒ𝅄˚--»* .ytmp4doc
*│ᜓ ݊ ᜒ𝅄˚--»* .iaimg *<texto>*
*│ᜓ ݊ ᜒ𝅄˚--»* .yta
*│ᜓ ݊ ᜒ𝅄˚--»* .ytv
*│ᜓ ݊ ᜒ𝅄˚--»* .tiktokrandom
*│ᜓ ݊ ᜒ𝅄˚--»* .spotify
*│ᜓ ݊ ᜒ𝅄˚--»* .tiktokhd
*│ᜓ ݊ ᜒ𝅄˚--»* .tiktoktrends
*│ᜓ ݊ ᜒ𝅄˚--»* .snapchat *<link>*
*│ᜓ ݊ ᜒ𝅄˚--»* .terabox
*│ᜓ ݊ ᜒ𝅄˚--»* .tiktok *<url>*
*│ᜓ ݊ ᜒ𝅄˚--»* .tiktokmp3 *<url>*
*│ᜓ ݊ ᜒ𝅄˚--»* .tiktokimg *<url>*
*│ᜓ ݊ ᜒ𝅄˚--»* .twitter *<url>*
*│ᜓ ݊ ᜒ𝅄˚--»* .xvideosdl
*│ᜓ ݊ ᜒ𝅄˚--»* .xnxxdl
*│ᜓ ݊ ᜒ𝅄˚--»* .pindl
*│ᜓ ݊ ᜒ𝅄˚--»* .apkpure
*│ᜓ ݊ ᜒ𝅄˚--»* .apkpuredl
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫ғ۪۫ᴜ۪۫ɴ۪۫🔥͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .gay *@tag* 
*│ᜓ ݊ ᜒ𝅄˚--»* .lesbiana *@tag* 
*│ᜓ ݊ ᜒ𝅄˚--»* .pajero *@tag* 
*│ᜓ ݊ ᜒ𝅄˚--»* .pajera *@tag* 
*│ᜓ ݊ ᜒ𝅄˚--»* .puto *@tag* 
*│ᜓ ݊ ᜒ𝅄˚--»* .puta *@tag* 
*│ᜓ ݊ ᜒ𝅄˚--»* .manco *@tag* 
*│ᜓ ݊ ᜒ𝅄˚--»* .manca *@tag* 
*│ᜓ ݊ ᜒ𝅄˚--»* .rata *@tag*
*│ᜓ ݊ ᜒ𝅄˚--»* .prostituta *@tag*
*│ᜓ ݊ ᜒ𝅄˚--»* .amigorandom
*│ᜓ ݊ ᜒ𝅄˚--»* .jalamela
*│ᜓ ݊ ᜒ𝅄˚--»* .simi
*│ᜓ ݊ ᜒ𝅄˚--»* .chiste
*│ᜓ ݊ ᜒ𝅄˚--»* .consejo
*│ᜓ ݊ ᜒ𝅄˚--»* .doxear *<mension>*
*│ᜓ ݊ ᜒ𝅄˚--»* .facto
*│ᜓ ݊ ᜒ𝅄˚--»* .reto
*│ᜓ ݊ ᜒ𝅄˚--»* .verdad
*│ᜓ ݊ ᜒ𝅄˚--»* .prostituto *<@tag>*
*│ᜓ ݊ ᜒ𝅄˚--»* .formarpareja
*│ᜓ ݊ ᜒ𝅄˚--»* .formarpareja5
*│ᜓ ݊ ᜒ𝅄˚--»* .huevo *@user*
*│ᜓ ݊ ᜒ𝅄˚--»* .chupalo *<mencion>*
*│ᜓ ݊ ᜒ𝅄˚--»* .aplauso *<mencion>*
*│ᜓ ݊ ᜒ𝅄˚--»* .marron *<mencion>*
*│ᜓ ݊ ᜒ𝅄˚--»* .suicidar
*│ᜓ ݊ ᜒ𝅄˚--»* .iqtest <mencion>*
*│ᜓ ݊ ᜒ𝅄˚--»* .meme
*│ᜓ ݊ ᜒ𝅄˚--»* .morse
*│ᜓ ݊ ᜒ𝅄˚--»* .nombreninja *<texto>*
*│ᜓ ݊ ᜒ𝅄˚--»* .paja
*│ᜓ ݊ ᜒ𝅄˚--»* .personalidad *<mencion>*
*│ᜓ ݊ ᜒ𝅄˚--»* .pregunta 
*│ᜓ ݊ ᜒ𝅄˚--»* .zodiac *2002 02 25*
*│ᜓ ݊ ᜒ𝅄˚--»* .ship 
*│ᜓ ݊ ᜒ𝅄˚--»* .sorte 
*│ᜓ ݊ ᜒ𝅄˚--»* .top *[texto]*
*│ᜓ ݊ ᜒ𝅄˚--»* .formartrio *<mencion>*
*│ᜓ ݊ ᜒ𝅄˚--»* .tt
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫ғ۪۫ʀ۪۫ᴀ۪۫ᴄ۪۫ᴇ۪۫s۪۫- 𓍢ִ🍅͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .piropo
*│ᜓ ݊ ᜒ𝅄˚--»* .frase
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫ᴊ۪۫ᴜ۪۫ᴇ۪۫ɢ۪۫ᴏ۪۫s۪۫- 𓍢ִ🧙‍♂️͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .ahorcado
*│ᜓ ݊ ᜒ𝅄˚--»* .delxo
*│ᜓ ݊ ᜒ𝅄˚--»* .genio *<pregunta>*
*│ᜓ ݊ ᜒ𝅄˚--»* .math *<mode>*
*│ᜓ ݊ ᜒ𝅄˚--»* .ppt *texto*
*│ᜓ ݊ ᜒ𝅄˚--»* .pvp
*│ᜓ ݊ ᜒ𝅄˚--»* .sopa
*│ᜓ ݊ ᜒ𝅄˚--»* .acertijo
*│ᜓ ݊ ᜒ𝅄˚--»* .ttt *texto*
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫ᴀ۪۫ɴ۪۫ɪ۪۫ᴍ۪۫ᴇ۪۫- 𓍢ִ🥧͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .angry/enojado @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .bath/bañarse @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .bite/morder @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .bleh/lengua @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .blush/sonrojarse @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .bored/aburrido @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .nights/noches
*│ᜓ ݊ ᜒ𝅄˚--»* .dias/days
*│ᜓ ݊ ᜒ𝅄˚--»* .coffe/cafe @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .cry/llorar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .cuddle/acurrucarse @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .dance/bailar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .drunk/borracho @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .eat/comer @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .messi
*│ᜓ ݊ ᜒ𝅄˚--»* .cr7
*│ᜓ ݊ ᜒ𝅄˚--»* .facepalm/palmada @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .happy/feliz @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .hello/hola @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .hug/abrazar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .kill/matar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .kiss2/besar2 @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .kiss/besar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .laugh/reirse @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .lick/lamer @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .love2/enamorada @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .patt/acariciar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .poke/picar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .pout/pucheros @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .ppcouple
*│ᜓ ݊ ᜒ𝅄˚--»* .preg/embarazar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .punch/golpear @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .run/correr @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .sad/triste @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .scared/asustada @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .seduce/seducir @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .shy/timida @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .slap/bofetada @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .sleep/dormir @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .smoke/fumar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .think/pensando @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .undress/encuerar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .waifu
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫ᴘ۪۫ᴇ۪۫ʀ۪۫ғ۪۫ɪ۪۫ʟ۪۫- 𓍢ִ🍯͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .reg
*│ᜓ ݊ ᜒ𝅄˚--»* .unreg
*│ᜓ ݊ ᜒ𝅄˚--»* .profile
*│ᜓ ݊ ᜒ𝅄˚--»* .perfildates
*│ᜓ ݊ ᜒ𝅄˚--»* .marry *[mension / etiquetar]*
*│ᜓ ݊ ᜒ𝅄˚--»* .divorce
*│ᜓ ݊ ᜒ𝅄˚--»* .setgenre *<text>*
*│ᜓ ݊ ᜒ𝅄˚--»* .delgenre
*│ᜓ ݊ ᜒ𝅄˚--»* .setbirth *<text>*
*│ᜓ ݊ ᜒ𝅄˚--»* .delbirth
*│ᜓ ݊ ᜒ𝅄˚--»* .setdesc *<text>*
*│ᜓ ݊ ᜒ𝅄˚--»* .deldesc
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫ʟ۪۫ᴏ۪۫ɢ۪۫ᴏ۪۫s۪۫- 𓍢ִ🍬͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .glitchtext
*│ᜓ ݊ ᜒ𝅄˚--»* .narutotext
*│ᜓ ݊ ᜒ𝅄˚--»* .dragonball
*│ᜓ ݊ ᜒ𝅄˚--»* .neonlight
*│ᜓ ݊ ᜒ𝅄˚--»* .pubglogo
*│ᜓ ݊ ᜒ𝅄˚--»* .harrypotter
*│ᜓ ݊ ᜒ𝅄˚--»* .marvel
*│ᜓ ݊ ᜒ𝅄˚--»* .pixelglitch
*│ᜓ ݊ ᜒ𝅄˚--»* .amongustext
*│ᜓ ݊ ᜒ𝅄˚--»* .writetext
*│ᜓ ݊ ᜒ𝅄˚--»* .advancedglow
*│ᜓ ݊ ᜒ𝅄˚--»* .typographytext
*│ᜓ ݊ ᜒ𝅄˚--»* .neonglitch
*│ᜓ ݊ ᜒ𝅄˚--»* .flagtext
*│ᜓ ݊ ᜒ𝅄˚--»* .flag3dtext
*│ᜓ ݊ ᜒ𝅄˚--»* .deletingtext
*│ᜓ ݊ ᜒ𝅄˚--»* .blackpinkstyle
*│ᜓ ݊ ᜒ𝅄˚--»* .glowingtext
*│ᜓ ݊ ᜒ𝅄˚--»* .underwatertext
*│ᜓ ݊ ᜒ𝅄˚--»* .logomaker
*│ᜓ ݊ ᜒ𝅄˚--»* .cartoonstyle
*│ᜓ ݊ ᜒ𝅄˚--»* .papercutstyle
*│ᜓ ݊ ᜒ𝅄˚--»* .watercolortext
*│ᜓ ݊ ᜒ𝅄˚--»* .effectclouds
*│ᜓ ݊ ᜒ𝅄˚--»* .blackpinklogo
*│ᜓ ݊ ᜒ𝅄˚--»* .gradienttext
*│ᜓ ݊ ᜒ𝅄˚--»* .summerbeach
*│ᜓ ݊ ᜒ𝅄˚--»* .luxurygold
*│ᜓ ݊ ᜒ𝅄˚--»* .multicoloredneon
*│ᜓ ݊ ᜒ𝅄˚--»* .sandsummer
*│ᜓ ݊ ᜒ𝅄˚--»* .galaxywallpaper
*│ᜓ ݊ ᜒ𝅄˚--»* .style
*│ᜓ ݊ ᜒ𝅄˚--»* .makingneon
*│ᜓ ݊ ᜒ𝅄˚--»* .royaltext
*│ᜓ ݊ ᜒ𝅄˚--»* .freecreate
*│ᜓ ݊ ᜒ𝅄˚--»* .galaxystyle
*│ᜓ ݊ ᜒ𝅄˚--»* .rainytext
*│ᜓ ݊ ᜒ𝅄˚--»* .graffititext
*│ᜓ ݊ ᜒ𝅄˚--»* .colorfulltext
*│ᜓ ݊ ᜒ𝅄˚--»* .equalizertext
*│ᜓ ݊ ᜒ𝅄˚--»* .angeltxt
*│ᜓ ݊ ᜒ𝅄˚--»* .starlight
*│ᜓ ݊ ᜒ𝅄˚--»* .steel
*│ᜓ ݊ ᜒ𝅄˚--»* .neoncity
*│ᜓ ݊ ᜒ𝅄˚--»* .cloudsky
*│ᜓ ݊ ᜒ𝅄˚--»* .matrix
*│ᜓ ݊ ᜒ𝅄˚--»* .minion
*│ᜓ ݊ ᜒ𝅄˚--»* .papercut3d
*│ᜓ ݊ ᜒ𝅄˚--»* .firetext
*│ᜓ ݊ ᜒ𝅄˚--»* .icecold
*│ᜓ ݊ ᜒ𝅄˚--»* .rainbowtext
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ -۪۫s۪۫ᴛ۪۫ᴀ۪۫ʟ۪۫ᴋ۪۫- 𓍢ִ✈️͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .tiktokstalk *<usuario>*
*│ᜓ ݊ ᜒ𝅄˚--»* .kwaistalk *<usuario>*
*│ᜓ ݊ ᜒ𝅄˚--»* .telegramstalk *<nombre_usuario>*
*│ᜓ ݊ ᜒ𝅄˚--»* .youtubestalk *<nombre de usuario>*
*│ᜓ ݊ ᜒ𝅄˚--»* .instagramstalk *<usuario>*
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ᴘʀᴇᴍɪᴜᴍ 𓍢ִ🏝️͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .comprarpremium
*│ᜓ ݊ ᜒ𝅄˚--»* .premium
*│ᜓ ݊ ᜒ𝅄˚--»* .vip
*│ᜓ ݊ ᜒ𝅄˚--»* .spamwa <number>|<mesage>|<no of messages>
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ʀᴘɢ 𓍢ִ🎑͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .aventura
*│ᜓ ݊ ᜒ𝅄˚--»* .baltop
*│ᜓ ݊ ᜒ𝅄˚--»* .bank / bal
*│ᜓ ݊ ᜒ𝅄˚--»* .cazar 
*│ᜓ ݊ ᜒ𝅄˚--»* .codigo *<cantida de coins>*
*│ᜓ ݊ ᜒ𝅄˚--»* .canjear *<código>*
*│ᜓ ݊ ᜒ𝅄˚--»* .cartera
*│ᜓ ݊ ᜒ𝅄˚--»* .apostar *<cantidad>*
*│ᜓ ݊ ᜒ𝅄˚--»* .cf
*│ᜓ ݊ ᜒ𝅄˚--»* .cofre
*│ᜓ ݊ ᜒ𝅄˚--»* .crimen
*│ᜓ ݊ ᜒ𝅄˚--»* .daily
*│ᜓ ݊ ᜒ𝅄˚--»* .depositar 
*│ᜓ ݊ ᜒ𝅄˚--»* .explorar
*│ᜓ ݊ ᜒ𝅄˚--»* .gremio
*│ᜓ ݊ ᜒ𝅄˚--»* .regalo
*│ᜓ ݊ ᜒ𝅄˚--»* .halloween
*│ᜓ ݊ ᜒ𝅄˚--»* .heal
*│ᜓ ݊ ᜒ𝅄˚--»* .inventario 
*│ᜓ ݊ ᜒ𝅄˚--»* .mensual
*│ᜓ ݊ ᜒ𝅄˚--»* .mazmorra
*│ᜓ ݊ ᜒ𝅄˚--»* .minar
*│ᜓ ݊ ᜒ𝅄˚--»* .navidad
*│ᜓ ݊ ᜒ𝅄˚--»* .retirar
*│ᜓ ݊ ᜒ𝅄˚--»* .robar
*│ᜓ ݊ ᜒ𝅄˚--»* .robarxp
*│ᜓ ݊ ᜒ𝅄˚--»* .ruleta *<cantidad> <color>*
*│ᜓ ݊ ᜒ𝅄˚--»* .buyall
*│ᜓ ݊ ᜒ𝅄˚--»* .buy
*│ᜓ ݊ ᜒ𝅄˚--»* .protituirse
*│ᜓ ݊ ᜒ𝅄˚--»* .work
*│ᜓ ݊ ᜒ𝅄˚--»* .pay / transfer 
*│ᜓ ݊ ᜒ𝅄˚--»* .semanal
*│ᜓ ݊ ᜒ𝅄˚--»* .levelup
*│ᜓ ݊ ᜒ𝅄˚--»* .lvl @user
*│ᜓ ݊ ᜒ𝅄˚--»* .slot *<apuesta>*
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ɢᴀᴄʜᴀ 𓍢ִ🎁͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .rw
*│ᜓ ݊ ᜒ𝅄˚--»* .reclamar 
*│ᜓ ݊ ᜒ𝅄˚--»* .harem
*│ᜓ ݊ ᜒ𝅄˚--»* .waifuimage
*│ᜓ ݊ ᜒ𝅄˚--»* .charinfo
*│ᜓ ݊ ᜒ𝅄˚--»* .topwaifus *[pagina]*
*│ᜓ ݊ ᜒ𝅄˚--»* .regalar *<nombre del personaje> @usuario*
*│ᜓ ݊ ᜒ𝅄˚--»* .vote *<personaje>*
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ sᴛɢɪᴄᴋᴇʀs 𓍢ִ🧸͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .sticker *<img>*
*│ᜓ ݊ ᜒ𝅄˚--»* .sticker *<url>*
*│ᜓ ݊ ᜒ𝅄˚--»* .setmeta
*│ᜓ ݊ ᜒ𝅄˚--»* .delmeta
*│ᜓ ݊ ᜒ𝅄˚--»* .bratvid *<texto>*
*│ᜓ ݊ ᜒ𝅄˚--»* .pfp *@user*
*│ᜓ ݊ ᜒ𝅄˚--»* .qc
*│ᜓ ݊ ᜒ𝅄˚--»* .toimg *(reply)*
*│ᜓ ݊ ᜒ𝅄˚--»* .brat
*│ᜓ ݊ ᜒ𝅄˚--»* .bratvid *<texto>*
*│ᜓ ݊ ᜒ𝅄˚--»* .emojimix  *<emoji+emoji>*
*│ᜓ ݊ ᜒ𝅄˚--»* .wm *<packname>|<author>*
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ᴛᴏᴏʟs 𓍢ִ📚͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .letra *<texto>*
*│ᜓ ݊ ᜒ𝅄˚--»* .fake
*│ᜓ ݊ ᜒ𝅄˚--»* .hd
*│ᜓ ݊ ᜒ𝅄˚--»* .detectar
*│ᜓ ݊ ᜒ𝅄˚--»* .clima *<ciudad/país>*
*│ᜓ ݊ ᜒ𝅄˚--»* .join
*│ᜓ ݊ ᜒ𝅄˚--»* .nuevafotochannel
*│ᜓ ݊ ᜒ𝅄˚--»* .nosilenciarcanal
*│ᜓ ݊ ᜒ𝅄˚--»* .silenciarcanal
*│ᜓ ݊ ᜒ𝅄˚--»* .noseguircanal
*│ᜓ ݊ ᜒ𝅄˚--»* .seguircanal 
*│ᜓ ݊ ᜒ𝅄˚--»* .avisoschannel 
*│ᜓ ݊ ᜒ𝅄˚--»* .resiviravisos 
*│ᜓ ݊ ᜒ𝅄˚--»* .inspect 
*│ᜓ ݊ ᜒ𝅄˚--»* .inspeccionar 
*│ᜓ ݊ ᜒ𝅄˚--»* .eliminarfotochannel 
*│ᜓ ݊ ᜒ𝅄˚--»* .reactioneschannel 
*│ᜓ ݊ ᜒ𝅄˚--»* .reaccioneschannel 
*│ᜓ ݊ ᜒ𝅄˚--»* .nuevonombrecanal 
*│ᜓ ݊ ᜒ𝅄˚--»* .nuevadescchannel
*│ᜓ ݊ ᜒ𝅄˚--»* .setavatar
*│ᜓ ݊ ᜒ𝅄˚--»* .setbanner
*│ᜓ ݊ ᜒ𝅄˚--»* .seticono
*│ᜓ ݊ ᜒ𝅄˚--»* .setmoneda
*│ᜓ ݊ ᜒ𝅄˚--»* .setname nombre1/nombre2
*│ᜓ ݊ ᜒ𝅄˚--»* .cal *<ecuacion>*
*│ᜓ ݊ ᜒ𝅄˚--»* .horario
*│ᜓ ݊ ᜒ𝅄˚--»* .read
*│ᜓ ݊ ᜒ𝅄˚--»* .traducir <idoma>
*│ᜓ ݊ ᜒ𝅄˚--»* .say
*│ᜓ ݊ ᜒ𝅄˚--»* .whatmusic <audio/video>
*│ᜓ ݊ ᜒ𝅄˚--»* .paisinfo
*│ᜓ ݊ ᜒ𝅄˚--»* .ssweb
*│ᜓ ݊ ᜒ𝅄˚--»* .tamaño *<cantidad>*
*│ᜓ ݊ ᜒ𝅄˚--»* .document *<audio/video>*
*│ᜓ ݊ ᜒ𝅄˚--»* .translate
*│ᜓ ݊ ᜒ𝅄˚--»* .up
*│ᜓ ݊ ᜒ𝅄˚--»* .enhance
*│ᜓ ݊ ᜒ𝅄˚--»* .wikipedia
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ᴏɴ / ᴏғғ 𓍢ִ🔑͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .welcome
*│ᜓ ݊ ᜒ𝅄˚--»* .bienvenida
*│ᜓ ݊ ᜒ𝅄˚--»* .antiprivado
*│ᜓ ݊ ᜒ𝅄˚--»* .antiprivate
*│ᜓ ݊ ᜒ𝅄˚--»* .restrict
*│ᜓ ݊ ᜒ𝅄˚--»* .restringir
*│ᜓ ݊ ᜒ𝅄˚--»* .antibot
*│ᜓ ݊ ᜒ𝅄˚--»* .antibots
*│ᜓ ݊ ᜒ𝅄˚--»* .autoaceptar
*│ᜓ ݊ ᜒ𝅄˚--»* .aceptarauto
*│ᜓ ݊ ᜒ𝅄˚--»* .autorechazar
*│ᜓ ݊ ᜒ𝅄˚--»* .rechazarauto
*│ᜓ ݊ ᜒ𝅄˚--»* .autoresponder
*│ᜓ ݊ ᜒ𝅄˚--»* .autorespond
*│ᜓ ݊ ᜒ𝅄˚--»* .antisubbots
*│ᜓ ݊ ᜒ𝅄˚--»* .antibot2
*│ᜓ ݊ ᜒ𝅄˚--»* .modoadmin
*│ᜓ ݊ ᜒ𝅄˚--»* .soloadmin
*│ᜓ ݊ ᜒ𝅄˚--»* .reaction
*│ᜓ ݊ ᜒ𝅄˚--»* .reaccion
*│ᜓ ݊ ᜒ𝅄˚--»* .nsfw
*│ᜓ ݊ ᜒ𝅄˚--»* .modohorny
*│ᜓ ݊ ᜒ𝅄˚--»* .antispam
*│ᜓ ݊ ᜒ𝅄˚--»* .jadibotmd
*│ᜓ ݊ ᜒ𝅄˚--»* .modejadibot
*│ᜓ ݊ ᜒ𝅄˚--»* .subbots
*│ᜓ ݊ ᜒ𝅄˚--»* .detect
*│ᜓ ݊ ᜒ𝅄˚--»* .avisos
*│ᜓ ݊ ᜒ𝅄˚--»* .antilink
*│ᜓ ݊ ᜒ𝅄˚--»* .audios
*│ᜓ ݊ ᜒ𝅄˚--»* .antiver
*│ᜓ ݊ ᜒ𝅄˚--»* .antiocultar
*│ᜓ ݊ ᜒ𝅄˚--»* .antilink2
*│ᜓ ݊ ᜒ𝅄˚--»* .antiarabe
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ɢʀᴜᴘᴏs 𓍢ִ🧪͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .admins
*│ᜓ ݊ ᜒ𝅄˚--»* .agregar
*│ᜓ ݊ ᜒ𝅄˚--»* .advertencia <@user>
*│ᜓ ݊ ᜒ𝅄˚--»* .delwarn
*│ᜓ ݊ ᜒ𝅄˚--»* .grupo abrir / cerrar
*│ᜓ ݊ ᜒ𝅄˚--»* .group open / close
*│ᜓ ݊ ᜒ𝅄˚--»* .delete
*│ᜓ ݊ ᜒ𝅄˚--»* .demote <@user>
*│ᜓ ݊ ᜒ𝅄˚--»* .promote <@user>
*│ᜓ ݊ ᜒ𝅄˚--»* .encuesta <text|text2>
*│ᜓ ݊ ᜒ𝅄˚--»* .kickfantasmas
*│ᜓ ݊ ᜒ𝅄˚--»* .gpbanner
*│ᜓ ݊ ᜒ𝅄˚--»* .gpdesc
*│ᜓ ݊ ᜒ𝅄˚--»* .gpname
*│ᜓ ݊ ᜒ𝅄˚--»* .hidetag
*│ᜓ ݊ ᜒ𝅄˚--»* .infogrupo
*│ᜓ ݊ ᜒ𝅄˚--»* .kickall
*│ᜓ ݊ ᜒ𝅄˚--»* .kick <@user>
*│ᜓ ݊ ᜒ𝅄˚--»* .kicknum
*│ᜓ ݊ ᜒ𝅄˚--»* .listonline
*│ᜓ ݊ ᜒ𝅄˚--»* .link
*│ᜓ ݊ ᜒ𝅄˚--»* .listadv
*│ᜓ ݊ ᜒ𝅄˚--»* .mute
*│ᜓ ݊ ᜒ𝅄˚--»* .unmute
*│ᜓ ݊ ᜒ𝅄˚--»* .config
*│ᜓ ݊ ᜒ𝅄˚--»* .restablecer
*│ᜓ ݊ ᜒ𝅄˚--»* .setbye
*│ᜓ ݊ ᜒ𝅄˚--»* .setwelcome
*│ᜓ ݊ ᜒ𝅄˚--»* .testwelcome
*│ᜓ ݊ ᜒ𝅄˚--»* .setemoji <emoji>
*│ᜓ ݊ ᜒ𝅄˚--»* .invocar *<mensaje opcional>*
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ɴsғᴡ 𓍢ִ💉͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .sixnine/69 @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .anal/culiar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .blowjob/mamada @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .boobjob/rusa @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .cum/leche @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .fap/paja @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .follar @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .fuck/coger @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .footjob/pies @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .fuck2/coger2 @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .grabboobs/agarrartetas @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .grop/manosear @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .penetrar @user
*│ᜓ ݊ ᜒ𝅄˚--»* .lickpussy/coño @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .r34 <tag>
*│ᜓ ݊ ᜒ𝅄˚--»* .sexo/sex @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .spank/nalgada @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .suckboobs/chupartetas @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .violar/perra @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .lesbianas/tijeras @tag
*│ᜓ ݊ ᜒ𝅄˚--»* .pack
*│ᜓ ݊ ᜒ𝅄˚--»* .tetas
*│ᜓ ݊ ᜒ𝅄˚--»* .undress/encuerar
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ᴏᴡɴᴇʀ 𓍢ִ🍎͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .addcoins *<@user>*
*│ᜓ ݊ ᜒ𝅄˚--»* .addowner / delowner
*│ᜓ ݊ ᜒ𝅄˚--»* .addprem [@user] <days>
*│ᜓ ݊ ᜒ𝅄˚--»* .añadirxp
*│ᜓ ݊ ᜒ𝅄˚--»* .copia
*│ᜓ ݊ ᜒ𝅄˚--»* .autoadmin
*│ᜓ ݊ ᜒ𝅄˚--»* .banuser *@tag <razón>*
*│ᜓ ݊ ᜒ𝅄˚--»* .banlist
*│ᜓ ݊ ᜒ𝅄˚--»* .bcgc
*│ᜓ ݊ ᜒ𝅄˚--»* .block / unblock
*│ᜓ ݊ ᜒ𝅄˚--»* .blocklist
*│ᜓ ݊ ᜒ𝅄˚--»* .chetar *@user* / *<número>*
*│ᜓ ݊ ᜒ𝅄˚--»* .cleartmp
*│ᜓ ݊ ᜒ𝅄˚--»* .creargc
*│ᜓ ݊ ᜒ𝅄˚--»* .deletefile
*│ᜓ ݊ ᜒ𝅄˚--»* .delprem <@user>
*│ᜓ ݊ ᜒ𝅄˚--»* .deschetar *@user* / *<número>*
*│ᜓ ݊ ᜒ𝅄˚--»* .dsowner
*│ᜓ ݊ ᜒ𝅄˚--»* =>
*│ᜓ ݊ ᜒ𝅄˚--»* >
*│ᜓ ݊ ᜒ𝅄˚--»* .fetch
*│ᜓ ݊ ᜒ𝅄˚--»* .getplugin
*│ᜓ ݊ ᜒ𝅄˚--»* .grouplist
*│ᜓ ݊ ᜒ𝅄˚--»* .salir
*│ᜓ ݊ ᜒ𝅄˚--»* .let
*│ᜓ ݊ ᜒ𝅄˚--»* .setppbot 
*│ᜓ ݊ ᜒ𝅄˚--»* .prefix [prefix]
*│ᜓ ݊ ᜒ𝅄˚--»* .quitarcoin *<@user>* / all
*│ᜓ ݊ ᜒ𝅄˚--»* .quitarxp *<@user>*
*│ᜓ ݊ ᜒ𝅄˚--»* .resetprefix
*│ᜓ ݊ ᜒ𝅄˚--»* .restablecerdatos
*│ᜓ ݊ ᜒ𝅄˚--»* .restart / reiniciar
*│ᜓ ݊ ᜒ𝅄˚--»* .reunion
*│ᜓ ݊ ᜒ𝅄˚--»* .savefile <ruta/nombre>
*│ᜓ ݊ ᜒ𝅄˚--»* .saveplugin
*│ᜓ ݊ ᜒ𝅄˚--»* .setcmd *<texto>*
*│ᜓ ݊ ᜒ𝅄˚--»* .delcmd
*│ᜓ ݊ ᜒ𝅄˚--»* .listcmd
*│ᜓ ݊ ᜒ𝅄˚--»* .setimage
*│ᜓ ݊ ᜒ𝅄˚--»* .setstatus <teks>
*│ᜓ ݊ ᜒ𝅄˚--»* .spam2
*│ᜓ ݊ ᜒ𝅄˚--»* .unbanuser <@tag>
*│ᜓ ݊ ᜒ𝅄˚--»* .ip <alamat ip>
*│ᜓ ݊ ᜒ𝅄˚--»* .update / fix
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ɪɴᴛᴇʟɪɢᴇɴᴄɪᴀs 𓍢ִ🥥͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .dalle
*│ᜓ ݊ ᜒ𝅄˚--»* .demo *<texto>*
*│ᜓ ݊ ᜒ𝅄˚--»* .flux *<texto>*
*│ᜓ ݊ ᜒ𝅄˚--»* .gemini
*│ᜓ ݊ ᜒ𝅄˚--»* .ia
*│ᜓ ݊ ᜒ𝅄˚--»* .llama
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


✮ ≽ܫ≼ ᴄᴏɴᴠᴇʀᴛs 𓍢ִ🍧͙֒✧˚ ༘ ⋆｡
*│ᜓ ݊ ᜒ𝅄˚--»* .tourl <imagen>
*│ᜓ ݊ ᜒ𝅄˚--»* .catbox
*│ᜓ ݊ ᜒ𝅄˚--»* .tourl3
*│ᜓ ݊ ᜒ𝅄˚--»* .togifaud
*│ᜓ ݊ ᜒ𝅄˚--»* .tomp3
*│ᜓ ݊ ᜒ𝅄˚--»* .tovideo
*│ᜓ ݊ ᜒ𝅄˚--»* .tts <lang> <teks>
*│ᜓ ݊ ᜒ𝅄˚--»* .tts2
*╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙*


.•° ✿ °•..•° ✿ °•..•° ✿ °•..•° ✿ °•..•° ✿ °•..•° ✿ °•..•° ✿ °•.
   🚀 *𝗖𝗥𝗘𝗔 𝗨𝗡 𝗦𝗨𝗕𝗕𝗢𝗧 𝗘𝗡 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦*
> 🌷 ➊ *#qr* – Escanea un 𝖢𝗈𝖽𝗂𝗀𝗈 𝗤𝗥  
> 🔐 ➋ *#code* – Usa un 𝖢𝗈𝖽𝗂𝗀𝗈 de 8 dígitos
°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°°•. ✿ .•°`.trim()
    await m.react('🌱')
    await conn.sendMessage(m.chat, {
      video: { url: video },
      gifPlayback: true,
      caption: menuText,
      footer: club,
      /*
      document: docBuffer,
      fileName: `🌱 Rin`,
      mimetype: 'image/•PNG',
      caption: menuText,
      footer: club,
      jpegThumbnail: thumb,*/
      buttons: [
        { buttonId: `.code`, buttonText: { displayText: "🌱 s ᴇ ʀ ʙ ᴏ ᴛ" }, type: 1 },
        { buttonId: `.owner`, buttonText: { displayText: "🍂 ᴏ ᴡ ɴ ᴇ ʀ" }, type: 1 }
      ],
      headerType: 4,
      contextInfo: {      
      jpegThumbnail: icono,
        mentionedJid: [m.sender],
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: channelRD.id,
          serverMessageId: 100,
          newsletterName: channelRD.name
        },
        externalAdReply: {
          title: packname,
          body: dev,
          thumbnailUrl: 'https://files.catbox.moe/ove7tq.jpg',
          sourceUrl: redes,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: shadow })

  } catch (e) {
    console.error(e)
    await conn.sendMessage(m.chat, {
      text: `✘ Error al enviar el menú: ${e.message}`,
      mentions: [m.sender]
    }, { quoted: m })
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help', 'allmenú', 'allmenu', 'menucompleto']
handler.register = true
export default handler

function clockString(ms) {
  let seconds = Math.floor((ms / 1000) % 60)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
  return `${hours}ʜ ${minutes}ᴍ ${seconds}s`
}

function ucapan() {
  const time = moment.tz('America/bogota').format('HH')
  let res = "🌷 ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs 🌙"
  if (time >= 5 && time < 12) res = "🍂 ʙᴜᴇɴᴏs ᴅɪᴀs ☀️"
  else if (time >= 12 && time < 18) res = "🌱 ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs 🌤️"
  else if (time >= 18) res = "🐥 ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs 🌙"
  return res
}
