import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen grid md:grid-cols-2 pt-16 overflow-hidden">

      {/* Left: text content */}
      <div className="flex flex-col justify-end pb-16 px-8 md:pl-16 md:pr-12">
        <div className="border-t border-gray-300 pt-10">
          <h1 className="font-light leading-[0.92] tracking-tight text-[clamp(4rem,10vw,8rem)] mb-6">
            <span className="block">Daniel</span>
            <span className="block">Mayer</span>
          </h1>

          <p className="text-xs text-gray-400 tracking-[0.2em] uppercase mb-10">
            Marketing &amp; Media Manager
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span>TV Nova</span>
            <span>Zonky</span>
            <span>MAFRA</span>
            <span>Médea</span>
          </div>
        </div>
      </div>

      {/* Right: portrait photo */}
      <div className="relative hidden md:block">
        <Image
          src="/daniel3.JPG"
          alt="Daniel Mayer"
          fill
          priority
          className="object-cover object-[50%_18%]"
          sizes="50vw"
        />
        {/* Subtle left-edge fade to blend with background */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f9f8f6] to-transparent" />
      </div>

    </section>
  )
}
