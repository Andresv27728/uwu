import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          conn.reply(m.chat, `┏━❖『 🦈 𝐒𝐇𝐀𝐀𝐀𝐑𝐊 𝐒𝐓𝐀𝐓𝐔𝐒 』❖━┓
┃ 💙 *Gura está nadando en aguas tranquilas~*
┃ 🌊 𝐋𝐚𝐭𝐞𝐧𝐜𝐢𝐚: ${latensi.toFixed(4)}ms
┃ 🦈 ❝ a! Sistema funcionando perfectamente ❞
┃ 🐟 *¡El tiburón más rápido del océano!*
┗━━━━━━━━━━━━━━━━━━━━━━━┛`, m, rcanal);
            });
}
handler.help = ['ping', 'shaaark', 'p']
handler.tags = ['info', 'shark']
handler.command = ['ping', 'p', 'shaaark', 'gura', 'a']
handler.register = true
export default handler
