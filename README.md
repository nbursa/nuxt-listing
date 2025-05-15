# Scholarship Winners App

A Nuxt 3 application built with TypeScript, PrimeVue, and server-side rendering (SSR) to display a list of scholarship winners from a JSON:API endpoint.

## Tech Stack

- **Nuxt 3** with SSR
- **TypeScript**
- **PrimeVue 4**

## Features

- Fetches and displays data from API
- Uses `useAsyncData` for SSR data fetching
- PrimeVue `DataTable` for clean tabular UI
- Pagination via PrimeVue `Paginator`
- Loading state with `ProgressSpinner`

## Running app

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## Requirements

- TypeScript support
- SSR via `useAsyncData`
- PrimeVue components (DataTable, Column, Paginator, Spinner)
- JSON:API compliant parsing
- Pagination, loading and error UI
