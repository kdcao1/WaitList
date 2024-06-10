
# WaitList

Fullstack reservation and waitlist web app built for Hibachi style restaurants

Examples:
- CSP using Next.JS middlware
- PocketBase realtime subscriptions
- PocketBase dymanic filtering
- Mantine Forms
- Server and Cient Cookies

## Features

- Realtime Updates between client and server
- Progressive Web App support for IOS
- Uses middleware for CSP headers and nonce application
- Uses App Router from Next.JS 14
- Seperate web interface for employees and guests
- Mobile depolyment through Docker
- Specialized for Hibachi resturants


## Optimizations

- Server Sided Rendering (SSR)
- Streaming with suspense
- Dynamic routing

## Installation

- Setup PocketBase: https://pocketbase.io/
- Install next.js: https://nextjs.org/docs/getting-started/installation
- Install npm packages
- Clone files into nextjs project
- Change generic fields. (see below)
- Deploy

#### Optional Changes
- Style through theme.ts (Mantine) or Tailwind class names
- Delete CSP headers through middleware.ts
## Deployment

To deploy this project 

Default port: 3000

```bash
  Dev mode: npm run dev 
  Prod mode: npm run build => npm run start
```

Contains a Dockerfile for Docker deployments

## Generics

To run this project, you will need to change the following variables to each file:

`PocketBaseUrl`: pocketbase.js and middleware.ts

`url`: middleware.ts (hosted site link)

`TZ`: Dockerfile (follow your time zone)

`PORT`: Dockerfile (optional, change port in Docker container)

`logo.png`: add a logo into public folder
## Tech Stack

**Client:** React, NextJs, TailwindCSS, Mantine

**Server:** NodeJS, TypeScript, PocketBase, Docker


## Used By

This project is used by the following companies:

- Volcano Steak & Sushi




## Acknowledgements

 - [Next.JS](https://nextjs.org/docs)
 - [Mantine](https://mantine.dev/getting-started/)
 - [PocketBase](https://pocketbase.io/docs/)
 - [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
 - [TailwindCSS](https://tailwindcss.com/docs/installation)
 - [Docker](https://docs.docker.com/desktop/)


## Authors

- [@xSolo101](https://github.com/xSolo101)
- [@KaiR332](https://github.com/KaiR332)

## License


WaitList

Copyright (C) 2024  Kevin Lin

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/).
## Feedback

If you have any feedback, please reach out to us at kdcao1@yahoo.com

