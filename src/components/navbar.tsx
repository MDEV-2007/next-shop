import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white">
        <Link href={'/'}>
            {/* <Image 
            src={'/logo.svg'} alt={'logo'} width={150} height={40}/> */}
            <span className="font-bold text-black">Eccoshop</span>
            <p>ecosystem</p>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900">About</Link>
          <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
          <Link href={'/'} className="mr-5 hover:text-gray-900">Admin</Link>
          <Link href={'/'} className="mr-5 hover:text-gray-900">Contact us</Link>
        </nav>
        <div className="flex items-center space-x-2.5 text-sm">
          <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
            Log in
            </button>
            <button className="button bg-transparent border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white">
              Sign up
            </button>
        </div>
    </header>
  )
}

export default Navbar