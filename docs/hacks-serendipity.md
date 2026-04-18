# 🧨 Hacks par Sérendipité — Usages Inattendus

> "La sérendipité, c'est trouver ce qu'on ne cherchait pas, parce qu'on cherchait bien."

Ce guide répertorie des usages **non-évidents** d'APIs publiques gratuites.

---

## 1. Météo sans frontend

```bash
curl wttr.in
# Météo complète en ASCII dans ton terminal
# Zéro compte, zéro clé
```

**Pourquoi c'est malin** : Wttr.in est une API cachée derrière un service humain. Elle retourne aussi du JSON (`?format=j1`) pour des scripts.

---

## 2. IP en une seconde

```bash
curl api.ipify.org
```

**Pourquoi c'est malin** : Une seule chose, parfaite. Combine avec `ip-api.com/$IP` pour la géolocalisation complète.

---

## 3. QR code sans installation

```
https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=TON_URL
```

Colle cette URL directement dans un `<img>`. Aucun package, aucun compte.

---

## 4. Image placeholder déterministe

```
https://picsum.photos/seed/MON_SEED/800/600
```

Même seed = même image. Toujours. Sur tous les navigateurs.

---

## 5. Archive journalistique gratuite

The Guardian donne accès à **2 millions d'articles depuis 1999**, gratuit avec clé.

```js
fetch("https://content.guardianapis.com/search?q=intelligence+artificielle&from-date=2010-01-01&to-date=2010-12-31&api-key=test")
// Clé "test" fonctionne avec limite
```

**Hack** : Compare la couverture d'un sujet sur 10 ans. Vois quand un sujet niche est devenu mainstream.

---

## 6. Bibliothèque infinie gratuite

```js
fetch("https://openlibrary.org/search.json?subject=philosophie&limit=20")
// 20M+ livres, zéro auth
```

**Hack** : `https://covers.openlibrary.org/b/isbn/ISBN-L.jpg` — couvertures de livres par ISBN pour tes UIs.

---

## 7. Données pays sans base de données

```js
fetch("https://restcountries.com/v3.1/alpha/BI")
// Tout sur le Burundi : capitale, monnaie, langue, drapeau, coordonnées...
```

**Hack** : `fields=name,flags,currencies` pour ne récupérer que ce dont tu as besoin.

---

## 8. Fortune cookie CLI

```bash
alias fortune='curl -s api.quotable.io/random | python3 -c "import sys,json; d=json.load(sys.stdin); print(d[\"content\"],\"-\",d[\"author\"])"'
```

Ajoute dans `.bashrc`. Une citation à chaque session.

---

## Voir plus

→ [HACKS.md](../HACKS.md) — le fichier principal avec 15 hacks complets et commentés  
→ [docs/combos.md](combos.md) — quand deux APIs font mieux qu'une
