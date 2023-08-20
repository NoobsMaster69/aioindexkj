import Link from "next/link";

export function Header() {
  return (
    <header className="relative top-4 z-20">
      <div className="relative flex gap-x-4">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 justify-end md:justify-center">
          <nav className="pointer-events-auto hidden md:block">
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-indigo-500 dark:hover:text-indigo-600"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-indigo-500 dark:hover:text-indigo-600"
                  href="/about"
                >
                  About
                </Link>
              </li>
             
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-indigo-500 dark:hover:text-indigo-600"
                  href="https://rens.my.id/" target="_Blank"
                >
                  Pegelola
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-end md:flex-1">
          <div className="pointer-events-auto">
        
          </div>
        </div>
      </div>
    </header>
  );
}
