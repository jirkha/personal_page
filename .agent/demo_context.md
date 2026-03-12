demo_context.md

<!-- PROJECT_CONTEXT: demo_version -->

# Demo verze – Monitoring zakázek (Varianta 1 – Česká republika)
Tento dokument obsahuje pouze klíčové informace potřebné k tomu, aby AI (Claude) dokázala vytvořit funkční **demo verzi aplikace**.  
Demo bude pracovat pouze s 1–2 nejjednoduššími zdroji zakázek a bude zahrnovat:

- základní backend (API)
- modul sběru dat
- databázi
- jednoduché UI (volitelné)
- filtrování podle disciplín + klíčových slov

Cílem je vytvořit **minimální funkční prototyp**, který lze dále škálovat.

---

# 1. Cíl demo aplikace
Vytvořit jednoduchý systém, který:

1. pravidelně načítá zakázky z *jednoho až dvou snadných zdrojů*,  
2. normalizuje je do jednotného formátu,  
3. uloží je do databáze,  
4. umožní uživateli zobrazit seznam a detail zakázky,  
5. podporuje základní filtr (disciplína, klíčová slova).

---

# 2. Zdroje zakázek použité v demo verzi

## 2.1 Informační systém o veřejných zakázkách (ISVZ / VVZ) – **hlavní zdroj**
- **Metoda:** RSS feed (nejjednodušší forma)  
- **Frekvence kontroly:** 1× za 1–2 hodiny (v demu stačí manuální refresh)  
- **Důvod:** snadno parsovatelný XML feed, žádná autentizace, správné datumy a názvy.

### Jak se zpracuje:
- stáhnout RSS (XML),
- pro každý `<item>` extrahovat:  
  - title  
  - link  
  - description  
  - pubDate  
- převést do interní struktury `Zakazka`.

---

## 2.2 Profil jednoho zadavatele – **volitelný druhý zdroj**
Např.: statutární město Brno (E-ZAK) nebo Liberecký kraj.

### Metoda:
- jednoduchý scraping seznamu zakázek (HTML → BeautifulSoup)

### Důvod:
- ukazuje schopnost kombinovat více zdrojů
- obsahuje často více detailů než VVZ

---

# 3. Disciplíny (CZ demo)

Pro demo je potřeba zjednodušená taxonomie:

| Disciplína | Klíčová slova |
|------------|----------------|
| Dopravní modelování | model, VISUM, mikromodel, prognóza |
| Dopravně-inženýrské studie | DI, POSU, kapacitní, studie proveditelnosti |
| Veřejná doprava | MHD, jízdní řád, IDS, dopravní podnik |
| Cyklo a pěší doprava | cyklo, cyklostezka, pěší, prostupnost |
| Udržitelná mobilita | PUM, SUMP, mobilita |
| ITS a telematika | ITS, SSZ, telematika |
| Parkování | P+R, parkování, parkovací |
| Bezpečnost | audit, bezpečnost, nehodovost |

Pro demo stačí:
- mapovat disciplínu **podle nalezených klíčových slov v title/description**.

---

# 4. Datový model (zjednodušený pro demo)

## **Zakazka**
| pole | popis |
|------|--------|
| id | interní ID |
| zdroj | "VVZ" nebo "Profil-Brno" |
| nazev | název zakázky |
| popis | krátký popis |
| url | odkaz na původní detail |
| datum_publikace | datum |
| disciplina | detekovaná disciplína |
| klicova_slova | pole nalezených klíčových slov |

## **Uživatel** *(v demu volitelné)*  
Pouze email a filtry.

---

# 5. Architektura demo verze (velmi jednoduchá)

## Backend:  
- **FastAPI** (Python)  
- knihovny: `requests`, `feedparser` nebo `BeautifulSoup`, `pydantic`

## Databáze:  
- jednoduchý **SQLite** (pro demo)  
- později možné nahradit PostgreSQL

## Frontend (volitelné):  
- jednoduchý Next.js nebo čistý HTML

## Proces sběru dat:  
- jeden skript:  
  `fetch_vvz.py`  
- volání: ručně nebo pomocí cron / background task

---

# 6. API – minimální rozsah

### `GET /zakazky`
Parametry:
- `disciplina`
- `q` (fulltext ve title/popisu)

### `POST /refresh`
Spustí sběr dat ze zdrojů.

### `GET /zakazky/{id}`

---

# 7. Logika detekce disciplín

1. Získáme text (název + popis).  
2. Normalizujeme na lowercase.  
3. Pokud text obsahuje klíčová slova jedné disciplíny → přiřadíme.  
4. Pokud více disciplín → vybereme tu s nejpočetnějšími shodami.

Pseudo-kód:

```python
for disciplina in discipliny:
    if any(kw in text for kw in disciplina.keywords):
        zakazka.disciplina = disciplina.name