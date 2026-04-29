# Resume Checkmark Maker

Local web app for tailoring a resume by checking or unchecking bullets, editing text inline, and exporting the current version as a PDF.

## Run it

```bash
npm start
```

The server starts at `http://127.0.0.1:4173` by default and will automatically move to the next open port if that one is busy. Check the terminal output for the exact URL.

## How it works

- The left panel is your source of truth for header info, summary, sections, roles, and bullet text.
- Only checked bullets render in the resume preview.
- The right panel is a live editable preview; click visible text to tweak it inline.
- Export uses the browser print flow and sets the document title from the filename field so "Save as PDF" starts with the name you want.
- Changes are saved in `localStorage`, so your current tailoring work stays there between refreshes.

## Notes

- The app is seeded with content based on your current resume layout.
- If you want to add more sections like Education, Writing, or Projects, use `Add Section`.
- `Reset Sample` restores the original seeded content.
