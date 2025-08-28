import axios from 'axios'
import moment from 'moment-timezone'

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
   "🦈 ¡A! ¡El menú de Gura apareció! 🦈",
   "🌊 ¡Shaaaark! ¡Menú listo para usar! 🌊",
   "🦈 ¡Gura-chan te trae el menú completo! 🦈"
    ].getRandom?.() || "🦈 ¡Menú Shark Ready! 🦈"

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
      text: '🦈╭─〔 𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎... 〕─⬣🌊\n┃ 🫧 *ɢᴜʀᴀ ᴇsᴛᴀ ᴘʀᴇᴘᴀʀᴀɴᴅᴏ ᴇʟ ᴍᴇɴᴜ...*\n┃ 🦈 *ᴄᴀʀɢᴀɴᴅᴏ ᴄᴏᴍᴀɴᴅᴏs sʜᴀʀᴋ...*\n┃ 🌊 *ᴄᴏɴᴇᴄᴛᴀɴᴅᴏ ᴀ ᴀᴛʟᴀɴᴛɪs...*\n╰─ ─ ─ ─ ─ ─ ─ ─ ─ ╴ ╴ ╴ ╴',
      mentions: [m.sender],
      contextInfo: {
        externalAdReply: {
          title: '🦈 GAWR GURA BOT | Shark Power! 🦈',
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
🦈═══════════════════════════════════🌊
　　　　🫧 𝐆𝐀𝐖𝐑 𝐆𝐔𝐑𝐀 𝐁𝐎𝐓 🫧
　　　　✦ ᴀ ✦ (◕‿◕) ✦ ᴀ ✦
🌊═══════════════════════════════════🦈

🦈 ${ucapan()} ${name}! 🌊

🫧 ╭──────────────────────╮
　　　　　🦈 ɪɴғᴏ ᴜsᴜᴀʀɪᴏ 🦈
🫧 ╰──────────────────────╯
　🦈 ɴᴏᴍʙʀᴇ: ${name}
　🌊 ɴɪᴠᴇʟ: ${level}
　🫧 ᴇxᴘ: ${exp}
　🦈 ʀᴀɴɢᴏ: ${role}
　🌊 ᴘʀᴏɢʀᴇsᴏ: [████████▓▓] 80%
🦈════════════════════════════════🌊
${readMore}

🫧 ╭──────────────────────╮
　　　　　🌊 ɪɴғᴏ ᴅᴇʟ ʙᴏᴛ 🌊
🫧 ╰──────────────────────╯
　🦈 ᴍᴏᴅᴏ: ɢʀᴀᴛɪs
　🌊 ᴏᴡɴᴇʀ: +573133374132
　🫧 ʙᴏᴛ: ${(conn.user.jid == global.conn.user.jid ? '🦈 `ᴏғɪᴄɪᴀʟ sʜᴀʀᴋ`' : '🌊 `sᴜʙ sʜᴀʀᴋ`')}
　🦈 ᴄᴏᴍᴀɴᴅᴏs: ${totalCommands}
　🌊 ᴜsᴜᴀʀɪᴏs: ${totalreg}
　🫧 ʀᴜɴᴛɪᴍᴇ: ${uptime}
🦈════════════════════════════════🌊
${readMore}

🫧 ╭──────────────────────╮
　　　　　🦈 ᴛɪᴇᴍᴘᴏ & ғᴇᴄʜᴀ 🦈
🫧 ╰──────────────────────╯
　🌊 ʜᴏʀᴀ: ${hora}
　🫧 ғᴇᴄʜᴀ: ${fecha}
　🦈 ᴅɪᴀ: ${dia}
🦈════════════════════════════════🌊
${readMore}

　　　　🦈 ᴄᴏᴍᴀɴᴅᴏs ᴅɪsᴘᴏɴɪʙʟᴇs 🦈
🌊═══════════════════════════════════🦈
${readMore}

🫧 ≽ܫ≼ 🦈 ɪɴғᴏʀᴍᴀᴄɪᴏɴ 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .afk [alasan]          🦈 .menu
🫧 .uptime               🌊 .script
🦈 .staff                🫧 .creador
🌊 .grupos               🦈 .estado
🫧 .infobot              🌊 .sug
🦈 .ping                 🫧 .reportar
🌊 .reglas               🦈 .speed
🫧 .sistema              🌊 .usuarios
🦈 .ds                   🫧 .funciones
🌊 .editautoresponder
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 ᴍᴇɴᴜ ʟɪsᴛs 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .menulist           🌊 .dev - ᴍᴇɴᴜ ᴏᴡɴᴇʀ
🫧 .menusticker        🦈 .menusearch - sᴇᴀʀᴄʜ
🌊 .menudl             🫧 .menulogos - ʟᴏɢᴏs
🦈 .menunsfw           🌊 .menugp - ɢʀᴜᴘᴏ
🫧 .menu2 - ᴀᴜᴅɪᴏs    🦈 .menurpg - ʀᴘɢ
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 sᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .animeinfo            🫧 .animesearch
🦈 .cuevana              🌊 .githubsearch
🫧 .searchhentai         🦈 .google
🌊 .imagen               🫧 .infoanime
🦈 .githubstalk          🌊 .soundcloudsearch
🫧 .pinterest            🦈 .pornhubsearch
🌊 .spotifysearch        🫧 .ytsearch2
🦈 .npmjs                🌊 .gnula
🫧 .apksearch            🦈 .wikis
🌊 .tiktoksearch         🫧 .tweetposts
🦈 .xnxxs                🌊 .xvsearch
🫧 .yts                  🦈 .fdroidsearch
🌊 .happymodsearch       🫧 .cinecalidadsearch
🦈 .yahoosearch          🌊 .movie
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 sᴜʙʙᴏᴛs 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .qr                   🌊 .code
🫧 .token                🦈 .sockets
🌊 .deletesesion         🫧 .pausarai
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ᴅᴏᴡɴʟᴏᴀᴅs 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .fb2                  🫧 .fdroid
🦈 .fb                   🌊 .sound
🫧 .gitclone             🦈 .gdrive
🌊 .ig                   🫧 .mediafire
🦈 .mega                 🌊 .apk
🫧 .pinvid               🦈 .apk2
🌊 .npmdl                🫧 .tt2
🦈 .kwaidl               🌊 .likee
🫧 .aplay2               🦈 .capcut
🌊 .play                 🫧 .play2
🦈 .ytmp3doc             🌊 .ytmp4doc
🫧 .iaimg                🦈 .yta
🌊 .ytv                  🫧 .tiktokrandom
🦈 .spotify              🌊 .tiktokhd
🫧 .tiktoktrends         🦈 .snapchat
🌊 .terabox              🫧 .tiktok
🦈 .tiktokmp3            🌊 .tiktokimg
🫧 .twitter              🦈 .xvideosdl
🌊 .xnxxdl               🫧 .pindl
🦈 .apkpure              🌊 .apkpuredl
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .gay @tag             🌊 .lesbiana @tag
🫧 .pajero @tag          🦈 .pajera @tag
🌊 .puto @tag            🫧 .puta @tag
🦈 .manco @tag           🌊 .manca @tag
🫧 .rata @tag            🦈 .prostituta @tag
🌊 .amigorandom          🫧 .jalamela
🦈 .simi                 🌊 .chiste
🫧 .consejo              🦈 .doxear
🌊 .facto                🫧 .reto
🦈 .verdad               🌊 .prostituto @tag
🫧 .formarpareja         🦈 .formarpareja5
🌊 .huevo @user          🫧 .chupalo
🦈 .aplauso              🌊 .marron
🫧 .suicidar             🦈 .iqtest
🌊 .meme                 🫧 .morse
🦈 .nombreninja          🌊 .paja
🫧 .personalidad         🦈 .pregunta
🌊 .zodiac               🫧 .ship
🦈 .sorte                🌊 .top
🫧 .formartrio           🦈 .tt
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ғʀᴀsᴇs 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .piropo               🫧 .frase
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 ᴊᴜᴇɢᴏs 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .ahorcado             🌊 .delxo
🫧 .genio                🦈 .math
🌊 .ppt                  🫧 .pvp
🦈 .sopa                 🌊 .acertijo
🫧 .ttt
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ᴀɴɪᴍᴇ ᴄᴍᴅs 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .angry @tag           🫧 .bath @tag
🦈 .bite @tag            🌊 .bleh @tag
🫧 .blush @tag           🦈 .bored @tag
🌊 .nights               🫧 .dias
🦈 .coffe @tag           🌊 .cry @tag
🫧 .cuddle @tag          🦈 .dance @tag
🌊 .drunk @tag           🫧 .eat @tag
🦈 .messi                🌊 .cr7
🫧 .facepalm @tag        🦈 .happy @tag
🌊 .hello @tag           🫧 .hug @tag
🦈 .kill @tag            🌊 .kiss2 @tag
🫧 .kiss @tag            🦈 .laugh @tag
🌊 .lick @tag            🫧 .love2 @tag
🦈 .patt @tag            🌊 .poke @tag
🫧 .pout @tag            🦈 .ppcouple
🌊 .preg @tag            🫧 .punch @tag
🦈 .run @tag             🌊 .sad @tag
🫧 .scared @tag          🦈 .seduce @tag
🌊 .shy @tag             🫧 .slap @tag
🦈 .sleep @tag           🌊 .smoke @tag
🫧 .think @tag           🦈 .undress @tag
🌊 .waifu
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 ᴘᴇʀғɪʟ 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .reg                  🌊 .unreg
🫧 .profile              🦈 .perfildates
🌊 .marry                🫧 .divorce
🦈 .setgenre             🌊 .delgenre
🫧 .setbirth             🦈 .delbirth
🌊 .setdesc              🫧 .deldesc
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ʟᴏɢᴏs 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .glitchtext           🫧 .narutotext
🦈 .dragonball           🌊 .neonlight
🫧 .pubglogo             🦈 .harrypotter
🌊 .marvel               🫧 .pixelglitch
🦈 .amongustext          🌊 .writetext
🫧 .advancedglow         🦈 .typographytext
🌊 .neonglitch           🫧 .flagtext
🦈 .flag3dtext           🌊 .deletingtext
🫧 .blackpinkstyle       🦈 .glowingtext
🌊 .underwatertext       🫧 .logomaker
🦈 .cartoonstyle         🌊 .papercutstyle
🫧 .watercolortext       🦈 .effectclouds
🌊 .blackpinklogo        🫧 .gradienttext
🦈 .summerbeach          🌊 .luxurygold
🫧 .multicoloredneon     🦈 .sandsummer
🌊 .galaxywallpaper      🫧 .style
🦈 .makingneon           🌊 .royaltext
🫧 .freecreate           🦈 .galaxystyle
🌊 .rainytext            🫧 .graffititext
🦈 .colorfulltext        🌊 .equalizertext
🫧 .angeltxt             🦈 .starlight
🌊 .steel                🫧 .neoncity
🦈 .cloudsky             🌊 .matrix
🫧 .minion               🦈 .papercut3d
🌊 .firetext             🫧 .icecold
🦈 .rainbowtext
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 sᴛᴀʟᴋ 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .tiktokstalk          🌊 .kwaistalk
🫧 .telegramstalk        🦈 .youtubestalk
🌊 .instagramstalk
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ᴘʀᴇᴍɪᴜᴍ 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .comprarpremium       🫧 .premium
🦈 .vip                  🌊 .spamwa
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 ʀᴘɢ sʏsᴛᴇᴍ 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .aventura             🌊 .baltop
🫧 .bank                 🦈 .cazar
🌊 .codigo               🫧 .canjear
🦈 .cartera              🌊 .apostar
🫧 .cf                   🦈 .cofre
🌊 .crimen               🫧 .daily
🦈 .depositar            🌊 .explorar
🫧 .gremio               🦈 .regalo
🌊 .halloween            🫧 .heal
🦈 .inventario           🌊 .mensual
🫧 .mazmorra             🦈 .minar
🌊 .navidad              🫧 .retirar
🦈 .robar                🌊 .robarxp
🫧 .ruleta               🦈 .buyall
🌊 .buy                  🫧 .protituirse
🦈 .work                 🌊 .pay
🫧 .semanal              🦈 .levelup
🌊 .lvl                  🫧 .slot
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ɢᴀᴄʜᴀ ɢᴀᴍᴇ 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .rw                   🫧 .reclamar
🦈 .harem                🌊 .waifuimage
🫧 .charinfo             🦈 .topwaifus
🌊 .regalar              🫧 .vote
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 sᴛɪᴄᴋᴇʀs 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .sticker              🌊 .setmeta
🫧 .delmeta              🦈 .bratvid
🌊 .pfp                  🫧 .qc
🦈 .toimg                🌊 .brat
🫧 .emojimix             🦈 .wm
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ᴛᴏᴏʟs & ᴜᴛɪʟs 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .letra                🫧 .fake
🦈 .hd                   🌊 .detectar
🫧 .clima                🦈 .join
🌊 .nuevafotochannel     🫧 .nosilenciarcanal
🦈 .silenciarcanal       🌊 .noseguircanal
🫧 .seguircanal          🦈 .avisoschannel
🌊 .resiviravisos        🫧 .inspect
🦈 .inspeccionar         🌊 .eliminarfotochannel
🫧 .reactioneschannel      🦈 .reaccioneschannel
🌊 .nuevonombrecanal      🫧 .nuevadescchannel
🦈 .setavatar             🌊 .setbanner
🫧 .seticono              🦈 .setmoneda
🌊 .setname               🫧 .cal
🦈 .horario               🌊 .read
🫧 .traducir              🦈 .say
🌊 .whatmusic             🫧 .paisinfo
🦈 .ssweb                 🌊 .tamaño
🫧 .document              🦈 .translate
🌊 .up                    🫧 .enhance
🦈 .wikipedia
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 ᴏɴ/ᴏғғ sᴇᴛᴛɪɴɢs 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .welcome               🌊 .bienvenida
🫧 .antiprivado           🦈 .antiprivate
🌊 .restrict              🫧 .restringir
🦈 .antibot               🌊 .antibots
🫧 .autoaceptar           🦈 .aceptarauto
🌊 .autorechazar          🫧 .rechazarauto
🦈 .autoresponder         🌊 .autorespond
🫧 .antisubbots           🦈 .antibot2
🌊 .modoadmin             🫧 .soloadmin
🦈 .reaction              🌊 .reaccion
🫧 .nsfw                  🦈 .modohorny
🌊 .antispam              🫧 .jadibotmd
🦈 .modejadibot           🌊 .subbots
🫧 .detect                🦈 .avisos
🌊 .antilink              🫧 .audios
🦈 .antiver               🌊 .antiocultar
🫧 .antilink2             🦈 .antiarabe
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ɢʀᴜᴘᴏs 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .admins                🫧 .agregar
🦈 .advertencia           🌊 .delwarn
🫧 .grupo                 🦈 .group
🌊 .delete                🫧 .demote
🦈 .promote               🌊 .encuesta
🫧 .kickfantasmas         🦈 .gpbanner
🌊 .gpdesc                🫧 .gpname
🦈 .hidetag               🌊 .infogrupo
🫧 .kickall               🦈 .kick
🌊 .kicknum               🫧 .listonline
🦈 .link                  🌊 .listadv
🫧 .mute                  🦈 .unmute
🌊 .config                🫧 .restablecer
🦈 .setbye                🌊 .setwelcome
🫧 .testwelcome           🦈 .setemoji
🌊 .invocar
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 ɴsғᴡ ᴄᴍᴅs 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .sixnine @tag          🌊 .anal @tag
🫧 .blowjob @tag          🦈 .boobjob @tag
🌊 .cum @tag              🫧 .fap @tag
🦈 .follar @tag           🌊 .fuck @tag
🫧 .footjob @tag          🦈 .fuck2 @tag
🌊 .grabboobs @tag        🫧 .grop @tag
🦈 .penetrar @tag         🌊 .lickpussy @tag
🫧 .r34                   🦈 .sexo @tag
🌊 .spank @tag            🫧 .suckboobs @tag
🦈 .violar @tag           🌊 .lesbianas @tag
🫧 .pack                  🦈 .tetas
🌊 .undress
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .addcoins              🫧 .addowner
🦈 .delowner              🌊 .addprem
🫧 .añadirxp              🦈 .copia
🌊 .autoadmin             🫧 .banuser
🦈 .banlist               🌊 .bcgc
🫧 .block                 🦈 .unblock
🌊 .blocklist             🫧 .chetar
🦈 .cleartmp              🌊 .creargc
🫧 .deletefile            🦈 .delprem
🌊 .deschetar             🫧 .dsowner
🦈 =>                     🌊 >
🫧 .fetch                 🦈 .getplugin
🌊 .grouplist             🫧 .salir
🦈 .let                   🌊 .setppbot
🫧 .prefix                🦈 .quitarcoin
🌊 .quitarxp              🫧 .resetprefix
🦈 .restablecerdatos      🌊 .restart
🫧 .reiniciar             🦈 .reunion
🌊 .savefile              🫧 .saveplugin
🦈 .setcmd                🌊 .delcmd
🫧 .listcmd               🦈 .setimage
🌊 .setstatus             🫧 .spam2
🦈 .unbanuser             🌊 .ip
🫧 .update                🦈 .fix
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🌊 ᴀɪ ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ 🌊 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🦈 .dalle                 🌊 .demo
🫧 .flux                  🦈 .gemini
🌊 .ia                    🫧 .llama
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆


🫧 ≽ܫ≼ 🦈 ᴄᴏɴᴠᴇʀᴛᴇʀs 🦈 ≽ܫ≼ 🫧
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆
🌊 .tourl                 🫧 .catbox
🦈 .tourl3                🌊 .togifaud
🫧 .tomp3                 🦈 .tovideo
🌊 .tts                   🫧 .tts2
・*:.｡. .｡.:*・゜ﾟ・*☆ ・*:.｡. .｡.:*・゜ﾟ・*☆

🦈═══════════════════════════════════🌊
　　　　🫧 ᴄʀᴇᴀ ᴛᴜ sᴜʙʙᴏᴛ 🫧
　　🦈 ¡ɴᴀᴅᴀ ᴇɴ sᴇɢᴜɴᴅᴏs ᴄᴏᴍᴏ ɢᴜʀᴀ! 🦈
🌊═══════════════════════════════════🦈

　🫧 ➊ 🦈 *.qr* – ᴇsᴄᴀɴᴇᴀ ᴇʟ ᴄᴏ́ᴅɪɢᴏ  
　🌊 ➋ 🫧 *.code* – ᴄᴏ́ᴅɪɢᴏ ᴅᴇ 8 ᴅɪ́ɢɪᴛᴏs

🦈═══════════════════════════════════🌊
　　🫧 *"ᴀ!"* - ɢᴀᴡʀ ɢᴜʀᴀ 2024 🫧
　　　🦈 sʜᴀʀᴋ ᴘᴏᴡᴇʀ ᴀᴄᴛɪᴠᴀᴛᴇᴅ! 🦈  
🌊═══════════════════════════════════🦈`.trim()

    await m.react('🦈')
    await conn.sendMessage(m.chat, {
      video: { url: video },
      gifPlayback: true,
      caption: menuText,
      footer: club,
      buttons: [
        { buttonId: `.code`, buttonText: { displayText: "🦈 s ʜ ᴀ ʀ ᴋ  ʙ ᴏ ᴛ" }, type: 1 },
        { buttonId: `.owner`, buttonText: { displayText: "🌊 ɢ ᴜ ʀ ᴀ  ᴏ ᴡ ɴ ᴇ ʀ" }, type: 1 }
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
          title: "🦈 GAWR GURA BOT - Shark Power Activated! 🦈",
          body: "🫧 A! Ready to swim in the digital ocean! 🌊",
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
      text: `🦈 ¡A! Error al mostrar el menú shark: ${e.message}`,
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
  let res = "🌊 ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs, shark! 🦈"
  if (time >= 5 && time < 12) res = "🫧 ʙᴜᴇɴᴏs ᴅɪᴀs, gura! 🦈"
  else if (time >= 12 && time < 18) res = "🌊 ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs, shark! 🫧"
  else if (time >= 18) res = "🦈 ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs, gura! 🌊"
  return res
}
