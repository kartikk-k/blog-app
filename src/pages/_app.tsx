import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    {/* <ThemeProvider attribute='class' disableTransitionOnChange={false} defaultTheme='light'> */}
    <Component {...pageProps} />
    {/* </ThemeProvider> */}
  </>
}
