export async function before(m, { conn }) {
  if (!m.text || !global.prefix.test(m.text)) return;
  const usedPrefix = global.prefix.exec(m.text)[0];
  const command = m.text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase();
  
  const thumbRes = await fetch('https://tinyurl.com/ymzqacfy');
  const thumbBuffer = await thumbRes.buffer();
  const fkontak = {
        key: {
           participants: "0@s.whatsapp.net",
           remoteJid: "status@broadcast",
           fromMe: false,
           id: "Halo"
        },
        message: {
            locationMessage: {
                name: `🦈 ᴇʀʀᴏʀ ᴅᴇ ɴᴀᴅᴏ ❔`,
                jpegThumbnail: thumbBuffer
            }
        },
        participant: "0@s.whatsapp.net"
  };
  if (!command || command === 'bot') return;
  const isValidCommand = (command, plugins) => {
    for (let plugin of Object.values(plugins)) {
      const cmdList = Array.isArray(plugin.command) ? plugin.command : [plugin.command];
      if (cmdList.includes(command)) return true;
    }
    return false;
  };
  if (isValidCommand(command, global.plugins)) {
    let chat = global.db.data.chats[m.chat];
    let user = global.db.data.users[m.sender];
    if (chat?.isBanned) {
      const avisoDesactivado = `╭─⭑❨ 🦈 𝐆𝐔𝐑𝐀 𝐃𝐔𝐑𝐌𝐈𝐄𝐍𝐃𝐎 ❩⭑─╮
│ 💤 *Gawr Gura Ultra* 𝑒𝑠𝑡𝑎 *durmiendo* 𝑒𝑛 𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜.
│ 🌊 𝐸𝑛 𝑒𝑙 𝑜𝑐é𝑎𝑛𝑜 𝑑𝑒 𝑙𝑜𝑠 𝑠𝑢𝑒ñ𝑜𝑠, 𝑛𝑜 𝑝𝑢𝑒𝑑𝑜 𝑢𝑠𝑎𝑟 ℎ𝑎𝑏𝑖𝑙𝑖𝑑𝑎𝑑𝑒𝑠.
│ 🐟 𝐒𝐨𝐥𝐨 𝐮𝐧 *administrador* 𝐩𝐮𝐞𝐝𝐞 𝐝𝐞𝐬𝐩𝐞𝐫𝐭𝐚𝐫𝐦𝐞.
│ ✅ 𝐔𝐬𝐚: *${usedPrefix}bot on*
╰────────────────────────╯`;
      await conn.sendMessage(m.chat, {
        text: avisoDesactivado,
        mentions: [m.sender],
        contextInfo: {
          externalAdReply: {
            title: '🦈 Yo Soy Yo 🌊',
            body: '💙◌*̥₊ ɢᴀᴡʀ ɢᴜʀᴀ ᴜʟᴛʀᴀ ◌❐🦈༉',
            thumbnailUrl: 'https://files.catbox.moe/mez710.jpg',
            sourceUrl: 'https://github.com/Yuji-XDev',
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: fkontak });
      return;
    }
    if (!user.commands) user.commands = 0;
    user.commands += 1;
    return;
  }
  //await m.react('💔');
  const mensajesNoEncontrado = [
    `╭━〔 🦈 𝐇𝐀𝐁𝐈𝐋𝐈𝐃𝐀𝐃 𝐃𝐄𝐒𝐂𝐎𝐍𝐎𝐂𝐈𝐃𝐀 〕━⬣
┃ ✦ La habilidad *"${command}"* no está en mi repertorio.
┃ ✦ Océano de opciones: *${usedPrefix}menu*
╰━━━━━━━━━━━━━━━━━━━━━⬣`,
    `─❖〔 🌊 𝐄𝐑𝐑𝐎𝐑 𝐃𝐄 𝐍𝐀𝐃𝐎 〕❖─
 ✧ *"${command}"* no forma parte de mis corrientes.
 ✧ Navega por: *${usedPrefix}menu*`,
    `💙 𝐇𝐀𝐁𝐈𝐋𝐈𝐃𝐀𝐃 𝐍𝐎 𝐀𝐏𝐑𝐄𝐍𝐃𝐈𝐃𝐀 💙
🐟 *"${command}"* no está en mi escuela de trucos.
🦈 Usa *${usedPrefix}menu* para ver mis habilidades.`,
    `🌊 La habilidad *"${command}"* se perdió en el océano.
📖 a! Consulta mis trucos: *${usedPrefix}menu*`,
    `─〔 ⚓ 𝐇𝐀𝐁𝐈𝐋𝐈𝐃𝐀𝐃 𝐍𝐎 𝐍𝐀𝐃𝐀𝐃𝐀 〕─
🐠 *"${command}"* no flota en mis aguas.
💎 Menú submarino: *${usedPrefix}menu*`,
    `❌ Habilidad: *"${command}"* no aprendida.
🦈 a! Usa: *${usedPrefix}menu* para ver todas mis habilidades de tiburón.`
  ];
  const texto = mensajesNoEncontrado[Math.floor(Math.random() * mensajesNoEncontrado.length)];
  const imgurl = logo;
  await conn.sendMessage(m.chat, {
    text: texto,
    mentions: [m.sender],
    contextInfo: {
      externalAdReply: {
        title: '🦈 Yo Soy Yo 🌊',
        body: '💙◌*̥₊ ɢᴀᴡʀ ɢᴜʀᴀ ᴜʟᴛʀᴀ ◌❐🦈༉',
        thumbnailUrl: imgurl,
        sourceUrl: 'https://instagram.com',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: fkontak });
}
