import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Generacija RP</title>
        <meta name="description" content="Dobrodošli na službenu stranicu Generacija RP FiveM servera" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Generacija RP</h1>
        <p className="mb-6 text-center max-w-xl">Dobrodošli na službenu web stranicu našeg GTA V FiveM roleplay servera. Pridruži se zajednici, pročitaj pravila, pogledaj kartu grada i podrži nas kroz webshop!</p>
        <div className="flex gap-4">
          <a href="https://discord.gg/generacijarp" target="_blank" className="bg-primary px-4 py-2 rounded text-white font-semibold">Discord</a>
          <a href="#webshop" className="bg-white text-primary px-4 py-2 rounded font-semibold">Webshop</a>
        </div>
      </main>
    </>
  )
}
