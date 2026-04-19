
const APIS = [
  {
    id: "advice",
    name: "Advice Slip",
    badge: "SAGESSE",
    fetch: async () => {
      const r = await fetch("https://api.adviceslip.com/advice")
      const d = await r.json()
      return { type: "fact", data: d.slip.advice, meta: `#${d.slip.id}` }
    },
    title: "Un conseil du hasard",
    hack: "Lance ce script chaque matin via cron pour te créer un rituel sans aucun compte ni app.",
    code: `curl https://api.adviceslip.com/advice\n// → {"slip":{"id":42,"advice":"..."}}`,
    tags: ["gratuit", "no-auth", "fun"],
    url: "https://api.adviceslip.com"
  },
  {
    id: "catfact",
    name: "Cat Facts",
    badge: "ANIMAUX",
    fetch: async () => {
      const r = await fetch("https://catfact.ninja/fact")
      const d = await r.json()
      return { type: "fact", data: d.fact }
    },
    title: "Fait inattendu sur les chats",
    hack: "Combine avec Advice Slip pour créer un 'philosophe absurde' — les phrases sont étrangement profondes.",
    code: `curl https://catfact.ninja/fact\n// → {"fact":"...","length":42}`,
    tags: ["gratuit", "no-auth", "animaux"],
    url: "https://catfact.ninja"
  },
  {
    id: "dogimage",
    name: "Dog CEO",
    badge: "ANIMAUX",
    fetch: async () => {
      const r = await fetch("https://dog.ceo/api/breeds/image/random")
      const d = await r.json()
      const breedMatch = d.message.match(/breeds\/([^/]+)/)
      const breed = breedMatch ? breedMatch[1].replace(/-/g,' ') : "chien"
      return { type: "image", data: d.message, caption: `Race : ${breed}` }
    },
    title: "Photo de chien aléatoire",
    hack: "Utilise cette API pour les images placeholder dans tes maquettes — infiniment plus fun qu'un gris uni.",
    code: `curl https://dog.ceo/api/breeds/image/random\n// → {"message":"https://images.dog.ceo/...","status":"success"}`,
    tags: ["gratuit", "no-auth", "images"],
    url: "https://dog.ceo"
  },
  {
    id: "joke",
    name: "JokeAPI",
    badge: "FUN",
    fetch: async () => {
      const r = await fetch("https://v2.jokeapi.dev/joke/Programming,Misc?safe-mode&type=single")
      const d = await r.json()
      return { type: "fact", data: d.joke || "Pas de blague cette fois...", meta: `Catégorie : ${d.category}` }
    },
    title: "Une blague du monde du dev",
    hack: "Bot Slack avec un webhook : envoie une blague dev chaque lundi matin. 10 lignes de code total.",
    code: `fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single")\n  .then(r => r.json())\n  .then(d => console.log(d.joke))`,
    tags: ["gratuit", "no-auth", "fun"],
    url: "https://jokeapi.dev"
  },
  {
    id: "bitcoin",
    name: "CoinDesk",
    badge: "CRYPTO",
    fetch: async () => {
      const r = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      const d = await r.json()
      return {
        type: "data",
        data: [
          { key: "Bitcoin USD", val: "$" + d.bpi.USD.rate, highlight: true },
          { key: "Bitcoin EUR", val: "€" + d.bpi.EUR.rate, highlight: true },
          { key: "Mis à jour", val: d.time.updated, highlight: false }
        ]
      }
    },
    title: "Prix Bitcoin en temps réel",
    hack: "Combine avec CoinGecko /trending pour voir les coins qui montent AVANT que les médias en parlent.",
    code: `curl https://api.coindesk.com/v1/bpi/currentprice.json\n// → prix BTC en USD, EUR, GBP en temps réel`,
    tags: ["gratuit", "no-auth", "crypto"],
    url: "https://coindesk.com/coindesk-api"
  },
  {
    id: "weather",
    name: "Open Meteo",
    badge: "MÉTÉO",
    fetch: async () => {
      // Bujumbura coords (user location)
      const r = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=-3.38&longitude=29.36&current_weather=true&timezone=auto"
      )
      const d = await r.json()
      const w = d.current_weather
      const conditions = {
        0: "☀️ Ciel dégagé", 1: "🌤 Principalement dégagé",
        2: "⛅ Partiellement nuageux", 3: "☁️ Nuageux",
        45: "🌫 Brouillard", 48: "🌫 Brouillard givrant",
        51: "🌦 Bruine légère", 61: "🌧 Pluie légère",
        71: "🌨 Neige légère", 80: "🌦 Averses",
        95: "⛈ Orage"
      }
      const desc = conditions[w.weathercode] || "🌡 Données météo"
      return {
        type: "data",
        data: [
          { key: "Bujumbura — " + desc, val: w.temperature + "°C", highlight: true },
          { key: "Vent", val: w.windspeed + " km/h", highlight: false },
          { key: "Direction vent", val: w.winddirection + "°", highlight: false }
        ]
      }
    },
    title: "Météo live — Bujumbura",
    hack: "Wttr.in donne la même chose en une ligne de terminal : curl wttr.in/Bujumbura — sans code, sans compte.",
    code: `curl "https://wttr.in/Bujumbura?format=3"\n// → Bujumbura: ⛅️  +28°C\n\n// Ou en JSON :\n// api.open-meteo.com/v1/forecast?latitude=-3.38&longitude=29.36&current_weather=true`,
    tags: ["gratuit", "no-auth", "météo"],
    url: "https://open-meteo.com"
  },
  {
    id: "country",
    name: "REST Countries",
    badge: "GÉOGRAPHIE",
    fetch: async () => {
      const randomCountries = ["france", "japan", "brazil", "nigeria", "india", "argentina", "kenya", "canada"]
      const pick = randomCountries[Math.floor(Math.random() * randomCountries.length)]
      const r = await fetch(`https://restcountries.com/v3.1/name/${pick}?fields=name,capital,population,currencies,languages,flags,region`)
      const [d] = await r.json()
      const currency = Object.values(d.currencies || {})[0]
      const lang = Object.values(d.languages || {})[0]
      return {
        type: "data",
        data: [
          { key: d.flags?.emoji + " " + d.name.common, val: d.capital?.[0] || "—", highlight: true },
          { key: "Population", val: (d.population / 1e6).toFixed(1) + "M", highlight: false },
          { key: "Monnaie", val: currency ? `${currency.name} (${currency.symbol || "?"})` : "—", highlight: false },
          { key: "Langue", val: lang || "—", highlight: false },
          { key: "Région", val: d.region, highlight: false }
        ]
      }
    },
    title: "Pays aléatoire du monde",
    hack: "Croise avec Open Exchange Rates pour calculer dans combien de pays tu peux vivre avec ton salaire.",
    code: `fetch("https://restcountries.com/v3.1/name/france")\n  .then(r => r.json())\n  .then(([d]) => console.log(d.name.common, d.capital))`,
    tags: ["gratuit", "no-auth", "données"],
    url: "https://restcountries.com"
  },
  {
    id: "placeholder",
    name: "Lorem Picsum",
    badge: "DESIGN",
    fetch: async () => {
      const seed = Math.floor(Math.random() * 1000)
      const url = `https://picsum.photos/seed/${seed}/600/400`
      return {
        type: "image",
        data: url,
        caption: `Seed #${seed} — Cette image sera TOUJOURS la même avec ce seed`
      }
    },
    title: "Image placeholder déterministe",
    hack: "picsum.photos/seed/NOM retourne TOUJOURS la même image. Utilise le nom d'un user comme seed pour des avatars consistants.",
    code: `<!-- Image aléatoire -->\n<img src="https://picsum.photos/800/600">\n\n<!-- Même image à chaque fois (seed) -->\n<img src="https://picsum.photos/seed/monprojet/800/600">`,
    tags: ["gratuit", "no-auth", "design"],
    url: "https://picsum.photos"
  },
  {
    id: "pokemon",
    name: "PokéAPI",
    badge: "FUN",
    fetch: async () => {
      const id = Math.floor(Math.random() * 151) + 1
      const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const d = await r.json()
      const types = d.types.map(t => t.type.name).join(", ")
      return {
        type: "image",
        data: d.sprites.other?.["official-artwork"]?.front_default || d.sprites.front_default,
        caption: `#${d.id} ${d.name.toUpperCase()} — Types : ${types} — ${d.base_experience} XP de base`
      }
    },
    title: "Pokémon aléatoire (Gen 1)",
    hack: "Les types Pokémon font des archétypes UX étonnamment parlants : 'utilisateur type Ghost' = difficile à atteindre.",
    code: `const id = Math.floor(Math.random() * 151) + 1\nconst d = await fetch(\`https://pokeapi.co/api/v2/pokemon/\${id}\`).then(r=>r.json())\nconsole.log(d.name, d.types.map(t=>t.type.name))`,
    tags: ["gratuit", "no-auth", "fun"],
    url: "https://pokeapi.co"
  },
  {
    id: "quotable",
    name: "Quotable",
    badge: "CULTURE",
    fetch: async () => {
      const r = await fetch("https://api.quotable.io/random")
      const d = await r.json()
      return { type: "fact", data: `"${d.content}"`, meta: `— ${d.author}` }
    },
    title: "Citation philosophique aléatoire",
    hack: "Génère un 'fortune cookie CLI' en une ligne : alias fortune='curl -s api.quotable.io/random | jq -r .content'",
    code: `curl https://api.quotable.io/random\n// → {"content":"...","author":"...","tags":["..."]}`,
    tags: ["gratuit", "no-auth", "culture"],
    url: "https://quotable.io"
  }
]

// ═══════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════

let callCount = 0
let lastApiId = null
let usedApis = new Set()

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════

function init() {
  const pills = document.getElementById("api-pills")
  APIS.forEach(api => {
    const pill = document.createElement("button")
    pill.className = "api-pill"
    pill.id = `pill-${api.id}`
    pill.textContent = api.name
    pill.title = api.badge
    pill.onclick = () => callSpecific(api)
    pills.appendChild(pill)
  })
}

// ═══════════════════════════════════════════
// SURPRISE
// ═══════════════════════════════════════════

async function surprise() {
  // Pick a random API (avoid repeating last)
  let available = APIS.filter(a => a.id !== lastApiId)
  const api = available[Math.floor(Math.random() * available.length)]
  await callSpecific(api)
}

async function callSpecific(api) {
  const btn = document.getElementById("surprise-btn")
  const loading = document.getElementById("loading")
  const loadingText = document.getElementById("loading-text")
  const card = document.getElementById("result-card")

  // Set loading state
  btn.classList.add("loading")
  btn.textContent = "..."
  loading.style.display = "flex"
  loadingText.textContent = `Appel vers ${api.name}...`
  card.classList.remove("visible")

  // Update pill
  document.querySelectorAll(".api-pill").forEach(p => p.classList.remove("active"))
  const pill = document.getElementById(`pill-${api.id}`)
  if (pill) pill.classList.add("active")

  try {
    const result = await api.fetch()

    // Update card
    document.getElementById("api-badge").textContent = api.badge
    document.getElementById("card-title").textContent = api.title
    document.getElementById("hack-text").textContent = api.hack

    // Code block
    const codeEl = document.getElementById("code-block")
    codeEl.innerHTML = api.code

    // Result content
    const contentEl = document.getElementById("result-content")
    contentEl.innerHTML = renderContent(result)

    // Footer tags
    const footer = document.getElementById("card-footer")
    footer.innerHTML = api.tags.map(t => `<span class="tag">${t}</span>`).join("") +
      `<a href="${api.url}" target="_blank" class="link-btn">→ Voir la doc</a>`

    // Show card
    card.style.display = "block"
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.classList.add("visible")
      })
    })

    // Stats
    callCount++
    document.getElementById("call-count").textContent = callCount
    lastApiId = api.id
    usedApis.add(api.id)

  } catch (err) {
    const contentEl = document.getElementById("result-content")
    contentEl.innerHTML = `<div class="error-msg">Erreur : ${err.message}</div>`
    card.style.display = "block"
    requestAnimationFrame(() => card.classList.add("visible"))
  } finally {
    btn.classList.remove("loading")
    btn.innerHTML = '<span class="btn-icon">🎲</span> Surprise me'
    loading.style.display = "none"
  }
}

// ═══════════════════════════════════════════
// RENDER
// ═══════════════════════════════════════════

function renderContent(result) {
  switch (result.type) {
    case "fact":
      return `
        <div class="content-fact">
          ${escapeHtml(result.data)}
        </div>
        ${result.meta ? `<div style="margin-top:12px;font-family:var(--mono);font-size:12px;color:var(--muted)">${escapeHtml(result.meta)}</div>` : ""}
      `

    case "image":
      return `
        <div class="content-image">
          <img src="${result.data}" alt="result" onerror="this.style.display='none'">
          <div class="img-text">${escapeHtml(result.caption || "")}</div>
        </div>
      `

    case "data":
      return `
        <div class="content-data">
          ${result.data.map(item => `
            <div class="data-item">
              <div class="key">${escapeHtml(item.key)}</div>
              <div class="val ${item.highlight ? '' : 'normal'}">${escapeHtml(String(item.val))}</div>
            </div>
          `).join("")}
        </div>
      `

    default:
      return `<div class="content-text">${escapeHtml(String(result.data))}</div>`
  }
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

// Init on load
init()