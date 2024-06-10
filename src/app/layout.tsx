import '@/app/globals.css';
import '@mantine/core/styles.css'; 
import '@mantine/dates/styles.css'; 
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../components/utils/theme'
import { Navbar } from '../components/utils/navbar';
import { headers } from 'next/headers'
import type { Viewport } from 'next'
import { GrabWait } from '@/components/utils/grabCurrentWait';
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
  title: 'WaitList',
  description: 'Reservation WebApp',
  manifest: './manifest.webmanifest'
}

export const 
dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
fetchCache = 'auto',
runtime = 'nodejs',
preferredRegion = 'auto';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = headers().get('x-nonce') || '';
  async function NavBar() {
    return GrabWait().then(value => {return <Navbar wait={value}/>})
  }
  

  return (
    <html lang="en" >
      <head>
        <ColorSchemeScript nonce={nonce} suppressHydrationWarning/>
      </head>
      <body className="flex-col h-dvh overflow-hidden">
        <MantineProvider theme={theme}> 
          <div className="flex-1 bg-[#FFEBED]">
            {children}
          </div>
          <NavBar/>
        </MantineProvider>
      </body>
    </html>
  )
}