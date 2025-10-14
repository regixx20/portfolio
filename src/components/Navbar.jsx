export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 sticky top-0 z-10">
      <h1 className="font-bold text-xl">Régix Mededji</h1>
      <div className="flex gap-6">
        <a href="#profil" className="hover:text-blue-400">Profil</a>
        <a href="#experiences" className="hover:text-blue-400">Expériences</a>
        <a href="#projets" className="hover:text-blue-400">Projets</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
