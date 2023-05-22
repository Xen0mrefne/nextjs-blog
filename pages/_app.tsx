import { AppProps } from "next/app"
import "../styles/globals.css"

function App({ Component, pageProps}: AppProps) {
  {/* @ts-expect-error Server Component */}
  return <Component {...pageProps} />
}

export default App;
