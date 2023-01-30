
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['☬𝕯𝖊𝖊𝖕𝖉𝖎𝖆☬'] //ur owner number
global.ownername = "☬𝕯𝖊𝖊𝖕𝖉𝖎𝖆☬" //ur owner name
global.ytname = "kumarduttadeep" //ur yt chanel name
global.socialm = "kumarduttadeep" //ur github or insta name
global.location = "India, West Bengal, Hooghly" //ur location

//bot bomdy 
global.ownernomer = "916291588399" //ur number
global.premium = ['916291588399'] //ur premium number
global.botname = '𝐃𝐀𝐑𝐊 𝐃𝐄𝐄𝐏' //ur bot name
global.linkz = "https://chat.whatsapp.com/COzM9PfhGln9w89Vm1GG2W" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/WgKGHNNI_U8" //ur website to be displayed
global.botscript = 'https://github.com/kumarduttadeep' //script link
global.themeemoji = "😳" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "𝐊𝚵𝚸𝐋𝚫𝚪 𝚩𝚯𝚻\n\n\nA whatsapp bot developed by\nDeep Kumar Dutta\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +916291588399" //ur sticker watermark author
global.wm = "𝐊𝚵𝚸𝐋𝚫𝚪 𝚩𝚯𝚻" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Work done 𝗗𝗮𝗿𝗹𝗶𝗻𝗴❤️',
    admin: "Baby! This command is only for 𝗔𝗱𝗺𝗶𝗻𝘀...So i can't process your command 😑",
    botAdmin: 'First make me 𝗔𝗱𝗺𝗶𝗻!!! 😐',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This command is only for my 𝗼𝘄𝗻𝗲𝗿 ☬𝕯𝖊𝖊𝖕𝖉𝖎𝖆☬',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: "This Feature Is Only For 𝗕𝗼𝘁... and you're not a 𝗕𝗼𝘁.",
    wait: "I'm progressing your command baby❤️, Please wait......",
    linkm: 'Abey Where is the link ?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, Bc padhai likhai karo 𝗜𝗔𝗦 - 𝗬𝗔𝗦 bano lekin nhii tumhe to nudity dekhni hai 👏',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
