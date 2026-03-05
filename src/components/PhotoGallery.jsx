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

export default function PhotoGallery() {
  if (photos.length === 0) return null

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
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
            <div className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-200/50 cursor-pointer">
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
    </section>
  )
}
