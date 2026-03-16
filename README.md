# The Nation Landing Page

Landing page untuk The Nation yang dibangun dengan React, Vite, dan Tailwind CSS.

## Requirements

- Node.js
- npm

## Install

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Setelah itu buka URL lokal yang ditampilkan Vite di terminal.

## Build Production

```bash
npm run build
```

## Project Structure

```text
src/
  components/
  pages/
  styles/
  utils/
  assets/
```

## Notes

- File sensitif seperti `.env` dan dependency folder seperti `node_modules/` sudah di-ignore lewat `.gitignore`.
- `AGENTS.md` tidak ikut ke repository.

## Main Files

- `src/pages/HomePage.jsx` untuk halaman utama
- `src/components/` untuk section dan komponen UI
- `src/utils/content.jsx` untuk data konten landing page

## Git

Contoh commit message:

```bash
feat: initial project setup
```
