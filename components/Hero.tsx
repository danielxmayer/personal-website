export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-gray-200/40 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-stone-200/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-8 w-full">
        <div className="border-t border-gray-200 pt-16 pb-8">
          <h1 className="font-playfair font-black leading-none text-5xl md:text-7xl lg:text-8xl mb-3">
            <span className="block text-outline mt-8">Daniel</span>
            <span className="block text-right text-outline mt-2 lg:mt-4">Mayer</span>
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
