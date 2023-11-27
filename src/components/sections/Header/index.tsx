export default async function Header() {
  return (
    <header className=" bg-yellow-50 flex flex-row items-center text-black">
      <div className="h-full bg-gray-300 p-4 lg:p-6">
        Logo
      </div>
      <div className="flex-1 bg-slate-400 p-4 lg:p-6 text-right">
        Navigation
      </div>
    </header>
  )
}
