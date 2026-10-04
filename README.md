# Jack Shute — portfolio site

A single-page static site, live at https://jackshute.com (GitHub → Netlify).

| File | What it is |
|---|---|
| `index.html` | Hero, About and Contact text, plus a pre-built copy of the case studies (for search engines) |
| `case-studies.js` | **All case studies** (edit this to add or change work) |
| `styles.css` | Colours, fonts, layout |
| `render.js` | Turns `case-studies.js` into HTML, so you shouldn't need to touch it |
| `main.js` | Page behaviour (nav colour, scroll reveals), so you shouldn't need to touch it |
| `robots.txt`, `sitemap.xml` | For search engines |
| `assets/` | Headshot, link-preview card (`share-card.jpg`), home-screen icon |

## Add a case study
Open `case-studies.js`, copy an existing block `{ … },`, paste it where you want it in the list and edit the text and Vimeo links. Numbering and the "Selected work" index update automatically. Instructions are at the top of that file.

## Before publishing: refresh the pre-built copy
`index.html` holds a pre-built copy of the case studies so Google, LinkedIn previews etc. can read them. After editing `case-studies.js`, refresh it from the project folder (the one above `site`):

    osascript -l JavaScript build-work.js

If you forget, visitors still see the latest version (the page rebuilds itself), but search engines see the old copy until you run it.

## Change colours or fonts
The top of `styles.css` has the palette (`--paper`, `--ink`, `--accent` …) and font names.

## Preview locally
Vimeo won't play if you double-click `index.html`. Preview through a local server instead, e.g. in Terminal from this folder:

    ruby -run -e httpd . -p 8000

then open http://localhost:8000.
