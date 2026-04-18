# 🔀 Combos d'APIs — Quand Deux APIs Font Mieux qu'Une

> La magie arrive quand deux sources de données sans rapport se rencontrent.

---

## Pourquoi combiner des APIs ?

Une API seule te donne des données.  
Deux APIs croisées te donnent de l'**intelligence**.

---

## Combo #1 — "La Météo Émotionnelle"

**Open Meteo + NewsAPI**

La météo influence-t-elle le ton des nouvelles ? Ce combo te permet de le vérifier.

```js
async function meteoEmotionnelle(ville, lat, lon, newsApiKey) {
  const [meteo, news] = await Promise.all([
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`).then(r => r.json()),
    fetch(`https://newsapi.org/v2/everything?q=${ville}&language=fr&pageSize=10&apiKey=${newsApiKey}`).then(r => r.json())
  ])

  const pluie = meteo.current_weather.weathercode >= 51
  const titres = news.articles.map(a => a.title).join(" ")

  console.log(`Météo : ${pluie ? "Pluie 🌧" : "Soleil ☀️"}`)
  console.log(`Actualités (10 premiers titres) :`)
  news.articles.slice(0, 5).forEach(a => console.log(" -", a.title))
}
```

**Cas d'usage** : Analyse sur 30 jours → corrélation météo/sentiment des médias.

---

## Combo #2 — "Le Prophète Crypto"

**CoinGecko Trending + NewsAPI**

Les coins trending sur CoinGecko apparaissent souvent dans les médias 24-48h plus tard.

```js
async function propheteCrypto(newsApiKey) {
  const res = await fetch("https://api.coingecko.com/api/v3/search/trending")
  const { coins } = await res.json()

  for (const { item } of coins) {
    const news = await fetch(
      `https://newsapi.org/v2/everything?q=${item.name}&apiKey=${newsApiKey}&pageSize=3`
    ).then(r => r.json())

    const mentions = news.totalResults

    if (mentions === 0) {
      console.log(`⚡ SIGNAL : ${item.name} (${item.symbol}) trending mais ABSENT des news`)
    } else {
      console.log(`📰 ${item.name} — ${mentions} articles`)
    }
  }
}
```

---

## Combo #3 — "Le Passeport Invisible"

**REST Countries + Open Exchange Rates**

Dans combien de pays ton salaire est-il confortable ?

```js
async function passeportInvisible(salaireMensuelUSD) {
  const countries = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,region,currencies"
  ).then(r => r.json())

  // Coût de vie moyen très simplifié (USD/mois)
  const coutMoyen = { Africa: 350, Americas: 900, Asia: 600, Europe: 1600, Oceania: 2000 }

  const accessible = countries
    .filter(c => {
      const cout = coutMoyen[c.region] || 800
      return salaireMensuelUSD > cout * 1.3
    })
    .map(c => c.name.common)

  console.log(`Avec ${salaireMensuelUSD}$/mois, tu peux vivre confortablement dans ${accessible.length} pays :`)
  console.log(accessible.join(", "))
}

passeportInvisible(2000)
```

---

## Combo #4 — "Le Bot Philosophe Absurde"

**Cat Facts + Advice Slip**

Fusion de deux sources sans rapport → résultats étonnamment profonds.

```js
async function philosophe() {
  const [cat, advice] = await Promise.all([
    fetch("https://catfact.ninja/fact").then(r => r.json()),
    fetch("https://api.adviceslip.com/advice").then(r => r.json())
  ])

  // Prend les 5 premiers mots du fait + les 5 derniers du conseil
  const debut = cat.fact.split(" ").slice(0, 5).join(" ")
  const fin = advice.slip.advice.split(" ").slice(-5).join(" ")

  console.log(`🧘 "${debut}... ${fin}"`)
  // → "Cats can hear sounds too... believe in what you do."
}

setInterval(philosophe, 4000)
```

---

## Combo #5 — "L'Assistant CLI du Matin"

**Wttr.in + Advice Slip + JokeAPI**

Un briefing complet en 3 requêtes, zéro clé API.

```bash
#!/bin/bash
echo "━━━━━━━━━━━━━━━━━━━━"
echo "☀️  MORNING BRIEF"
echo "━━━━━━━━━━━━━━━━━━━━"

echo ""; echo "🌤 MÉTÉO"
curl -s "wttr.in/$(curl -s ipinfo.io/city)?format=3"

echo ""; echo "💡 CONSEIL"
curl -s https://api.adviceslip.com/advice | python3 -c \
  "import sys,json; print(json.load(sys.stdin)['slip']['advice'])"

echo ""; echo "😄 BLAGUE"
curl -s "https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single" | python3 -c \
  "import sys,json; print(json.load(sys.stdin).get('joke','...'))"

echo ""
```

---

## Ajouter un Combo

Format dans [HACKS.md](../HACKS.md) ou ici :

```markdown
## Combo #N — "Nom Évocateur"

**API1 + API2**

Description du combo en une phrase.

\`\`\`js
// Code minimal et fonctionnel
\`\`\`

**Cas d'usage** : Ce que ça permet concrètement.
```

[→ Contribuer](../CONTRIBUTING.md)
