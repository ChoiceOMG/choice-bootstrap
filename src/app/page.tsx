import Header from "@/components/sections/Header"

export default async function Home() {


  return (
    <div className="w-full bg-slate-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen w-full bg-indigo-50">

        <div className="max-w-3xl mx-auto">
          <div className="py-16 sm:py-24">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Page</h1>
          </div>
        </div>
      </main>
    </div>
  )
}
