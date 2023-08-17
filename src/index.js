require('dotenv').config();
const { Client, IntentsBitField, SlashCommandBuilder, ChannelType, REST, Routes } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds, 
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.login(process.env.TOKEN);

client.on("ready", (c) => {
    console.log(`✅ ${c.user.username} è online.`)
})


client.on("messageCreate", (message) => {
    if (message.author.bot) {
      return;
    }

    if (message.content === 'salve') {
      message.channel.send("Ciao!")
    }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'I need chiara instagram!') {
    message.reply("Shut the fuck up!")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'ciao') {
    message.channel.send("Salve!")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'ho paura dei ciccioni') {
    message.channel.send("Sti ciccioni di merdaaaaa")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'I need support!') {
    message.reply("@here **For support contact** <@705706290847940649>!")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'voglio andare al mc') {
    message.reply("No scusa <@765910554392395807> e' occupato")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === '<@843953451682758676>') {
    message.channel.send("CHIARAAAAAAAAAAAAAAAAAAA")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'comparuzzi') {
    message.channel.send("metto il bot sempre attivo o no?")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === '<@616625373077176320>') {
    message.channel.send("I CICCIONI REGA")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'Gartic') {
    message.reply("@here **Per chi cazzo vuole giocare a gartic su ds mi contatti su discord** <@705706290847940649> - <@1067156923088113795>")
    message.channel.send("Sono una maialona!")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === '👌👈') {
    message.reply("Cazzo bro ohh si. VUOI SCOPARE AHH SI! (𝓶𝓪𝓭𝓮 𝓫𝔂 <@665182304754335775>) Con tanto amore. Ciao brothers scopate tutto ohh si, Ave. | <@1040355189133168691> 𝒳𝒶𝓋𝒶 𝒾𝓈 𝑅𝐸𝒜𝒟𝒴 |")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'il bot e verificato?') {
    message.channel.send("no, coglione ")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'sta minchia') {
    message.channel.send("Ave Maria,")
    message.channel.send("piena di grappa,")
    message.channel.send("il signore è con te,")
    message.channel.send("che beve il brulè,")
    message.channel.send("e gli angeli in coro")
    message.channel.send("fuman malboro,")
    message.channel.send("e noi in compagnia...")
    message.channel.send("fumiamo Maria!")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'ciao caro') {
    message.channel.send("@here Scusate a tutti! Il nostro caro <@665182304754335775> vorrebbe chiedere scusa a tutto il server perche non voleva offendere <@756849149139484795> <@847203742062346251> <@927216734698602526> **NON LO FARA PIU LO PROMETTE!**")
  }
})


client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'fanculo') {
    message.channel.send("Fanculo <@665182304754335775> !")
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'marky123') {
    message.reply('Bacami il culo')
  }
})

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'richiesti in caff?') {
    message.reply("<@1067156923088113795>, <@665182304754335775>, <@705706290847940649>, <@702110004618199150>, <@543903862558425088>")
    }
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Chi è richiesto in <#1095405825201279128> ?") {
    message.channel.send("<@665182304754335775> Richiesto immediatamente in <#1095405825201279128> ! Tra 10 min ti verranno rimossi i ruoli se codesto invito non sarà eseguito!")
  }
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> ciao") {
    message.channel.send("Puttana bastarda")
    message.delete("<@1057730247841288263> ciao")
  }
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> negro") {
    message.reply("Io no Negro")
  }
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> purista") {
    message.channel.send("Sono una tryhardina di Fortnite!")
  }
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Aiuta lo zammone") {
    message.channel.send("Ok bro <@713011061938192394> eccolo")
  }
  
})
client.on("messageCreate", (message) => {
  if (message.content === "Ti aiuta lui <@1057730247841288263>") {
    message.channel.send("Certo bro")
  }
  
})
client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> di che colore è la tua Bugatti?") {
    message.channel.send("Gold fra")
  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> terrone") {
    message.channel.send("<@757180831079858196> Sucaminchia")
  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> motore") {
    message.channel.send("<@757180831079858196> Ghost rider di Como")
  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> banane") {
    message.channel.send("<@543903862558425088> BananeFritteBonTon")
  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> kevin") {
    message.channel.send("La zia di <@665182304754335775> è bella")
  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> dove sta kevin?") {
    message.channel.send("<@665182304754335775> sta škopa")
  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@437248803863658508>") {
    message.channel.send("<@437248803863658508> Gay di merda")
  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@543903862558425088>") {
    message.channel.send("<@288745095870676992> e <@683966128073998366> **Attese** in **assistenza ciccie!**")
    message.delete("<@1057730247841288263> <@543903862558425088>")
  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Kein") {
    message.channel.send("Dove sta <@543903862558425088>")
  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Yolo") {
    message.channel.send("ssssss")
    message.delete("<@1057730247841288263> Yolo")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Che cos'è <@760548808810954794>") {
    message.channel.send("E un negro bastardo robba de <@665182304754335775>")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Che cosa piace a <@702110004618199150>") {
    message.channel.send("Robba de MaCdOnAlD z jajci")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> jajci") {
    message.channel.send("Sveža ponudba z jajci! ||@here|| , veste da <@665182304754335775> dela v Mc Donaldu? NE NE VESTE!")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@665182304754335775>") {
    message.channel.send("Buon Compleanno Kevin, oggi è il tuo giorno il giorno in qui sei nato! Se hai un parente un amico oppure un collega che si chiama Kevin e oggi compie gli anni invia una cartolina personalizzata con il suo nome. Abbiamo selezionato e creato le migliori immagini di buon compleanno Kevin pronte per essere condivise su tutti i social: WhatsApp, Facebook, Twitter, Instagram, Pinterest ecc.. Le migliori immagini Buon compleanno Kevin li trovi solo qui!!!!! Il compleanno è un giorno speciale per tutti ricevere una cartolina con dedica di buon compleanno fa molto piacere e fa sentirsi speciali.")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@1067156923088113795>") {
    message.channel.send("Buon Compleanno Kevin, oggi è il tuo giorno il giorno in qui sei nato! Se hai un parente un amico oppure un collega che si chiama Kevin e oggi compie gli anni invia una cartolina personalizzata con il suo nome. Abbiamo selezionato e creato le migliori immagini di buon compleanno Kevin pronte per essere condivise su tutti i social: WhatsApp, Facebook, Twitter, Instagram, Pinterest ecc.. Le migliori immagini Buon compleanno Kevin li trovi solo qui!!!!! Il compleanno è un giorno speciale per tutti ricevere una cartolina con dedica di buon compleanno fa molto piacere e fa sentirsi speciali.")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@702110004618199150>") {
    message.channel.send("Tra gli atti acquisiti dalla Procura di San Isidro c’è anche l’ultimo audio WhatsApp che racconta il dialogo del neurochirurgo, Leopoldo Luque, con un conoscente. È il 25 novembre quando pronuncia la frase shock: “Il ciccione sta per morire”, poco dopo l’ex Pibe sarebbe deceduto. La sua figura e quella della psichiatra, Agustiva Cosachov, sono ritenute centrali nell’inchiesta per negligenza medica e abbandono di persona, fino a prefigurare l’ipotesi di omicidio colposo. continua su: https://www.fanpage.it/sport/calcio/il-ciccione-sta-per-morire-la-frase-di-luque-nellinchiesta-sulla-morte-di-maradona/ https://www.fanpage.it/")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Io vado") {
    message.channel.send("Ciao Bro saluta <@693548922915782727>")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Jaklič") {
    message.channel.send("Kaj Hočeš")
    message.delete("<@1057730247841288263> Jaklič")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "chill") {
    message.reply("Chilla compaa")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "chill guys") {
    message.reply("CHILLLLLLLLLL @here")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> !P") {
    message.channel.send("||@here|| Chi esce dal server e' una **puttana negra bastarda ritardata che non ha una vita sociale** tipo <@1057730247841288263> sarai come un bot discord. Gang! **Tutti i diritti sono riservati.** Per alte domande contatta <@665182304754335775> e <@667842818089287687> oppure <@633337707153719296> . **Attenzione! Se le persone non sono attive ve la piate n'der culo**")
    message.delete("<@1057730247841288263> !P")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@566552680915271680>") {
    message.reply("Diarrea fritta")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Bellavita") {
  message.reply("https://genius.com/Paky-la-bellavita-lyrics")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Non lo sai") {
  message.reply("https://genius.com/Shiva-non-lo-sai-lyrics")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> ROZZI") {
  message.reply("https://genius.com/Paky-rozzi-lyrics")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Blauer") {
  message.reply("https://genius.com/Paky-blauer-lyrics")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Onore e rispetto") {
  message.reply("https://genius.com/Paky-onore-e-rispetto-lyrics")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@633337707153719296>") {
  message.channel.send("C'è chi li guarda regolarmente durante il giorno, ma lo zoccolo duro dei fan li conosce come i compagni delle notti insonni. Sono i rudimentali costruttori del canale YouTube The Survival, che nei loro video mostrano come costruiscono strutture in argilla che spaziano dalle case alle piscine sotterranee. L'abilità di questi costruttori nel realizzare opere architettoniche in maniera apparentemente rapida gli ha garantito un enorme successo, anche grazie a una serie di video molto semplici e quasi rilassanti, che in molti guardano di notte quando non riescono a dormire. Ora è arrivato anche il riconoscimento da parte di YouTube: la targa d'oro per il milioni di iscritti. In realtà i The Survival hanno già 1,6 milioni di iscritti, ma l'immagine di loro con in mano la targa di YouTube sta facendo il giro dei social network. Creato nel 2018, il canale YouTube ha un approccio molto semplice e simile a quello dei canali che hanno avviato questo trend: costruire strutture anche complesse utilizzando materiali come argilla, bambù e legno.")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@633337707153719296> 1") {
  message.reply("<@957067236751855646> è una ragazza di 12 anni di origini italo-marocchine, è stata riconosciuta nel guinnes dei primati per avere un approccio molto geloso con il partner tanto da offendersi perché il vecchio partner ovvero <@633337707153719296> ha espresso la sua opinione sulla bellezza della sua ex fidanzata <@693548922915782727> scrivendo un “ni” e poi dopo 3 giorni le due metà si sono separate ancora e sono tornate a vivere la loro vita, uno da alcolizzato e drogato a merda e l’altra da schiava negra del cazzo.")
  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> perché Andrea pensa solo alla figa?") {
  message.reply("<@633337707153719296> è un esemplare di toro maniaco che ha sempre voglia di scopare bambine in cantina e puttane all’autogrill, una di quelle è <@957067236751855646> in cantina")
  message.delete("<@1057730247841288263> perché Andrea pensa solo alla figa?")
}

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Non molla ce la farai sis") {
    message.channel.send("Ok Colpa di kevin.")

  }

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@705706290847940649>") {
    message.channel.send("In Costruzione")

  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> EYY ZIA") {
    message.channel.send("I polaretti sono gustosi soprattittu quando sono caldi cmq ultima cosa <@959883909867380857> richiessta al piu presto in caff")

  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@665182304754335775> <@633337707153719296> <@1057730247841288263> Attesi in assistenza!") {
    message.reply("Cu cazz")

  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> info") {
  message.channel.send("1 <(Tag)>")
  message.channel.send("2 <(Tag)> ciao")
  message.channel.send("3 <(Tag)> negro")
  message.channel.send("4 <(Tag)> purista")
  message.channel.send("5 <(Tag)> Aiuta lo zammone")
  message.channel.send("6 Ti aiuta lui <(Tag)>")
  message.channel.send("7 <(Tag)> di che colore è la tua Bugatti?6")
  message.channel.send("8 <(Tag)> terrone")
  message.channel.send("9 <(Tag)> motore")
  message.channel.send("10 <(Tag)> banane")
  message.channel.send("11 <(Tag)> kevin")
  message.channel.send("12 <(Tag)> dove sta kevin? ")
  message.channel.send("13 <(Tag)> <@437248803863658508>")
  message.channel.send("14 <(Tag)> <@543903862558425088>")
  message.channel.send("15 <(Tag)> Kein")
  message.channel.send("16 <(Tag)> Yolo")
  message.channel.send("17 <(Tag)> Che cos'è <@760548808810954794>")
  message.channel.send("18 <(Tag)> Che cosa piace a <@702110004618199150>")
  message.channel.send("19 <(Tag)> jajci")
  message.channel.send("20 <(Tag)> <@760548808810954794>")
  message.channel.send("21 <(Tag)> <@665182304754335775>")
  message.channel.send("22 <(Tag)> <@702110004618199150>")
  message.channel.send("23 <(Tag)> Io vado")
  message.channel.send("24 <(Tag)> Jaklič")
  message.channel.send("25 <(Tag)> !P")
  message.channel.send("26 <(Tag)> <@566552680915271680>")
  message.channel.send("27 <(Tag)> Bellavita")
  message.channel.send("28 <(Tag)> Non lo sai")
  message.channel.send("29 <(Tag)> ROZZI")
  message.channel.send("30 <(Tag)> Blauer")
  message.channel.send("31 <(Tag)> Onore e rispetto")
  message.channel.send("32 <(Tag)> <@705706290847940649>")

  message.delete("<@1057730247841288263> info")
}

})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> Vero?") {
    message.channel.send("Ovvio fra")

  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> <@1004124847179309108>") {
    message.channel.send("Ok leo")

  }
  
})

client.on("messageCreate", (message) => {
  if (message.content === "<@1057730247841288263> decidi te") {
    message.delete("<@1057730247841288263> decidi te")
    message.channel.send("Il suo sperma bevuto dalle mie labbra")
    message.channel.send("era la comunione con la terra.")
    message.channel.send("Bevevo con la mia magnifica")
    message.channel.send("esultanza")
    message.channel.send("guardando i suoi occhi neri")
    message.channel.send("che fuggivano come gazzelle.")
    message.channel.send("E mai coltre fu più calda e lontana")
    message.channel.send("e mai fu più feroce")
    message.channel.send("il piacere dentro la carne.")
    message.channel.send("Ci spezzavamo in due")
    message.channel.send("come il timone di una nave")
    message.channel.send("che si era aperta per un lungo viaggio.")
    message.channel.send("Avevamo con noi i viveri")
    message.channel.send("per molti anni ancora")
    message.channel.send("i baci e le speranze")
    message.channel.send("e non credevamo più in Dio")
    message.channel.send("perché eravamo felici.")
    
  }
  
})