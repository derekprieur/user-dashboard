import { Sidebar, Footer } from '../components'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
      <Footer />
    </Sidebar>
  )
}
