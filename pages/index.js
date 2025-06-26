import Head from 'next/head'
import Webshop from '../components/Webshop'

export default function Home() {
  return (
    <>
      <Head>
        <title>Generacija RP</title>
        <meta name="description" content="Dobrodošli na službenu stranicu Generacija RP FiveM servera" />
      </Head>

      {/* Meni */}
      <nav className="bg-primary text-white p-4 fixed top-0 left-0 w-full z-50">
        <ul className="flex gap-6 justify-center">
          <li><a href="#home" className="hover:underline">Početna</a></li>
          <li><a href="#webshop" className="hover:underline">Webshop</a></li>
          <li><a href="#rules" className="hover:underline">Pravila</a></li>
          <li><a href="#contact" className="hover:underline">Kontakt</a></li>
          <li><a href="#social" className="hover:underline">Društvene mreže</a></li>
        </ul>
      </nav>

      {/* Glavni sadržaj */}
      <main className="min-h-screen flex flex-col items-center justify-start p-4 pt-20 max-w-4xl mx-auto">

        {/* Početna */}
        <section id="home" className="mb-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Generacija RP</h1>
          <p className="mb-6 max-w-xl mx-auto">
            Dobrodošli na službenu web stranicu našeg GTA V FiveM roleplay servera. Pridruži se zajednici, pročitaj pravila, pogledaj kartu grada i podrži nas kroz webshop!
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://discord.gg/generacijarp" target="_blank" rel="noopener noreferrer" className="bg-primary px-4 py-2 rounded text-white font-semibold">Discord</a>
            <a href="#webshop" className="bg-white text-primary px-4 py-2 rounded font-semibold">Webshop</a>
          </div>
        </section>

        {/* Webshop */}
        <section id="webshop" className="w-full mb-20">
          <Webshop />
        </section>

        {/* Pravila */}
        <section id="rules" className="w-full mb-20">
          <h2 className="text-2xl font-bold mb-4">Pravila servera</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Poštuj druge igrače.</li>
            <li>Zabranjeno je cheating i exploit.</li>
            <li>Koristi RP govor i ponašanje.</li>
            <li>Pridržavaj se uputa admina i moderatora.</li>
          </ul>
        </section>

        {/* Kontakt */}
        <section id="contact" className="w-full mb-20">
          <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
          <p>Za sva pitanja, slobodno nam piši na:</p>
          <a href="mailto:info@generacijarp.com" className="text-primary underline">info@generacijarp.com</a>
        </section>

        {/* Društvene mreže */}
        <section id="social" className="w-full mb-20">
          <h2 className="text-2xl font-bold mb-4">Društvene mreže</h2>
          <ul className="space-y-2">
            <li><a href="https://instagram.com/tvojprofil" target="_blank" rel="noopener noreferrer" className="text-primary underline">Instagram</a></li>
            <li><a href="https://tiktok.com/@tvojprofil" target="_blank" rel="noopener noreferrer" className="text-primary underline">TikTok</a></li>
            <li><a href="https://discord.gg/generacijarp" target="_blank" rel="noopener noreferrer" className="text-primary underline">Discord</a></li>
          </ul>
        </section>

      </main>
    </>
  )
}


