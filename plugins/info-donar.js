let media = 'https://files.catbox.moe/f6vksl.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `╭─〔 🦈 𝐆𝐀𝐖𝐑 𝐆𝐔𝐑𝐀 𝐔𝐋𝐓𝐑𝐀 🌊 〕─╮
┃ 💙 ¡𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨, 𝐦𝐞𝐦𝐛𝐫𝐨 𝐝𝐞 𝐦𝐢 𝐞𝐬𝐜𝐮𝐞𝐥𝐚!
┃ 🐟 Este es el reino submarino del tiburón 🌊
┃ 🦈 Explora las profundidades de mis funciones...
┃ 💎 Usa los botones para navegar por mi océano a~
╰──────────────────────⬣`
await conn.sendButton(m.chat, str, `🦈 𝐂𝐑𝐄𝐀𝐃𝐎𝐑: 𝐘𝐨 𝐒𝐨𝐲 𝐘𝐨\n${club}\n\n` + wm, media, [
['🌊 𝗚𝗥𝗨𝗣𝗢𝗦 ~', '.grupos'],
['👤 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 • 𝗢𝗙𝗖', '#owner'],
['🦈 𝗠𝗘𝗡𝗨 • 𝗔𝗟𝗟', '/menu']], null, [
['🌐 𝗚𝗜𝗧𝗛𝗨𝗕', `https://github.com/Andresv27728/GawrGura`]], fkontak)}
handler.help = ['donar', 'shaaark']
handler.tags = ['info']
handler.command = ['donar']
handler.exp = 200
export default handler
