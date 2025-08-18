let handler = async (m, { conn, usedPrefix }) => {
  const sections = [
    {
      title: "📂 𝗠𝗘𝗡𝗨𝗦 𝗗𝗜𝗦𝗣𝗢𝗡𝗜𝗕𝗟𝗘𝗦",
      rows: [
        { 
          title: "📥 Mᴇɴᴜ [ 𝗗𝗟 ]",
          description: "🎧 ᴅᴇsᴄᴀʀɢᴀ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴅᴇ ʟᴀs ᴘʀɪɴᴄɪᴘᴀʟᴇs ʀᴇᴅᴇs: ʏᴏᴜᴛᴜʙᴇ, ғᴀᴄᴇʙᴏᴏᴋ, sᴘᴏᴛɪғʏ, ɪɢ, ᴇᴛᴄ.",
          rowId: `${usedPrefix}menudl`
        },       
        {
          title: "⛏️ Mᴇɴᴜ [ 𝗥𝗣𝗚 ]", 
          description: "🎮 ᴄʀᴇᴀ ᴛᴜ ᴀᴠᴇɴᴛᴜʀᴀ, ʀᴇᴄᴏɢᴇ ʀᴇᴄᴜʀsᴏs, ɢᴀɴᴀ ᴏʀᴏ ʏ ᴅᴏᴍɪɴᴀ ᴇʟ ᴍᴜɴᴅᴏ ʀᴘɢ ⚔️.", 
          rowId: `${usedPrefix}menurpg` 
        }
      ]
    }
  ]

  const listMessage = {
    text: `╭━━━〔 𝗠𝗘𝗡𝗨𝗦 𝗗𝗜𝗦𝗣𝗢𝗡𝗜𝗕𝗟𝗘𝗦 〕━━⬣
┃  ✦ 𝗘𝗹𝗶𝗴𝗲 𝘂𝗻𝗮 𝗼𝗽𝗰𝗶𝗼́𝗻 𝗱𝗲𝗹 𝗺𝗲𝗻𝘂́ 👇
╰━━━━━━━━━━━━━━━━⬣`,
    footer: "☘️ Rin Itoshi Bot",
    title: "「 📜 𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟 」",
    buttonText: "📂 𝗔𝗕𝗥𝗜𝗥 𝗠𝗘𝗡𝗨𝗦",
    sections
  }

  await conn.sendMessage(m.chat, listMessage, { quoted: m })
  await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } }) // reacción
}

handler.command = ['menutest']
export default handler