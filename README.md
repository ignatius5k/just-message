# Just Message!

A small web app that opens a WhatsApp chat from a phone number, without requiring
the number to be saved as a contact first.

## PWA support

The app can be installed from a supported browser and launched like a native
app. Its interface remains available offline after the first successful visit.
An internet connection is still required when opening a WhatsApp conversation.

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

Push the repository to GitHub, then open **Settings → Pages** and choose
**GitHub Actions** as the source. Every push to `main` will deploy the latest
version.

Phone numbers are cleaned in the browser and redirected to:

```text
https://wa.me/<country-code-and-number>
```
