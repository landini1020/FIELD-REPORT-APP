# Field Report — put it on your iPhone

The `site/` folder is the whole app. Everything in it is static — no server, no build step.

## 1. Push `site/` to the repo

Download the project, then put the **contents of `site/`** at the root of `landini1020/Fieldreport` on the `main` branch (so `index.html` sits at the top level, next to `plans/`, `ds/`, `sw.js`).

## 2. Turn on GitHub Pages

Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `main`, folder: `/ (root)` → Save.

After a minute your app is live at:

```
https://landini1020.github.io/Fieldreport/
```

## 3. Add it to your Home Screen

On the iPhone, open that link in **Safari** (must be Safari, not Chrome) → Share button → **Add to Home Screen**. It launches full-screen with its own icon, no browser bars.

## What works on the phone

- **Camera** — shoots or picks photos, reads each photo's own timestamp
- **Dictate** — speech-to-text into the description (Safari only; needs the HTTPS Pages URL, won't work from a file)
- **Pins** — tap the plan, zoom to 5× for room-level accuracy
- **Saved on device** — pins, notes and photos survive reload and app close (stored in the browser's own database; "Reset" on the Sheets screen clears it)
- **Offline** — after the first visit the service worker caches the app and plan sheets, so it runs with no signal
- **Export report** → **Print / PDF** → Share sheet → save or email the PDF

## If the plan sheets don't show up

Almost always one of two things:

1. **The `plans/` folder didn't get pushed.** Check that `https://landini1020.github.io/Fieldreport/plans/A103.png` opens in a browser. If it 404s, the folder is missing from the repo — push `plans/` (and `ds/`) with everything else. The app now names the missing file on screen instead of showing a blank plan.
2. **An old cached copy.** If a phone was opened on an earlier build, pull down to reload once — the app now checks the network for its own HTML on every launch, so a new deploy lands on reload. If it still looks stale: delete the Home Screen icon, Settings → Safari → Clear History and Website Data, reload the Pages URL, re-add it.

Keep `.nojekyll` in the repo root — without it GitHub Pages hides files that start with an underscore, which breaks the design-system bundle.

## Updating it later

Push a new `index.html` and phones pick it up on the next launch — the app shell is fetched network-first. Only when you change **static assets** (plan images, fonts, the design-system bundle) bump `CACHE` in `sw.js` (`field-report-v3` → `v4`), since those are served cache-first for offline use.

## Plan sheets

Upload the **original PDF**, not an exported image. A PDF is vector, so the app
re-renders it sharper as you zoom (up to ~4500px wide); an image can only ever
show the pixels it was exported with. The bundled A101–A103 samples are 1500px
images, which is why they go soft when magnified.

A multi-page PDF is split into one sheet per page on upload, so a whole set
loads at once and the `‹ ›` arrows in the plan header step through it.

The renderer ships in `pdf/`, so PDFs open with no signal. If you bump the
pdf.js version, replace those files and bump `CACHE` in `sw.js`.

## Known limits

- Rendering a heavy CAD sheet the first time takes a few seconds, and again the first time you zoom past each detail step.
- Data lives only on that one phone unless you use **Save** on the Sheets screen, which writes the whole walk to one file you can back up or open on another phone.

## Recipients

Add them one at a time, or **Import list** on the Project screen to read them
out of a file — `.xlsx`, `.csv`, `.tsv`, `.txt` or `.docx`.

Any line holding an email address becomes a recipient and whatever else is on
that line becomes the name, so all of these work without any set-up:

```
Name          Email                      ← header row, ignored
Hank Vacca    hvacca@praterengr.com      ← spreadsheet columns
Marcus Webb <mwebb@structuralco.com>     ← Outlook style
Sofia Herrera, sherrera@structuralco.com ← comma separated
tolson@mepgroup.com                      ← bare address, no name
```

Anyone already on the list is skipped, so re-importing an updated sheet only
adds the new people. Office files are unpacked in the app itself rather than
through a library, so this works with no signal like everything else — but the
old binary `.doc`/`.xls` formats can't be read, and the app will say so and ask
for a re-save.

## Projects and past reports

**Projects** on the Sheets screen holds two things.

*Your projects* are saved presets. Fill in the project details and recipients
once, tap **Save** on the Project screen, and that job becomes a one-tap button
for every future walk. The report date is never part of a preset — it is always
the day you walk.

*Past reports* fills itself: starting a new report files the outgoing one here
rather than deleting it. Each has two buttons:

- **Reopen** — picks that walk back up, observations and all. It leaves the list,
  since it is now the live report, so nothing is ever listed twice.
- **New from this** — starts a fresh walk that keeps the project details and the
  plan sheets but no observations. This is the one for a repeat visit to a site
  you already have loaded.

## Does it keep my work?

Every change is written to the phone's own database. Photos, and one-shot edits
like status or deleting an observation, are written the moment you make them;
typing is written a moment after you stop. Leaving or closing the app forces
anything still pending to be written immediately, so closing and reopening does
not lose the walk.

The app asks the browser for **persistent storage**, which exempts it from being
cleared when the device runs low on space. Browsers decide whether to grant that
— a Home Screen web app is far more likely to get it than a normal Safari tab.
The Sheets screen reports which you have, along with the time of the last save:

- *Storage protected* — the browser will not clear it to reclaim space.
- *Storage is best effort* — it still saves, but iOS may clear it if the device
  runs very low. Use **Save** to write a project file for anything you cannot
  afford to lose.

That last point is the reason the project file exists. It is the only copy that
lives outside the phone.
