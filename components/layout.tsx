
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState, useEffect } from 'react'; // Add useEffect here
import Link from 'next/link';
interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  return (
    <div className="mx-auto flex flex-col space-y-4 bg-black">
      <header className="sticky top-0 z-40 bg-white ">
        
      </header>
      <div className="h-16 border-b border-b-slate-200 py-4 bg-black">
      <Link href="/">
        <BsChevronLeft size={30} style={{ cursor: 'pointer', color: 'white', marginLeft: "25px" }} />
      </Link>
        {/* <nav className="ml-4 pl-6">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <BsChevronLeft /> : <BsChevronRight />}
          </button>
          <div className={`absolute left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-white shadow-md transition-transform duration-200 ease-in-out overflow-y-auto flex flex-col justify-between`} style={{ height: 'calc(100vh - 4rem)' }}>
            <div>
              <a href="" className="block text-black p-4 hover:text-slate-600 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                Home
              </a>
              <Link href="/Result" className="block text-black p-4 hover:text-slate-600 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                Result Maker
              </Link>
              <a href="/contact" className="block text-black p-4 hover:text-slate-600 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                Contact
              </a>
              <a href="https://xaviertech.ac.in/index.php/about" className="block text-black p-4 hover:text-slate-600 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                About
              </a>
            </div>
            <Link href="/settings" className="block text-black p-4 hover:text-slate-600 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
  Settings
</Link>
          </div>
        </nav> */}
      </div>
      <div className="">
        <main className="flex w-full flex-1 flex-col overflow-hidden bg-black">
          {children}
        </main>
      </div>
    </div>
  );
}