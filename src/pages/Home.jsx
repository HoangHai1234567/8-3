import { useState, useCallback } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import Header from '../components/Header'
import WishMessage from '../components/WishMessage'
import PhotoGallery from '../components/PhotoGallery'
import Footer from '../components/Footer'
import FlowerParticles from '../components/FlowerParticles'
import ConfettiEffect from '../components/ConfettiEffect'
import MusicPlayer from '../components/MusicPlayer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  const handleLoadingFinished = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {loading && <LoadingScreen onFinished={handleLoadingFinished} />}

      {!loading && (
        <>
          <ConfettiEffect />
          <FlowerParticles />
          <MusicPlayer />

          <main className="relative z-20 w-full min-w-0 overflow-x-hidden">
            <Header />
            <WishMessage />
            <PhotoGallery />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}
