import Navbar from '@/components/Navbar'
import PresentationContainer from '@/components/PresentationContainer'
import ConnectWithMeContainer from '../components/ConnectWithMeContainer'
import ExploreMyWork from '@/components/ExploreMyWork'
import Technologies from '@/components/Technologies'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background-surface text-background-dark">
      <Navbar />
      <PresentationContainer />
      <ExploreMyWork />
      <ConnectWithMeContainer />
      <Technologies />
    </main>
  )
}
