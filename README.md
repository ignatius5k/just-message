# WhatsApp Redirect

A small web app that opens a WhatsApp chat from a phone number, without requiring
the number to be saved as a contact first.

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
