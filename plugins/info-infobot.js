import db from '../lib/database.js'
import { cpus as _cpus, totalmem, freemem, platform, hostname } from 'os'
import speed from 'performance-now'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix }) => {
    let bot = global.db.data.settings[conn.user.jid]
    let totalStats = Object.values(global.db.data.stats).reduce((total, stat) => total + stat.total, 0)
    let totalf = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    let subBots = Object.keys(global.conns).length
    
    let info = ` 🦈｡🌊｡🦈━─〔 🦈 𝐈𝐍𝐅𝐎 𝐆𝐀𝐖𝐑 𝐆𝐔𝐑𝐀 🦈 〕─━🦈｡🌊｡🦈
🔱 ✦ \`ᴘʀᴇꜰɪᴊᴏ ᴅᴇʟ ᴏᴄᴇᴀɴᴏ:\` ${usedPrefix}  
🐟 ✦ \`ʜᴀʙɪʟɪᴅᴀᴅᴇꜱ ᴀᴄᴛɪᴠᴀꜱ:\` ${totalf}  
💎 ✦ \`ᴄᴏᴍᴀɴᴅᴏꜱ ɴᴀᴅᴀᴅᴏꜱ:\` ${toNum(totalStats)} (${totalStats})  
🐠 ✦ \`ᴛɪʙᴜʀᴏɴᴄɪᴛᴏꜱ ᴀᴄᴛɪᴠᴏꜱ:\` ${subBots}  
🦈｡🌊｡🦈━─〔 🌊 𝐀𝐑𝐂𝐀 𝐒𝐔𝐁𝐌𝐀𝐑𝐈𝐍𝐀 🌊 〕─━🦈｡🌊｡🦈
🏝️ ✦ \`ᴘʟᴀᴛᴀꜰᴏʀᴍᴀ ᴀᴄᴜᴀᴛɪᴄᴀ:\` ${platform()}  
⚓ ✦ \`ꜱᴇʀᴠɪᴅᴏʀ ᴍᴀʀɪɴᴏ:\` ${hostname()}  
💧 ✦ \`ᴀɢᴜᴀ ᴜꜱᴀᴅᴀ:\` ${format(totalmem() - freemem())} / ${format(totalmem())}  
🌊 ✦ \`ᴀɢᴜᴀ ʟɪʙʀᴇ:\` ${format(freemem())}  
🦈｡🌊｡🦈━─〔 💙 𝐄𝐒𝐓𝐀𝐃𝐎 𝐀𝐓𝐋𝐀𝐍𝐓𝐈𝐃𝐀 💙 〕─━🦈｡🌊｡🦈
${'```' + Object.keys(process.memoryUsage())
   .map((key) => `🌊 ✦ ${key}: ${format(process.memoryUsage()[key])}`)
   .join('\n') + '```'}
💙 a! ¡Todo nadando perfectamente en mi océano!~ 🦈`
    await conn.sendFile(
        m.chat,
        banner,
        'info.jpg',
        info,
        fkontak,
        false,
        { contextInfo: { mentionedJid: [owner[0][0] + '@s.whatsapp.net'] } }
    )
}
handler.help = ['botinfo',]
handler.tags = ['info']
handler.command = ['info', 'botinfo', 'infobot']
export default handler
function toNum(number) {
    if (number >= 1000 && number < 1000000) {
        return (number / 1000).toFixed(1) + 'k'
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M'
    } else if (number <= -1000 && number > -1000000) {
        return (number / 1000).toFixed(1) + 'k'
    } else if (number <= -1000000) {
        return (number / 1000000).toFixed(1) + 'M'
    } else {
        return number.toString()
    }
}
