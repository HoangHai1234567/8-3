import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const photoModules = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
})

const photos = Object.entries(photoModules).map(([path, src], index) => ({
  id: index + 1,
  src,
  name: path.split('/').pop(),
}))

function Lightbox({ photo, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition-all cursor-pointer"
      >
        &times;
      </button>
      <img
        src={photo.src}
        alt={photo.name}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  if (photos.length === 0) return null

  return (
    <>
      <section className="w-full py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-5xl text-pink-500 text-center mb-12"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              📸 Khoảnh Khắc Đáng Nhớ
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <ScrollReveal key={photo.id}>
                <div
                  className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-200/50 cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.name}
                    className="w-full h-64 sm:h-72 object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </>
  )
}
