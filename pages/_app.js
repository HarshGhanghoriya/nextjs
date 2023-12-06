import Providers from "@/redux/provider/Provider"
import "@/styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Head from "next/head"
import Layout from "@/components/Layout"
import { Fab } from "@mui/material"
import Image from "next/image"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Providers>
        {/* <Header /> */}
        <Head>
          <link
            rel="icon"
            href="https://assets-global.website-files.com/6210bac66fc36f6399c235d0/623979f050eca63c3c28b363_favicon-bgremove.png"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;700&display=swap"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
          <div className="fixed z-50 right-5 bottom-3">
              <Image
                src="./images/whatsapp.svg"
                width={55}
                height={55}
                alt="whatsapp icon"
              />
          </div>
        </Layout>
      </Providers>
    </>
  )
}
