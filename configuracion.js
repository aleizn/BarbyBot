import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs'
import { en, es, pt } from './lib/idiomas/total-idiomas.js'

//cambia los nΓΊmeros que sean propietarios 
global.owner = [
  ['5493878224071', 'π° ππ₯π - πππππππ π°', true],
  ['51914865141', 'π°  ππππππβπππ - π²πΎπ»π»π°π±πΎππ°ππΎπ 1 π°', true],
  ['595986674310']

] 
global.suittag = ['5493878224071'] 
global.mods = ['595986674310'] 
global.prems = [] 

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz',
  violetics: 'https://violetics.pw'
},

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://violetics.pw': 'beta'
}


global.lenguajeGB = es

/* ______________________________________________ */
global.creadorname = 'πππ«ππ²β§ππ¨π­'
global.creatorname = creadorname
global.library = 'BAILEYS-MD'
global.vs = 'V10'
global.version = vs

//_______tiempp de stickers______________
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.aΓ±o = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//------------- Sticker WM -----------
global.packname = `π β’ CREADOR POR:\nπ β’ DΓ­a:\nποΈ β’ Fecha:`
global.author = ` DORRAT-BOT\nβ’ ${dia}\nβ’ ${fecha}`
//_______________
global.wm = 'πππ«ππ²β§ππ¨π­'
global.db3t = `πππ«ππ²β§ππ¨π­`
global.wm3 = db3t
global.igfg = 'πππ«ππ²β§ππ¨π­'
global.wait = '*[β] CARGANDO POR FAVOR ESPERA...*'
//-------------------
global.md = 'https://chat.whatsapp.com/JOkFXt2T0kNFN0vkiModTx'
global.dorramd = md

global.yt = 'http://youtube.com/@diegogameplays82'
global.youtube = yt
//Menu
global.DorrafotoMenu = ['./galerΓ­a/dorratmini.mp4']
global.menulinks = [md, yt]
/* _____________________________________________ */
global.ag = 'βββ β π°π³ππ΄πππ΄π½π²πΈπ° β βββ'
global.advertencia = ag
global.fg = 'βββββ β οΈ π΅π°π»π»πΎ β οΈ ββββ'
global.fallo = fg
global.mg = 'ββ β π»πΎ πππΎ πΌπ°π» β ββ'
global.mal = mg
global.dorre = 'DORRAT-BOT-MD'
global.DORRA = dorre

/* Imagenes___________________ */
global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./galeria/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./galeria/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./galeria/menudorrat3.jpg')
global.imagen5 = fs.readFileSync('./galeria/menudorrat5.png')
global.video1 = fs.readFileSync('./galeria/dorratmini.mp4')
global.dorratMenu = [imagen1, imagen4]
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.Key360 = ['964f-0c75-7afc'] //keys ephoto360
global.keysZens = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkeysapi = ['85faf717d0545d14074659ad']
//__________________
global.lolkeys = ['2e0da1f78d1721134b21816d', '902c3bc9d8c08b0dcf8f5373', '808693688ecc695293359089', '85faf717d0545d14074659ad']
//global.lolkeysapi = lolkeys[Math.floor(lolkeys.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']
              
/* β±__________________.β RPG β.________ β° */

global.flaaa = [

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = 'βββββββγ'
global.cmenub = 'ββ¦ '
global.cmenuf = 'β°βββββββββββΰΉ\n'
global.cmenua = '\nβ ββββββββββββββββββββββββββββββββ β\n     '
 
global.dmenut = '*βββββββ©*'
global.dmenub = '*βΒ»*'
global.dmenub2 = '*β*'
global.dmenuf = '*β°βββββββββββ¦*'
global.htjava = 'β«Ήβ«Ί'

global.htki = '*β­β’Μ©Μ©Νβ±β’β’β’β’ βͺ*'
global.htka = '*βͺ β’β’β’β’Μ©Μ©Νβ°β’β­*'

global.comienzo = 'β’ β’ ββββββ'
global.fin = 'ββββββ β’ β’'

global.botdate = `β«Ήβ«Ί Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
global.bottime = `π§ π π  π : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./Menu2.jpg')
                               }
                              }
                             }

/* _____________________________________ */

global.multiplier = 999 // Cuanto mΓ‘s alto, mΓ‘s difΓ­cil subir de nivel | The higher, The harder levelup 

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
    let emot = {
      level: 'π§¬ Nivel',
      limit: 'π Diamante',
      bitcoins: 'π΅οΈ BitCoins',
      dorracoins: 'πͺ DorratCoins',
      exp: 'β‘ Experiencia',
      bank: 'π¦ Banco',
      diamond: 'π Diamante',
      health: 'β€οΈ Salud',
      kyubi: 'π Magia',
      joincount: 'β―οΈ Token',
      emerald: 'π Esmeralda',
      stamina: 'β¨ EnergΓ­a',
      role: 'πͺ Rango',
      premium: 'ποΈ Premium',
      pointxp: 'π§ Puntos Exp',
      gold: 'π Oro',
      trash: 'π Basura',
      crystal: 'π? Cristal',
      intelligence: 'π§  Inteligencia',
      string: 'πΈοΈ Cuerda',
      keygold: 'π Llave de Oro',
      keyiron: 'ποΈ Llave de Hierro',
      emas: 'πͺ PiΓ±ata',
      fishingrod: 'π£ CaΓ±a de Pescar',
      gems: 'π Gemas',
      magicwand: 'βοΈ Varita MΓ‘gica',
      mana: 'πͺ Hechizo',
      agility: 'π€ΈββοΈ Agilidad',
      darkcrystal: 'β οΈ Cristal Oscuro',
      iron: 'βοΈ Hierro',
      rock: 'πͺ¨ Roca',
      potion: 'π₯€ PociΓ³n',
      superior: 'πΌ Superior',
      robo: 'π Robo',
      upgrader: 'π§° Aumentar Mejora',
      wood: 'πͺ΅ Madera',
      strength: 'π¦Ήβ βοΈ Fuerza',
      arc: 'πΉ Arco',
      armor: 'π₯Ό Armadura',
      bow: 'πΉ Super Arco',
      pickaxe: 'βοΈ Pico',
      sword: 'βοΈ Espada',
      common: 'π¦ Caja ComΓΊn',
      uncoommon: 'π₯‘ Caja Poco ComΓΊn',
      mythic: 'π³οΈ Caja MΓ­tico',
      legendary: 'π Caja Legendaria',
      petFood: 'π Alimento para Mascota',
      pet: 'π± Caja para Mascota',
      bibitanggur: 'π Semilla de Uva',
      bibitapel: 'π Semilla de Manzana',
      bibitjeruk: 'π Semillas de naranja',
      bibitmangga: 'π₯­ Semilla de Mango',
      bibitpisang: 'π Semillas de PlΓ‘tano',
      ayam: 'π Pollo',
      babi: 'π Puerco',
      Jabali: 'π Jabali',
      bull: 'π Toro',    
      buaya: 'π Cocodrilo',    
      cat: 'π Gato',      
      centaur: 'π Centauro',
      chicken: 'π Pollo',
      cow: 'π Vaca', 
      dog: 'π Perro',
      dragon: 'π DragΓ³n',
      elephant: 'π Elefante',
      fox: 'π¦ Zorro',
      giraffe: 'π¦ Jirafa',
      griffin: 'π¦ Ave',
      horse: 'π Caballo',
      kambing: 'π Cabra',
      kerbau: 'π BΓΊfalo',
      lion: 'π¦ LeΓ³n',
      monyet: 'π Mono',
      panda: 'πΌ Panda',
      snake: 'π Serpiente',
      phonix: 'ποΈ FΓ©nix',
      rhinoceros: 'π¦ Rinoceronte',
      wolf: 'πΊ Lobo',
      tiger: 'π Tigre',
      cumi: 'π¦ Calamar',
      udang: 'π¦ CamarΓ³n',
      ikan: 'π Pez',
      fideos: 'π Fideos',
      ramuan: 'π§ͺ Ingrediente NOVA',
      knife: 'πͺ Cuchillo'
    }
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}
global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase()
    let emott = {
      level: 'π§¬',
      limit: 'π',
      bitcoins: 'π΅οΈ',
      dorracoins: 'πͺ DorratCoins',
      exp: 'β‘',
      bank: 'π¦',
      diamond: 'π+',
      health: 'β€οΈ',
      kyubi: 'π',
      joincount: 'β―οΈ',
      emerald: 'π',
      stamina: 'β¨',
      role: 'πͺ',
      premium: 'ποΈ',
      pointxp: 'π§',
      gold: 'π',
      trash: 'π',
      crystal: 'π?',
      intelligence: 'π§ ',
      string: 'πΈοΈ',
      keygold: 'π',
      keyiron: 'ποΈ',
      emas: 'πͺ',
      fishingrod: 'π£',
      gems: 'π',
      magicwand: 'βοΈ',
      mana: 'πͺ',
      agility: 'π€ΈββοΈ',
      darkcrystal: 'β οΈ',
      iron: 'βοΈ',
      rock: 'πͺ¨',
      potion: 'π₯€',
      superior: 'πΌ',
      robo: 'π',
      upgrader: 'π§°',
      wood: 'πͺ΅',
      strength: 'π¦Ήβ βοΈ',
      arc: 'πΉ',
      armor: 'π₯Ό',
      bow: 'πΉ',
      pickaxe: 'βοΈ',
      sword: 'βοΈ',
      common: 'π¦',
      uncoommon: 'π₯‘',
      mythic: 'π³οΈ',
      legendary: 'π',
      petFood: 'π',
      pet: 'π±',
      bibitanggur: 'π',
      bibitapel: 'π',
      bibitjeruk: 'π',
      bibitmangga: 'π₯­',
      bibitpisang: 'π',
      ayam: 'π',
      babi: 'π',
      Jabali: 'π',
      bull: 'π',    
      buaya: 'π',    
      cat: 'π',      
      centaur: 'π',
      chicken: 'π',
      cow: 'π', 
      dog: 'π',
      dragon: 'π',
      elephant: 'π',
      fox: 'π¦',
      giraffe: 'π¦',
      griffin: 'π¦', 
      horse: 'π',
      kambing: 'π',
      kerbau: 'π',
      lion: 'π¦',
      monyet: 'π',
      panda: 'πΌ',
      snake: 'π',
      phonix: 'ποΈ',
      rhinoceros: 'π¦',
      wolf: 'πΊ',
      tiger: 'π',
      cumi: 'π¦',
      udang: 'π¦',
      ikan: 'π',
      fideos: 'π',
      ramuan: 'π§ͺ',
      knife: 'πͺ'
    }
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}}
global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase()
    let emottt = {
      exp: 'β‘ Experiencia',
      limit: 'π Diamante',
      bitcoins: 'π΅οΈ BitCoins',
      dorracoins: 'πͺ DorratCoins',
      diamond: 'π Diamante',
      joincount: 'β―οΈ Token',
      emerald: 'π Esmeralda',
      berlian: 'β¦οΈ Joya',
      kyubi: 'π Magia',
      gold: 'π Oro',
      tiketcoin: 'π« Dorrat Tickers',
      stamina: 'β¨ EnergΓ­a',
      potion: 'π₯€ PociΓ³n',
      aqua: 'π§ Agua',
      trash: 'π Basura',
      wood: 'πͺ΅ Madera',
      rock: 'πͺ¨ Roca',
      batu: 'π₯ Piedra',
      string: 'πΈοΈ Cuerda',
      iron: 'βοΈ Hierro',
      coal: 'β±οΈ CarbΓ³n',
      botol: 'πΆ Botella',
      kaleng: 'π₯« Lata',
      kardus: 'πͺ§ CartΓ³n',
      eleksirb: 'π‘ Electricidad',
      emasbatang: 'γ½οΈ Barra de Oro',
      emasbiasa: 'π§­ Oro ComΓΊn',
      rubah: 'π¦π«οΈ Zorro Grande',
      sampah: 'ππ«οΈ Super Basura',
      serigala: 'πΊπ«οΈ Super Lobo',
      kayu: 'π· Super Madera',
      sword: 'βοΈ Espada',
      umpan: 'πͺ± Carnada', 
      healtmonster: 'π΅ Billetes',
      emas: 'πͺ PiΓ±ata',
      pancingan: 'πͺ Gancho',
      pancing: 'π£ CaΓ±a de Pescar',
      common: 'π¦ Caja ComΓΊn',
      uncoommon: 'π₯‘ Caja Poco ComΓΊn',
      mythic: 'π³οΈ Caja MΓ­tica',
      pet: 'π« Caja de Mascotas',//?
      gardenboxs: 'π Caja de JardinerΓ­a',//?
      legendary: 'π Caja Legendaria',
      anggur: 'π Uva',
      apel: 'π Manzana',
      jeruk: 'π Naranja',
      mangga: 'π₯­ Mango',
      pisang: 'π Platano',
      bibitanggur: 'πΎπ Semillas de uva',
      bibitapel: 'πΎπ Semillas de manzana',
      bibitjeruk: 'πΎπ Semillas de naranja',
      bibitmangga: 'πΎπ₯­ Semillas de Mango',
      bibitpisang: 'πΎπ Semillas de plΓ‘tano',
      centaur: 'π Centauro',
      griffin: 'π¦ Ave',
      kucing: 'π Gato',
      naga: 'π DragΓ³n',
      fox: 'π¦ Zorro',
      kuda: 'π Caballo',
      phonix: 'ποΈ FΓ©nix',
      wolf: 'πΊ Lobo',
      anjing: 'πΆ Perro',
      petFood: 'π Alimento para Mascota', //?
      makanancentaur: 'ππ₯© Comida de Centauro',
      makanangriffin: 'π¦π₯© Comida de Ave',
      makanankyubi: 'ππ₯© Comida MΓ‘gica',
      makanannaga: 'ππ₯© Comida de DragΓ³n',
      makananpet: 'π±π₯© Alimentos de mascotas',
      makananphonix: 'ποΈπ₯© Comida de FΓ©nix'  
    }
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}}
global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: 'β‘',
      limit: 'π',
      diamond: 'π+',
      bitcoins: 'π΅οΈ',
      dorracoins: 'πͺ',
      joincount: 'β―οΈ',
      emerald: 'π',
      berlian: 'β¦οΈ',
      kyubi: 'π',
      gold: 'π',
      tiketcoin: 'π«',
      stamina: 'β¨',
      potion: 'π₯€',
      aqua: 'π§',
      trash: 'π',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      batu: 'π₯',
      string: 'πΈοΈ',
      iron: 'βοΈ',
      coal: 'β±οΈ',
      botol: 'πΆ',
      kaleng: 'π₯«',
      kardus: 'πͺ§',
      eleksirb: 'π‘',
      emasbatang: 'γ½οΈ',
      emasbiasa: 'π§­',
      rubah: 'π¦π«οΈ',
      sampah: 'ππ«οΈ',
      serigala: 'πΊπ«οΈ',
      kayu: 'π·',
      sword: 'βοΈ',
      umpan: 'πͺ±', 
      healtmonster: 'π΅',
      emas: 'πͺ',
      pancingan: 'πͺ',
      pancing: 'π£',
      common: 'π¦',
      uncoommon: 'π₯‘',
      mythic: 'π³οΈ',
      pet: 'π«',//?
      gardenboxs: 'π',//?
      legendary: 'π',
      anggur: 'π',
      apel: 'π',
      jeruk: 'π',
      mangga: 'π₯­',
      pisang: 'π',
      bibitanggur: 'πΎπ',
      bibitapel: 'πΎπ',
      bibitjeruk: 'πΎπ',
      bibitmangga: 'πΎπ₯­',
      bibitpisang: 'πΎπ',
      centaur: 'π',
      griffin: 'π¦',
      kucing: 'π',
      naga: 'π',
      fox: 'π¦',
      kuda: 'π',
      phonix: 'ποΈ',
      wolf: 'πΊ',
      anjing: 'πΆ',
      petFood: 'π', //?
      makanancentaur: 'ππ₯©',
      makanangriffin: 'π¦π₯©',
      makanankyubi: 'ππ₯©',
      makanannaga: 'ππ₯©',
      makananpet: 'π±π₯©',
      makananphonix: 'ποΈπ₯©'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("se actualizo 'configuracion.js'"))
  import(`${file}?update=${Date.now()}`)
})
