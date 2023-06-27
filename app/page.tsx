const texts = [
  'El equipo de Informática 3E...',
  '👇🏻',
  '...tiene un mensaje muy especial',
  '👇🏻',
  'Seguid...',
  '👇🏻',
  'Más...',
  '👇🏻',
  'Ya casi estáis...',
  '👇🏻',
  'Un poco más...',
  '👇🏻',
]

export default function Home() {
  return (
    <main className="relative container md:px-16 lg:px-32 mx-auto flex justify-center flex-col text-center">
      <div className="opacity-50 inset-0 background fixed w-screen h-screen z-[-1]" />
      <div className="flex flex-col items-center justify-around h-screen">
        <p className="flex items-center justify-center px-8 text-5xl md:text-7xl">
          Hola<br />Carlos y Jessi
        </p>
        <p className="flex items-center justify-center px-8 text-7xl md:text-9xl">
          👇🏻
        </p>
      </div>

      {texts.map((text, index) => (
        <p
          key={index}
          className={`flex items-center justify-center px-8 h-[50vh] ${
            text.length > 4 ? 'text-3xl md:text-5xl' : 'text-7xl md:text-9xl'
          }`}
        >
          {text}
        </p>
      ))}
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl md:text-5xl p-8">
          Esperamos que os guste este mensaje...
        </p>
        <video
          className="px-4 h-auto w-full max-w-[720px]"
          autoPlay={false}
          controls
          poster="/image.jpg"
          src="/video.mp4"
        />
        <p className="flex items-center justify-center p-8 text-7xl md:text-9xl">
          🤵🏻‍♂️ 👰🏻‍♀️
        </p>
        <p className="flex items-center justify-center p-8 text-7xl md:text-9xl">
          🎉
        </p>
      </div>
    </main>
  )
}
