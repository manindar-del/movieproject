import Footer from './Footer'
import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <div className='text-app-pure-white lg:flex background-blue'>
      <main className='mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 spacerightleft lg:min-w-[800px] lg:grow'>
      <Navigation />
        {children}
        <Footer />
      </main>
    </div>
  )
}
