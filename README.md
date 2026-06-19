# Nectar — Grocery App

A mobile-first grocery shopping app prototype, with a fully responsive desktop layout, built in React + TypeScript.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — dev server / build tool
- **Tailwind CSS v4** — styling
- **React Router v7** — routing
- **Zustand** — global state (cart, favourites, filters, theme, auth)
- **Firebase Auth** — phone (OTP) and email/password authentication
- **lucide-react** — icon set

## Project structure

```
src/
  assets/figma/     Image assets exported from the Figma design
  components/       Shared UI components (nav bars, product card, theme toggle, etc.)
  data/             Static category/country lookup data
  lib/              Firebase initialization
  routes/           App route definitions
  screens/          One file per screen (Home, Cart, ProductDetail, etc.)
  store/            Zustand stores (cart, favourites, filters, theme, auth)
  types/            Shared TypeScript types
  utils/            Small helpers (debounce, keypad input, product image lookup)
```

## Features

- Browsing: home feed, category explore, category listing, search with live filtering
- Product detail page, cart, favourites, simulated checkout with success/failure states
- **Authentication**: phone number + OTP (Firebase Phone Auth) and email/password sign up & login
- **Light/dark theme** toggle, persisted across sessions
- **Fully responsive**: every screen has a dedicated desktop layout (top nav with search, two-column pages, sticky summaries, card grids) in addition to the original mobile design — not just a stretched mobile view

## Getting started

```bash
npm install
npm run dev
```

Requires a `.env.local` file with Firebase config (see `.env.local.example`) for authentication to work.

## Build

```bash
npm run build
npm run preview
```
