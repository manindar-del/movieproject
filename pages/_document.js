import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Outfit:wght@300;500&display=swap'
          rel='stylesheet'
        />
         <link href="https://unpkg.com/@material-tailwind/html@latest/styles.css" rel="stylesheet"></link>
         <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/tabs.js" strategy="beforeInteractive"  async />
      </Head>
      <body>
        <Main />
        <NextScript />
        
      
      </body>
    </Html>
  )
}
