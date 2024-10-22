import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 px-8">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/owl.png"
            className="h-16"
            alt="BeastCodZ Logo"
            width={64}
            height={64}
          />
        </a>
      </div>
    </nav>
  );
}
