import Navbar from '@/components/Navbar'
import PresentationContainer from '@/components/PresentationContainer'
import ConnectWithMeContainer from '../components/ConnectWithMeContainer'
import ExploreMyWork from '@/components/ExploreMyWork'
import Technologies from '@/components/Technologies'
import Footer from '@/components/Footer'
import ScrollTo from '@/components/ScrollTo'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background-surface text-background-dark">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KXCMNZF7TS" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KXCMNZF7TS');
        `}
      </Script>
      <Navbar />
      <PresentationContainer />
      <ExploreMyWork />
      <Technologies />
      <ConnectWithMeContainer />
      <ScrollTo />
      <Footer />
    </main>
  )
}
