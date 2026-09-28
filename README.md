# Jack Shute — portfolio site

A single-page static site. No build step: these four files are the whole site.

| File | What it is |
|---|---|
| `index.html` | Hero, About and Contact text |
| `case-studies.js` | **All case studies** (edit this to add or change work) |
| `styles.css` | Colours, fonts, layout |
| `main.js` | Builds the case study sections, so you shouldn't need to touch it |

## Add a case study
Open `case-studies.js`, copy an existing block `{ … },`, paste it where you want it in the list and edit the text and Vimeo links. Numbering and the "Selected work" index update automatically. Instructions are at the top of that file.

## Add images later
Create a folder `site/assets/`, drop images in, and add `image: "assets/filename.jpg"` to a case study.

## Change colours or fonts
The top of `styles.css` has the palette (`--paper`, `--ink`, `--accent` …) and font names.

## Preview locally
Vimeo won't play if you double-click `index.html`. Preview through a local server instead, e.g. in Terminal from this folder:

    ruby -run -e httpd . -p 8000

then open http://localhost:8000. (Or just publish it, see below.)

## Publish
Easiest: go to https://app.netlify.com/drop and drag the `site` folder onto the page. You get a live URL straight away and can attach your own domain later. GitHub Pages or Cloudflare Pages also work.
