
import MenuItem from '../components/header';
import { AiFillHome } from 'react-icons/ai';
import Link from 'next/link';
import logo from "../assets/ilogo.png";
import Image from "next/image"
import { useState } from 'react';


export default function Navigation({ children }) {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div style={{ width: "100%" }} className='justify-between  mx-auto text-right'>


      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-white-p p-1 text-left ham">
          <Link href="/" className='hover:text-amber-500' passHref>
            <Image
              src={logo}
              alt="logo Image"
              width={40}
              height={40}

            />
            </Link>
          </div>
          <div className=" text-white-p p-1 none_display_">
          <span className="p-1_menu">
            <MenuItem title='Movie' />
            </span>
            <span className="p-1_menu">
            <MenuItem title='TV Show' />
            </span>
            <span className= "p-1_menu">
            <MenuItem title='Suggest Me' />
            

            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
            </span>

          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white optopn_ham focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Menu Items */}

            <div
              className={`${menuOpen ? 'block' : 'hidden'
                } md:flex md:items-center md:space-x-4 none_display`}
            >
              <ul>
                <li>
                  <Link href="/">
                    <a className="text-white">Movies</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="text-white">TV Show</a>
                  </Link>
                </li>
                <li>

                </li>
                <Link href="/">
                  <a className="text-white">Suggest Me</a>
                </Link>
              </ul>
            </div>
          </div>
          {/* Main content */}
          <main className="container mx-auto p-4">{children}</main>

          {/* JavaScript for toggling menu */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            const toggleMenu = () => {
              const menu = document.getElementById('menu');
              menu.classList.toggle('hidden');
              menu.classList.toggle('block');
            };
          `,
            }}
          />

        </div>
      </div>
    </div>

  );
}









