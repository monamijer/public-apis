

# 🌍 Public APIs Hub

![GitHub stars](https://img.shields.io/github/stars/monamijer/public-apis)
![GitHub forks](https://img.shields.io/github/forks/monamijer/public-apis)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen)
![License](https://img.shields.io/github/license/monamijer/public-apis)

A curated collection of **public APIs, tutorials, tools, and real examples** to help developers, students, and curious learners build amazing projects.

Unlike many API lists, this repository also includes:

* 📚 Learning resources
* 🧪 JavaScript examples
* 🌍 Tools for non-programmers
* 🚀 Project ideas using APIs

---

# 🚀 Why this repository exists

APIs power most modern applications.

This project helps people:

• discover useful public APIs
• learn how APIs work
• practice building real projects
• automate tasks without coding

Whether you are:

* 👨‍💻 a developer
* 🎓 a student
* 🤖 an automation enthusiast
* 🧠 a curious learner

you will find something useful here.

---

# 📚 Table of Contents

* APIs by Category
* JavaScript Examples
* Beginner Guides
* Tools for Non-Programmers
* Projects Built With APIs
* How to Contribute

---

# 🌐 APIs by Category

## 🐾 Animals

| API         | Description                       | Auth | HTTPS |
| ----------- | --------------------------------- | ---- | ----- |
| Cat Facts   | Daily cat facts                   | No   | Yes   |
| Axolotl API | Pictures and facts about axolotls | No   | Yes   |

---

## 🌦 Weather

| API        | Description                | Auth    | HTTPS |
| ---------- | -------------------------- | ------- | ----- |
| Open Meteo | Free weather forecast data | No      | Yes   |
| WeatherAPI | Global weather data        | API Key | Yes   |

---

## 📰 News

| API     | Description                | Auth    | HTTPS |
| ------- | -------------------------- | ------- | ----- |
| NewsAPI | Worldwide news headlines   | API Key | Yes   |
| GNews   | Google news aggregator API | API Key | Yes   |

---

## 💰 Cryptocurrency

| API       | Description                | Auth | HTTPS |
| --------- | -------------------------- | ---- | ----- |
| CoinGecko | Cryptocurrency market data | No   | Yes   |
| CoinDesk  | Bitcoin price index        | No   | Yes   |

---

# 🧪 JavaScript Examples

Example: Fetch Bitcoin price

```javascript
async function getBitcoinPrice() {

 const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")

 const data = await res.json()

 console.log("Bitcoin price:", data.bpi.USD.rate)

}

getBitcoinPrice()
```

More examples are available in the **examples/** folder.

---

# 📖 Beginner Guides

If you are new to APIs, start here.

Topics included in the **docs/** folder:

* What is an API
* How APIs work
* REST vs GraphQL
* Authentication and API keys
* Building your first API project

---

# 🧰 Tools for Non-Programmers

You don't always need to code to use APIs.

These tools allow anyone to connect APIs visually.

| Tool     | Use                                  |
| -------- | ------------------------------------ |
| Postman  | Test APIs easily                     |
| Zapier   | Automate workflows                   |
| Make     | Visual automation platform           |
| Airtable | Smart spreadsheets connected to APIs |
| IFTTT    | Connect apps together                |

More tools are listed in the **tools/** folder.

---

# 🚀 Projects Built With APIs

Ideas you can build using APIs:

* Weather dashboard
* Crypto price tracker
* News aggregator
* Joke generator
* Travel planner

See the **projects/** directory for guides.

---

# 📂 Repository Structure

```
public-apis
│
├── README.md
│
├── docs
│   ├── api-basics.md
│   ├── beginner-guide.md
│
├── examples
│   ├── crypto.js
│   ├── weather.js
│   ├── jokes.js
│
├── tools
│   ├── no-code-tools.md
│
├── projects
│   ├── weather-dashboard.md
│
├── demo
│   ├── index.html
│
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
```

---

# 🤝 Contributing

Contributions are welcome.

You can contribute by:

* adding new APIs
* improving documentation
* adding examples
* fixing broken links

Steps:

1. Fork the repository
2. Create a new branch
3. Add your contribution
4. Submit a Pull Request

---

# ⭐ Support the Project

If this repository helps you:

⭐ Give it a star
🍴 Fork it
📢 Share it with others

---

# 📜 License

This project is open source and available under the MIT License.

---



---

💡 Prochaine étape que je te recommande :
Je peux te créer **le fichier CONTRIBUTING.md parfait pour attirer des contributions GitHub (très important pour rendre ton repo populaire)**.
