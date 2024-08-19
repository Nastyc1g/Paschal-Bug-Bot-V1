//base by Tech-God
//re-upload? recode? copy code? give credit ya :)
//YouTube: @techgod143
//Instagram: techgod143
//Telegram: t.me/techgod143
//GitHub: @techgod143
//WhatsApp: +917466008456
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@techgod143
const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "2347066575685"
global.ownername = "paschal"
global.ytname = "YT: Future-Tech"
global.socialm = "GitHub: Nastyc1g"
global.location = "Africa/Imo"

global.ownernumber = '2347066575685'  //creator number
global.ownername = 'paschal' //owner name
global.botname = 'paschal ᵇᵘᵍ ᵇᵒᵗ' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'Paschal\n\nContact: +2347066575685'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Youtube paschal Tech."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaYb7EyLNSZvA5A4iK2C'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//text bug
global.xbugtex = {
xtxt: '🚨YT_Future-Tech🚨',
}
global.bimg = 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhoUXBoVmxTRFZDWVR5eHIvSXQvVkNBODhWbThiWTFMY05GSkFyc3dYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3lQeFA1TFZOV015RXVyMDFWWmN0dXV5T0xSenlQNG55VVpuTmR5cHBUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRCtYYk9BSGovUFNNdHMrM2V6bVJiTkJkaFNBQ0xZSWEvRHJGRk52NTNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrMnpsOXB2d2xZUnhQMDJaSjVRZEZxekRTaU9Xb1d0UXA4TEF3UzVESjNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNZVl5MUoyL2IvOS9VYVAyM2RQUzJ6TWs0eEZid2FXLzl3YUNXS2JUMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHN3JweGZyM2xYd0FQNCtFTHE0bEE5SkVwZXhNZlBkMVlOd2I0UFYzajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1tTTd0UWdYN2d0aW1rZmFkQnVVUVV0T1ZIYmZuZk44MmVvYVNTR3psbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWtRV2djNmpXZHZFVTJJNkl6WEFjUFhZUHVISFNYNlhVTVZXdE1OUWVqRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5qM0d6UnVhYWZtOG13YkhGaWhxcEpoWkdhclVmdVdMdyswQ2FUZnJlMFpuTEV1UUJBSERXems0M1p4MVlqR1AvUHpDMWVoNmx4RkxxTHQyTDB2SWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6IlJEMjgzVGs3WVd0cTMxM2kzQ2EwQUFQdWRueC9DV2ljMG5UNDdTWjZ6NjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA2NjU3NTY4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBMzVFRDk2MUNGMzNCQkFFMjhDM0MwODhCNDBBMjYwNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0MDM5NTcwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDY2NTc1Njg1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0MjA1OEZERTZBMDY4NzI0NzZCMThBRjBFREU2MTcxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjQwMzk1NzB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRCUElLVHZuVHp1ZkpwWFdBSHdUYUEiLCJwaG9uZUlkIjoiZmU3NmUyOGUtNjU4Zi00NzBiLTg1YmYtNTFhZGFmNGQzMTU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQWFUrcTB3WGIrN3BYR0IwYVNkK0tHLzVHTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYU29TNzB5a2w1N3BZK3NaQzlrRGVSelVsYkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQk4yNUU5UDYiLCJtZSI6eyJpZCI6IjIzNDcwNjY1NzU2ODU6NjdAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMTE3NTQ3NzI2MDMwNjM6NjdAbGlkIiwibmFtZSI6IlBhc2NoYWwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tLamthd0hFUCtDaTdZR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNtNW51TzNqaVJnTXF6L0xZM0g1QjFvZ2NXb2ZkWjdKSGhOamRmRHZEa289IiwiYWNjb3VudFNpZ25hdHVyZSI6InE3SHlodHVmcEJHMmdpbStzbkUwN1RuWFVTTTBYV0xBZ2NOZC9ZcUJnV2dhYlIvZXhTRU1RVlEzNWhZMm50dFpoUmY0Y2NneXA0WW9XT3hkQ0NpUERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrbGpiN1RKZ1IrbHFwSlFFMCtFeFRTQ2JtQ0J5YmVCeUR6MVk1K25ZM3dKSm1qNXBxV3EwRk81Y1Z6UjBhRVp1TGx2TklyQk51R2xXTEpoSmRsTWZodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNjY1NzU2ODU6NjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkp1WjdqdDQ0a1lES3MveTJOeCtRZGFJSEZxSDNXZXlSNFRZM1h3N3c1SyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MDM5NTY0LCJsYXN0UHJvcEhhc2giOiIyWk42aXYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1WLyJ9'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by Paschal or premium user only',
    admin: 'This feature can be used paschal or admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by paschal or owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
