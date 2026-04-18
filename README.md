# 🌀 public-apis — Le Jardin Secret des APIs

> *"The best discovery is the one you weren't looking for."*

[![GitHub stars](https://img.shields.io/github/stars/monamijer/public-apis)](https://github.com/monamijer/public-apis/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/monamijer/public-apis)](https://github.com/monamijer/public-apis/network)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)](CONTRIBUTING.md)
[![License](https://img.shields.io/github/license/monamijer/public-apis)](LICENSE)
[![Hacks inside](https://img.shields.io/badge/hacks-inside-ff4500)](HACKS.md)

Ce repo n'est pas une simple liste d'APIs.

C'est un **terrain de jeu pour esprits curieux** — un endroit où tu viens chercher une chose et tu repartes avec trois idées que tu n'attendais pas.

Chaque API ici a été sélectionnée non seulement pour ce qu'elle fait, mais pour **ce qu'elle peut faire d'inattendu**.

---

## 🎲 API Surprise du Moment

> **🧠 Wttr.in** — météo en texte brut dans ton terminal  
> `curl wttr.in/Bujumbura`  
> 💡 *Hack* : Combine avec un script cron pour envoyer la météo de n'importe quelle ville par SMS chaque matin — sans dashboard, sans frontend, sans compte.

*[→ Voir tous les hacks inattendus dans HACKS.md](HACKS.md)*

---

## 🗺️ Table des Matières

- [🕳️ Rabbit Holes — Combos d'APIs](#-rabbit-holes--combos-dapis)
- [🌐 APIs par Catégorie](#-apis-par-catégorie)
- [🧪 Exemples JavaScript](#-exemples-javascript)
- [📖 Guides pour Débutants](#-guides-pour-débutants)
- [🧰 Outils Sans Code](#-outils-sans-code)
- [🚀 Idées de Projets](#-idées-de-projets)
- [🤝 Contribuer](#-contribuer)

---

## 🕳️ Rabbit Holes — Combos d'APIs

Les combinaisons les plus étranges produisent les projets les plus mémorables.

### 🌩️ Combo #1 — "La Météo Émotionnelle"
**Open Meteo + NewsAPI**  
Scrape les manchettes d'une ville + la météo du même jour.  
→ Est-ce que les gens tweakent davantage par temps de pluie ? Les données disent oui.

```js
const weather = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true")
const news = await fetch("https://newsapi.org/v2/everything?q=Paris&apiKey=YOUR_KEY")
```

### 📈 Combo #2 — "Le Prophète Crypto"
**CoinGecko Trending + Open Library**  
Quand un coin apparaît dans les trending, cherche si un livre sur la techno sous-jacente existe.  
→ Les gens qui lisent *avant* d'investir gagnent plus souvent.

### 🌍 Combo #3 — "Le Passeport Invisible"
**REST Countries + Open Exchange Rates**  
Calcule automatiquement dans combien de pays tu peux vivre décemment avec ton salaire.

### 🐱 Combo #4 — "Le Bot Philosophe"
**Cat Facts + Bible API + Quote Garden**  
Génère des citations absurdes mais surprisingly profondes en mixant ces trois sources.

*[→ Voir plus de combos dans docs/combos.md](docs/combos.md)*

---

## 🌐 APIs par Catégorie

### 🐾 Animaux

| API | Description | Auth | HTTPS | 💡 Hack Surprise |
|-----|-------------|------|-------|-----------------|
| [Cat Facts](https://catfact.ninja/) | Faits aléatoires sur les chats | Non | ✅ | Génère un "fait du jour" automatique pour ton bio Instagram |
| [Dog CEO](https://dog.ceo/dog-api/) | Photos aléatoires de chiens | Non | ✅ | Utilise-la comme placeholder d'images pour tes maquettes UI |
| [Axolotl API](https://theaxolotlapi.netlify.app/) | Photos et faits sur les axolotls | Non | ✅ | L'API la plus rare = projet le plus original |
| [PokeAPI](https://pokeapi.co/) | Données complètes Pokémon | Non | ✅ | Génère des "personas" utilisateur aléatoires pour les tests |

### 🌦️ Météo

| API | Description | Auth | HTTPS | 💡 Hack Surprise |
|-----|-------------|------|-------|-----------------|
| [Open Meteo](https://open-meteo.com/) | Prévisions météo gratuites | Non | ✅ | Automatise des décisions (arroser le jardin, sortir ?) |
| [Wttr.in](https://wttr.in/) | Météo en ASCII dans le terminal | Non | ✅ | `curl wttr.in` — zéro code requis |
| [WeatherAPI](https://www.weatherapi.com/) | Données météo mondiales | API Key | ✅ | Historique météo pour des analyses data |
| [7Timer](http://www.7timer.info/) | Météo astro pour astronomes | Non | ✅ | Sait quand le ciel est clair pour observer les étoiles |

### 📰 Actualités

| API | Description | Auth | HTTPS | 💡 Hack Surprise |
|-----|-------------|------|-------|-----------------|
| [NewsAPI](https://newsapi.org/) | Headlines mondiales | API Key | ✅ | Détecte les topics qui montent AVANT qu'ils soient viraux |
| [GNews](https://gnews.io/) | Agrégateur Google News | API Key | ✅ | Surveillance de mots-clés pour la veille concurrentielle |
| [The Guardian](https://open-platform.theguardian.com/) | Contenu éditorial complet | API Key | ✅ | Archive de 2 millions d'articles depuis 1999 |
| [NYT](https://developer.nytimes.com/) | Archives New York Times | API Key | ✅ | Cherche comment les médias couvraient un sujet il y a 30 ans |

### 💰 Cryptomonnaies

| API | Description | Auth | HTTPS | 💡 Hack Surprise |
|-----|-------------|------|-------|-----------------|
| [CoinGecko](https://www.coingecko.com/en/api) | Données marché crypto | Non | ✅ | Endpoint `/trending` montre les coins AVANT les médias |
| [CoinDesk](https://www.coindesk.com/coindesk-api) | Index prix Bitcoin | Non | ✅ | Historique BTC depuis 2010 |
| [Binance](https://binance-docs.github.io/apidocs/spot/en/) | Exchange en temps réel | API Key | ✅ | WebSocket pour flux de prix en temps réel |
| [CryptoCompare](https://min-api.cryptocompare.com/) | Multi-exchange, multi-coin | API Key | ✅ | Compare les prix entre exchanges pour détecter l'arbitrage |

### 🌍 Géographie & Pays

| API | Description | Auth | HTTPS | 💡 Hack Surprise |
|-----|-------------|------|-------|-----------------|
| [REST Countries](https://restcountries.com/) | Infos sur tous les pays | Non | ✅ | Génère des quiz géo ou des maps de données |
| [Open Exchange Rates](https://openexchangerates.org/) | Taux de change | API Key | ✅ | Convertisseur de salaire selon le coût de la vie |
| [IP-API](http://ip-api.com/) | Géolocalisation par IP | Non | ✅ | Personnalise le contenu selon le pays visiteur |
| [TimeZoneDB](https://timezonedb.com/) | Fuseaux horaires mondiaux | API Key | ✅ | Planificateur de réunions pour équipes distribuées |

### 🎵 Musique

| API | Description | Auth | HTTPS | 💡 Hack Surprise |
|-----|-------------|------|-------|-----------------|
| [Spotify](https://developer.spotify.com/documentation/web-api/) | Bibliothèque musicale complète | OAuth | ✅ | Analyse l'évolution de tes goûts musicaux dans le temps |
| [MusicBrainz](https://musicbrainz.org/doc/MusicBrainz_API) | Base de données musicale ouverte | Non | ✅ | Trouve des connexions entre artistes inconnus |
| [Last.fm](https://www.last.fm/api) | Statistiques d'écoute | API Key | ✅ | Génère ton "rapport d'écoute" personnalisé |
| [Jamendo](https://developer.jamendo.com/v3.0) | Musique libre de droits | API Key | ✅ | Soundtrack gratuit pour tes projets vidéo |

### 📚 Livres & Savoir

| API | Description | Auth | HTTPS | 💡 Hack Surprise |
|-----|-------------|------|-------|-----------------|
| [Open Library](https://openlibrary.org/developers/api) | 20M+ livres | Non | ✅ | Génère une bibliothèque virtuelle de ta liste de lecture |
| [Google Books](https://developers.google.com/books) | Livres + extraits | API Key | ✅ | Trouve des livres similaires à ceux que tu aimes |
| [Gutenberg](https://gutendex.com/) | 70k livres domaine public | Non | ✅ | Analyse textuelle de classiques littéraires |
| [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page) | L'encyclopédie libre | Non | ✅ | Génère des résumés auto de n'importe quel sujet |

### 😂 Fun & Absurde

| API | Description | Auth | HTTPS | 💡 Hack Surprise |
|-----|-------------|------|-------|-----------------|
| [JokeAPI](https://jokeapi.dev/) | Blagues catégorisées | Non | ✅ | Bot Slack qui envoie une blague à 9h pour démarrer la semaine |
| [Advice Slip](https://api.adviceslip.com/) | Conseils aléatoires | Non | ✅ | "Fortune cookie" CLI pour ton terminal |
| [Bored API](https://www.boredapi.com/) | Idées d'activités | Non | ✅ | Générateur d'idées quand tu procrastines |
| [Chuck Norris](https://api.chucknorris.io/) | Faits Chuck Norris | Non | ✅ | Template pour créer des blagues avec n'importe quel nom |

### 🛠️ Utilitaires Développeurs

| API | Description | Auth | HTTPS | 💡 Hack Surprise |
|-----|-------------|------|-------|-----------------|
| [GitHub](https://docs.github.com/en/rest) | Toute la plateforme GitHub | OAuth | ✅ | Analyse les tendances des repos avant tout le monde |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | Fausse API REST | Non | ✅ | Prototype une app sans backend en 5 minutes |
| [Lorem Picsum](https://picsum.photos/) | Images placeholder | Non | ✅ | `https://picsum.photos/800/600` — image aléatoire instantanée |
| [ipify](https://www.ipify.org/) | Ton IP publique | Non | ✅ | `curl api.ipify.org` — une ligne, ton IP |
| [QR Code API](https://goqr.me/api/) | Génère des QR codes | Non | ✅ | QR code de n'importe quelle URL en une requête GET |

---

## 🧪 Exemples JavaScript

### Bitcoin price en 3 lignes

```js
const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
const data = await res.json()
console.log("₿", data.bpi.USD.rate, "USD")
```

### Météo terminal

```bash
curl "https://wttr.in/Paris?format=3"
# Paris: ⛅️  +18°C
```

### Conseil aléatoire du matin

```js
const { slip } = await (await fetch("https://api.adviceslip.com/advice")).json()
console.log("💡", slip.advice)
```

### Image placeholder magique

```html
<img src="https://picsum.photos/seed/monprojet/400/300" alt="placeholder">
<!-- Même seed = même image. Toujours. -->
```

*[→ Voir tous les exemples dans examples/](examples/)*

---

## 📖 Guides pour Débutants

Tu n'as jamais utilisé une API ? Commence ici.

| Guide | Contenu |
|-------|---------|
| [00 — Qu'est-ce qu'une API ?](docs/00-api-quest.md) | L'analogie du serveur de restaurant |
| [01 — Ta première requête](docs/01-first-request.md) | `fetch()` en 5 minutes |
| [02 — Authentification](docs/02-auth.md) | API Keys, OAuth, Bearer tokens |
| [03 — REST vs GraphQL](docs/03-rest-vs-graphql.md) | Quand utiliser quoi |
| [🧨 Hacks par Sérendipité](docs/hacks-serendipity.md) | Usages inattendus |
| [🔀 Combos d'APIs](docs/combos.md) | Quand deux APIs font mieux qu'une |

---

## 🧰 Outils Sans Code

Tu n'as pas besoin de coder pour utiliser des APIs.

| Outil | Usage | Niveau |
|-------|-------|--------|
| [Postman](https://postman.com) | Tester et explorer des APIs | Débutant |
| [Zapier](https://zapier.com) | Automatiser des workflows | Zéro code |
| [Make](https://make.com) | Automatisation visuelle avancée | Zéro code |
| [Pipedream](https://pipedream.com) | Workflows + code si besoin | Hybride |
| [Airtable](https://airtable.com) | Tableur connecté aux APIs | Débutant |
| [n8n](https://n8n.io) | Automatisation open-source | Intermédiaire |
| [IFTTT](https://ifttt.com) | Connecter des apps simplement | Zéro code |
| [Retool](https://retool.com) | Dashboards internes rapides | Low-code |

---

## 🚀 Idées de Projets

| Projet | APIs utilisées | Difficulté |
|--------|---------------|------------|
| Dashboard météo personnel | Open Meteo + Wttr.in | ⭐ |
| Bot "fait du jour" | Cat Facts + Advice Slip | ⭐ |
| Tracker crypto minimaliste | CoinGecko | ⭐⭐ |
| Agrégateur de news filtré | NewsAPI + Guardian | ⭐⭐ |
| Quiz géographie interactif | REST Countries + Wikipedia | ⭐⭐ |
| Analyse de tes goûts musicaux | Spotify + Last.fm | ⭐⭐⭐ |
| Détecteur de tendances | CoinGecko Trending + NewsAPI | ⭐⭐⭐ |
| Assistant CLI du matin | Wttr.in + Advice Slip + Cat Facts | ⭐⭐ |

*[→ Guides complets dans projects/](projects/)*

---

## 🤝 Contribuer

Ce repo vit grâce aux contributions.

Tu peux ajouter :
- une nouvelle API avec son hack surprise
- un combo inattendu de deux APIs
- un exemple de code minimal
- un guide ou tutoriel
- un hack dans [HACKS.md](HACKS.md)

```bash
git clone https://github.com/monamijer/public-apis
git checkout -b mon-hack
# Ajoute ton API ou ton hack
git commit -m "feat: hack #042 — [description courte]"
git push origin mon-hack
# Ouvre une Pull Request
```

**Format pour une nouvelle API :**
```markdown
| [Nom API](url) | Description courte | Auth? | ✅ | 💡 Le hack inattendu en une phrase |
```

---

## ⭐ Support

Si ce repo t'a donné une idée :

⭐ **Star** — ça m'aide à continuer  
🍴 **Fork** — fais-en quelque chose  
🧨 **[Lis HACKS.md](HACKS.md)** — pour la vraie sérendipité  
🎮 **[Ouvre la démo](demo/index.html)** — appuie sur "Surprise me"

---

*Made with curiosity. Maintained by serendipity.*

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
