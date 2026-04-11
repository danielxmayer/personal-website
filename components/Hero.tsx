export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-8 w-full">
        <div className="border-t border-gray-200 pt-16 pb-8">
          <h1 className="font-playfair font-black leading-none text-6xl md:text-8xl lg:text-9xl mb-10">
            <span className="block text-outline">Daniel</span>
            <span className="block text-outline">Mayer</span>
          </h1>

          <p className="text-sm text-gray-400 tracking-widest uppercase font-medium">
            Marketing &amp; Media Manager
          </p>
        </div>
        <div className="border-t border-gray-200 pt-8 pb-16 flex gap-12 text-sm text-gray-400">
          <span>TV Nova</span>
          <span>Zonky</span>
          <span>MAFRA</span>
          <span>Médea</span>
        </div>
      </div>
    </section>
  )
}
