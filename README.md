# WaitList

![image](https://github.com/user-attachments/assets/89d2068a-8f0c-4172-8ace-21ecd1e9e1ab)

**Fullstack reservation and waitlist web app built for Hibachi-style restaurants.**

## Examples of Implementation

- CSP using Next.js middleware  
- PocketBase real-time subscriptions  
- PocketBase dynamic filtering  
- Mantine Forms  
- Server and client-side cookie handling  

## Features

- Real-time updates between clients and server via PocketBase subscriptions  
- Progressive Web App (PWA) support for iOS with installable app-like experience  
- Content Security Policy (CSP) headers and nonce handling via middleware  
- Automatic daily reservation loading with check-in tracking  
- Real-time wait time tracking, including how long groups have waited  
- Automatic wait time suggestions based on number of chefs and queue size  
- Auto text notifications when tables are ready or as reservation reminders  
- History view for tracking past reservations and waitlist data  
- Guest-facing page to view waitlist status and position  
- Party readiness tracking ("Everyone is present and ready to be seated")  
- Detailed pages for reservations and waitlisted parties with timestamps and statuses  
- Multi-location support with consolidated management dashboard  
- Separate interfaces for employees and guests  
- Specialized design for Hibachi restaurant workflows  
- Dockerized deployment for ease of scaling and portability  

## Optimizations

- Server-Side Rendering (SSR)  
- Streaming with `React.Suspense`  
- Dynamic routing using Next.js App Router (v14)  

## Installation

1. [Set up PocketBase](https://pocketbase.io/)  
2. [Install Next.js](https://nextjs.org/docs/getting-started/installation)  
3. Install dependencies with `npm install`  
4. Clone this repo into your Next.js project  
5. Update generic fields (see below)  
6. Deploy

### Optional Configuration

- Customize styling via `theme.ts` (Mantine) or Tailwind class names  
- CSP headers can be removed by editing `middleware.ts`  

## Deployment

Run locally or deploy via Docker.  

**Default Port:** `3000`

```bash
# Development
npm run dev

# Production
npm run build && npm start
```

A `Dockerfile` is included for containerized deployments.

## Configuration

Update the following values before deployment:

| Variable         | Location(s)                       |
|------------------|-----------------------------------|
| `PocketBaseUrl`  | `pocketbase.js`, `middleware.ts`  |
| `url`            | `middleware.ts` (your hosted domain) |
| `TZ`             | `Dockerfile` (your timezone)      |
| `PORT`           | `Dockerfile` (optional override)  |
| `logo.png`       | `public/` directory               |

## Tech Stack

**Frontend:** React, Next.js, TailwindCSS, Mantine  
**Backend:** Node.js, TypeScript, PocketBase  
**Deployment:** Docker  

## Used By

- Volcano Steak & Sushi

## Acknowledgements

- [Next.js](https://nextjs.org/docs)  
- [Mantine](https://mantine.dev/getting-started/)  
- [PocketBase](https://pocketbase.io/docs/)  
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)  
- [TailwindCSS](https://tailwindcss.com/docs/installation)  
- [Docker](https://docs.docker.com/desktop/)

## Authors

- [@xSolo101](https://github.com/xSolo101)  
- [@KaiR332](https://github.com/KaiR332)

## License

**WaitList**  
© 2024 Kevin Lin

Distributed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/).  
This software is provided "as-is" without warranty of any kind.

## Feedback

If you have any feedback, please reach out to us at: kdcao1@yahoo.com
