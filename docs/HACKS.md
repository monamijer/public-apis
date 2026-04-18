# 🧨 HACKS.md — Usages Inattendus des APIs Publiques

> *"Every API is a locked door. This file is the skeleton key."*

Ce fichier recense des utilisations **non-évidentes, créatives, parfois absurdes** des APIs publiques.  
Ce ne sont pas des bugs. Ce ne sont pas des failles de sécurité.  
Ce sont des **détournements légitimes** — des façons de voir autrement.

---

## 📖 Comment lire ce fichier

Chaque hack a :
- **Le setup** — ce qu'il faut (souvent rien)
- **Le code** — souvent 5-10 lignes
- **Le twist** — pourquoi c'est plus malin qu'il n'y paraît
- **L'aller plus loin** — pour les curieux

---

## 🎯 Index

| # | Nom | APIs | Difficulté |
|---|-----|------|-----------|
| 001 | [Terminal météo en une ligne](#hack-001--terminal-météo-en-une-ligne) | Wttr.in | ⭐ |
| 002 | [L'Oracle du Matin](#hack-002--loracle-du-matin) | Advice Slip + Cat Facts | ⭐ |
| 003 | [QR Code de n'importe quoi](#hack-003--qr-code-de-nimporte-quoi) | QR Code API | ⭐ |
| 004 | [Détecter les tendances crypto avant les médias](#hack-004--détecter-les-tendances-crypto-avant-les-médias) | CoinGecko | ⭐⭐ |
| 005 | [Placeholder d'image déterministe](#hack-005--placeholder-dimage-déterministe) | Lorem Picsum | ⭐ |
| 006 | [Ton IP en une seconde](#hack-006--ton-ip-en-une-seconde) | ipify | ⭐ |
| 007 | [Générer une bibliothèque de lecture aléatoire](#hack-007--générer-une-bibliothèque-de-lecture-aléatoire) | Open Library | ⭐⭐ |
| 008 | [La Météo Émotionnelle d'une Ville](#hack-008--la-météo-émotionnelle-dune-ville) | Open Meteo + NewsAPI | ⭐⭐⭐ |
| 009 | [Assistant CLI du Matin](#hack-009--assistant-cli-du-matin) | Wttr.in + Advice + Jokes | ⭐⭐ |
| 010 | [Générateur de Personas Aléatoires](#hack-010--générateur-de-personas-aléatoires) | PokeAPI + Random User | ⭐⭐ |
| 011 | [Carte de Richesse Relative](#hack-011--carte-de-richesse-relative) | REST Countries + Exchange Rates | ⭐⭐⭐ |
| 012 | [Le Bot Philosophe Absurde](#hack-012--le-bot-philosophe-absurde) | Cat Facts + Bible API + Advice | ⭐ |
| 013 | [Détecteur de Pays par IP](#hack-013--détecteur-de-pays-par-ip) | IP-API | ⭐ |
| 014 | [Archive Sentimentale d'un Sujet](#hack-014--archive-sentimentale-dun-sujet) | Guardian API | ⭐⭐⭐ |
| 015 | [Musique Libre Pour Ton Projet en 30s](#hack-015--musique-libre-pour-ton-projet-en-30s) | Jamendo | ⭐⭐ |

---

## Hack #001 — Terminal Météo en Une Ligne

**Setup** : Un terminal. C'est tout.

```bash
curl wttr.in
```

```bash
# Météo d'une ville spécifique
curl wttr.in/Bujumbura

# Format compact (une ligne)
curl "wttr.in/Paris?format=3"
# → Paris: ⛅️  +18°C

# Format JSON pour parser
curl "wttr.in/Tokyo?format=j1"
```

**Le twist** : Wttr.in est une API REST déguisée en service humain. Elle retourne du texte ASCII magnifiquement formaté *et* du JSON si tu lui demandes. Zéro compte, zéro clé, zéro frontend.

**Aller plus loin** : Mets `curl wttr.in/$(curl -s ipinfo.io/city)?format=3` dans ton `.bashrc` pour avoir la météo locale à chaque ouverture de terminal.

---

## Hack #002 — L'Oracle du Matin

**Setup** : Node.js ou un navigateur.

```js
async function oracle() {
  const [advice, cat] = await Promise.all([
    fetch("https://api.adviceslip.com/advice").then(r => r.json()),
    fetch("https://catfact.ninja/fact").then(r => r.json())
  ])
  
  console.log("🔮 Conseil :", advice.slip.advice)
  console.log("🐱 Fait du jour :", cat.fact)
}

oracle()
```

**Le twist** : Lance ça dans un cron job chaque matin à 8h et envoie-toi le résultat par email ou notification. Deux APIs gratuites, zéro clé, un rituel quotidien.

**Aller plus loin** : Ajoute `https://api.quotable.io/random` pour une citation de philosophe.

---

## Hack #003 — QR Code de N'importe Quoi

**Setup** : Un navigateur ou une requête HTTP.

```
https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://github.com/monamijer/public-apis
```

C'est une image. Tu peux l'utiliser directement dans une balise `<img>` :

```html
<img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=TON_URL_ICI">
```

**Le twist** : Pas de compte, pas de clé. Tu mets l'URL dans le paramètre `data=` et tu obtiens une image QR directement utilisable. Génère des QR codes à la volée pour des cartes de visite, affiches, présentations.

**Aller plus loin** : `data=` accepte n'importe quel texte, pas juste des URLs. Encode un vCard, un numéro de téléphone, une coordonnée GPS (`geo:48.8566,2.3522`).

---

## Hack #004 — Détecter les Tendances Crypto Avant les Médias

**Setup** : 5 minutes + Node.js.

```js
async function tendancesCrypto() {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending")
  const { coins } = await res.json()
  
  console.log("🔥 Trending maintenant :")
  coins.forEach(({ item }) => {
    console.log(`  ${item.symbol} — ${item.name} (rank #${item.market_cap_rank})`)
  })
}

tendancesCrypto()
```

**Le twist** : CoinGecko met à jour ses trending coins toutes les quelques minutes. Les médias crypto en parlent 24-48h plus tard. Lance ce script en cron toutes les heures et tu verras des patterns que les journalistes n'ont pas encore vus.

**Aller plus loin** : Croise avec NewsAPI pour vérifier si le coin est déjà mentionné dans les actualités. Si trending sur CoinGecko mais absent des news → signal fort.

```js
const mentions = await fetch(
  `https://newsapi.org/v2/everything?q=${item.name}&apiKey=YOUR_KEY&pageSize=5`
).then(r => r.json())

if (mentions.totalResults === 0) {
  console.log(`⚡ ${item.name} trending mais INVISIBLE dans les médias`)
}
```

---

## Hack #005 — Placeholder d'Image Déterministe

**Setup** : HTML. Rien d'autre.

```html
<!-- Image aléatoire -->
<img src="https://picsum.photos/800/400">

<!-- MÊME image à chaque fois (seed = identifiant) -->
<img src="https://picsum.photos/seed/monprojet/800/400">

<!-- Grayscale -->
<img src="https://picsum.photos/seed/monprojet/800/400?grayscale">

<!-- Blur -->
<img src="https://picsum.photos/seed/monprojet/800/400?blur=5">
```

**Le twist** : Le paramètre `seed` est magique. `seed/monprojet` donnera **toujours** la même image, sur tous les navigateurs, pour tous les utilisateurs. Parfait pour des maquettes où tu veux de la cohérence visuelle sans uploader de vraies photos.

**Aller plus loin** : Utilise le nom d'un utilisateur comme seed pour des avatars déterministes : `picsum.photos/seed/alice/100/100` donnera toujours "l'avatar d'Alice".

---

## Hack #006 — Ton IP en Une Seconde

```bash
curl api.ipify.org
# → 203.0.113.42

curl api.ipify.org?format=json
# → {"ip":"203.0.113.42"}
```

**Le twist** : Cette API ne fait qu'une chose — te dire ton IP publique. Mais c'est exactement ce dont tu as besoin pour 50 scripts différents (détection de VPN, logging, whitelisting, debug réseau). Zéro overhead.

**Aller plus loin** : Combine avec IP-API pour la géolocalisation :
```bash
IP=$(curl -s api.ipify.org)
curl "http://ip-api.com/json/$IP?fields=country,city,isp"
```

---

## Hack #007 — Générer une Bibliothèque de Lecture Aléatoire

```js
async function bibliothequeAleatoire(sujet) {
  const res = await fetch(
    `https://openlibrary.org/search.json?subject=${sujet}&limit=10&language=fre`
  )
  const { docs } = await res.json()
  
  docs.forEach(book => {
    const annee = book.first_publish_year || "?"
    console.log(`📚 ${book.title} (${annee}) — ${book.author_name?.[0] || "Inconnu"}`)
  })
}

bibliothequeAleatoire("philosophie")
bibliothequeAleatoire("informatique")
bibliothequeAleatoire("afrique")
```

**Le twist** : Open Library a 20 millions de livres, un index de sujets, et une API entièrement gratuite. Tu peux construire une "liste de lecture dynamique" sur n'importe quel sujet sans jamais toucher à une base de données.

**Aller plus loin** : `https://covers.openlibrary.org/b/isbn/9780385333481-L.jpg` — couvertures de livres par ISBN. Parfait pour un UI de bibliothèque.

---

## Hack #008 — La Météo Émotionnelle d'une Ville

Quand la pluie tombe, les articles changent de ton ?

```js
async function meteoEmotionnelle(ville, pays, apiKey) {
  // Coordonnées de la ville (hardcodé ou via une autre API)
  const coords = { Paris: [48.85, 2.35], Bujumbura: [-3.38, 29.36] }
  const [lat, lon] = coords[ville]
  
  const [meteo, news] = await Promise.all([
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
      .then(r => r.json()),
    fetch(`https://newsapi.org/v2/everything?q=${ville}&language=fr&pageSize=5&apiKey=${apiKey}`)
      .then(r => r.json())
  ])
  
  const temp = meteo.current_weather.temperature
  const weatherCode = meteo.current_weather.weathercode
  const pluie = weatherCode >= 51 && weatherCode <= 99
  
  console.log(`🌡️ ${ville} : ${temp}°C | ${pluie ? "🌧️ Pluie" : "☀️ Beau temps"}`)
  console.log(`📰 Dernières news :`)
  news.articles?.slice(0, 3).forEach(a => console.log(`  - ${a.title}`))
  
  return { ville, temp, pluie, headlines: news.articles }
}
```

**Le twist** : Lance ce script sur plusieurs villes chaque jour pendant un mois. Analyse si les headlines sont plus négatives par mauvais temps. Spoiler : souvent oui.

---

## Hack #009 — Assistant CLI du Matin

Un script qui te donne tout ce dont tu as besoin en ouvrant le terminal.

```bash
#!/bin/bash
# morning.sh — Lance avec : chmod +x morning.sh && ./morning.sh

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "☀️  GOOD MORNING"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Météo
echo ""
echo "🌤  MÉTÉO"
curl -s "wttr.in/$(curl -s ipinfo.io/city)?format=3"

# Conseil du jour
echo ""
echo "💡 CONSEIL DU JOUR"
curl -s https://api.adviceslip.com/advice | python3 -c "import sys,json; print(json.load(sys.stdin)['slip']['advice'])"

# Bitcoin
echo ""
echo "₿  BITCOIN"
curl -s "https://api.coindesk.com/v1/bpi/currentprice.json" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['bpi']['USD']['rate'], 'USD')"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
```

**Le twist** : Ajoute ce script dans ton `.bashrc` ou `.zshrc` avec `./morning.sh` pour l'avoir à chaque session. Zéro clé API, zéro compte.

---

## Hack #010 — Générateur de Personas Aléatoires

Pour les UX designers qui ont besoin de "proto-personas" pour leurs maquettes.

```js
async function genererPersona() {
  // Pokémon comme "classe" de persona
  const pokeId = Math.floor(Math.random() * 151) + 1
  const [poke, user] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then(r => r.json()),
    fetch("https://randomuser.me/api/?nat=fr,be,ch").then(r => r.json())
  ])
  
  const u = user.results[0]
  
  return {
    nom: `${u.name.first} ${u.name.last}`,
    age: u.dob.age,
    ville: u.location.city,
    email: u.email,
    photo: u.picture.large,
    archetype: poke.name,  // "bulbasaur", "charizard" etc. comme archétype
    traits: poke.types.map(t => t.type.name)  // "fire", "water" etc.
  }
}

const persona = await genererPersona()
console.log(persona)
```

**Le twist** : Les types Pokémon (`fire`, `water`, `psychic`, `ghost`...) font des archétypes de persona étonnamment parlants. "Utilisateur de type Ghost" = introverti, difficile à atteindre. "Type Fire" = impulsif, early adopter.

---

## Hack #011 — Carte de Richesse Relative

Combien de pays peux-tu te payer avec ton salaire ?

```js
async function richesseRelative(salaireMensuelUSD) {
  const [countries, rates] = await Promise.all([
    fetch("https://restcountries.com/v3.1/all?fields=name,currencies,region").then(r => r.json()),
    fetch("https://open.er-api.com/v6/latest/USD").then(r => r.json())
  ])
  
  // Coût de la vie moyen simplifié ($ / mois pour vivre confortablement)
  const coutVie = {
    "AF": 300, "NA": 1500, "SA": 600, "EU": 1800, "AS": 700, "OC": 2200
  }
  
  countries.forEach(country => {
    const regionCode = country.region?.substring(0, 2).toUpperCase()
    const cout = coutVie[regionCode] || 1000
    
    if (salaireMensuelUSD > cout * 1.5) {
      console.log(`✅ ${country.name.common} (${country.region}) — Vie confortable`)
    }
  })
}

richesseRelative(2000)
```

**Le twist** : Ce n'est pas une liste d'"où vivre pas cher". C'est un outil de *perspective*. Quand tu vois que 2000$/mois te mettrait dans le top 5% de 150 pays, ça change ta relation à l'argent.

---

## Hack #012 — Le Bot Philosophe Absurde

```js
async function philosopheAbsurde() {
  const [cat, advice] = await Promise.all([
    fetch("https://catfact.ninja/fact").then(r => r.json()),
    fetch("https://api.adviceslip.com/advice").then(r => r.json())
  ])
  
  // Fusion absurde
  const catWords = cat.fact.split(" ").slice(0, 5).join(" ")
  const adviceWords = advice.slip.advice.split(" ").slice(-5).join(" ")
  
  console.log(`🧘 "${catWords}... ${adviceWords}"`)
  // → "Cats can rotate their ears... believe in yourself."
  // Curieusement profond.
}

setInterval(philosopheAbsurde, 3000) // Une sagesse toutes les 3 secondes
```

**Le twist** : La combinaison de deux sources sans rapport produit des phrases qui *ressemblent* à de la philosophie. Parfait pour un screensaver, un bot Twitter, ou juste pour rire.

---

## Hack #013 — Détecteur de Pays par IP

```js
async function ouEstCetteIP(ip) {
  const res = await fetch(`http://ip-api.com/json/${ip}?fields=country,city,isp,org,mobile,proxy`)
  const data = await res.json()
  
  console.log(`📍 ${data.city}, ${data.country}`)
  console.log(`🏢 Opérateur : ${data.isp}`)
  console.log(`📱 Mobile : ${data.mobile}`)
  console.log(`🎭 Proxy/VPN : ${data.proxy}`)
  
  return data
}

// Ton IP actuelle
const monIP = await fetch("https://api.ipify.org?format=json").then(r => r.json())
ouEstCetteIP(monIP.ip)
```

**Le twist** : Le champ `proxy: true` détecte les VPNs courants. Utile pour comprendre ton audience, filtrer des accès, ou juste vérifier si ton VPN fonctionne vraiment.

---

## Hack #014 — Archive Sentimentale d'un Sujet

Comment les médias ont-ils couvert un sujet au fil des années ?

```js
async function archiveSentimentale(sujet, apiKey) {
  const annees = [2010, 2015, 2018, 2020, 2022, 2024]
  
  for (const annee of annees) {
    const res = await fetch(
      `https://content.guardianapis.com/search?q=${sujet}&from-date=${annee}-01-01&to-date=${annee}-12-31&page-size=5&api-key=${apiKey}`
    )
    const { response } = await res.json()
    
    console.log(`\n📅 ${annee} — ${response.total} articles sur "${sujet}"`)
    response.results?.slice(0, 2).forEach(a => console.log(`  → ${a.webTitle}`))
  }
}

archiveSentimentale("artificial intelligence", "test")
// Remplace "test" par ta vraie clé Guardian (gratuite)
```

**Le twist** : Guardian a archivé 2 millions d'articles depuis 1999 et donne accès libre avec une clé gratuite. Tu peux voir comment un sujet est passé de niche à mainstream, suivre l'évolution du vocabulaire, détecter quand la presse a "découvert" quelque chose que la tech savait depuis des années.

---

## Hack #015 — Musique Libre Pour Ton Projet en 30s

```js
async function musiquePourProjet(genre, apiKey) {
  const res = await fetch(
    `https://api.jamendo.com/v3.0/tracks/?client_id=${apiKey}&format=json&limit=5&tags=${genre}&license_cc=by`
  )
  const { results } = await res.json()
  
  results.forEach(track => {
    console.log(`🎵 ${track.name} — ${track.artist_name}`)
    console.log(`   ▶️  ${track.audio}`)
    console.log(`   📄 Licence : ${track.license_ccurl}`)
  })
}

// Clé gratuite sur https://devportal.jamendo.com
musiquePourProjet("ambient", "YOUR_CLIENT_ID")
```

**Le twist** : Jamendo a 600 000+ morceaux sous licence Creative Commons. Tous librement utilisables pour des projets commerciaux et non-commerciaux. Tu trouveras une musique de fond pour ta démo, ta vidéo, ou ton app en moins de 30 secondes.

---

## 🤝 Ajouter ton Hack

Tu as trouvé un usage inattendu d'une API publique ?

```markdown
## Hack #0XX — Titre Court et Percutant

**Setup** : Ce qu'il faut pour que ça marche.

\`\`\`js
// Ton code ici — minimum viable, maximum impact
\`\`\`

**Le twist** : Pourquoi c'est plus malin qu'il n'y paraît.

**Aller plus loin** : La version améliorée pour les curieux.
```

Ouvre une Pull Request avec ton hack numéroté.  
Le seul critère : **ça doit surprendre quelqu'un**.

---

*"The most dangerous hack is the one that looks too simple to work."*

[![Contribuer](https://img.shields.io/badge/Ajouter_un_hack-brightgreen)](CONTRIBUTING.md)
