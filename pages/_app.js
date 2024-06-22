import Router from 'next/router'
import NProgress from 'nprogress'
import { RecoilRoot } from 'recoil'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/nprogress.css'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {


   const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        // refetchOnMount:false,
        refetchOnWindowFocus:false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
    </QueryClientProvider>
  )
}

export default MyApp
