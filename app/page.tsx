export default function Home() {
  return (
    <main className="relative container px-8 md:px-16 lg:px-32 mx-auto flex justify-center flex-col text-center">
      <div className="opacity-50 inset-0 background fixed w-screen h-screen z-[-1]" />
      <p className="flex items-center justify-center text-5xl md:text-7xl h-screen">
        Hola Carlos y Jessi
      </p>
      <p className="flex items-center justify-center text-9xl h-screen">👇🏻</p>
      <p className="flex items-center justify-center text-2xl md:text-5xl h-screen">
        El equipo de Informática 3E...
      </p>
      <p className="flex items-center justify-center text-9xl h-screen">👇🏻</p>
      <p className="flex items-center justify-center text-2xl md:text-5xl h-screen">
        ...tiene un mensaje muy especial
      </p>
      <p className="flex items-center justify-center text-9xl h-screen">👇🏻</p>
      <p className="flex items-center justify-center text-2xl md:text-5xl h-screen">
        Seguid...
      </p>
      <p className="flex items-center justify-center text-9xl h-screen">👇🏻</p>
      <p className="flex items-center justify-center text-2xl md:text-5xl h-screen">
        Más...
      </p>
      <p className="flex items-center justify-center text-9xl h-screen">👇🏻</p>
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl md:text-5xl pb-8">Denle al play y disfruten</p>
        <video
          className="max-w-[720px] w-full h-auto"
          autoPlay={false}
          controls
          poster="/image.jpg"
          src="/video.mp4"
        />
      </div>
    </main>
  )
}
