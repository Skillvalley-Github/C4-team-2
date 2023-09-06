import React from "react";

function Header() {
  return (
    <div>
      <div>
      <header className="bg-white">
  <div
    className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
  >
    <a className="block text-teal-600" href="/">
      <span className="sr-only">Home</span>
      
      
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
              About
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
              Careers
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
              History
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
              Services
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
              Projects
            </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            href="/"
          >
            Login
          </a>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            href="/"
          >
            Register
          </a>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
      </div>
      <div class="flex justify-center  bg-blue-900 p-5 md:p-16 lg:p-28">
        <div class="flex flex-col justify-center  max-w-7xl  text-white">
          <h1 class="text-base font-medium tracking-wider ">
            Welcome to my Client Template
          </h1>
          <span class="underline underline-offset-2 text-white -mt-3">
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </span>
          <div class="flex flex-col text-white mt-5">
            <h1 class="text-4xl md:text-[50px] font-semibold">
              Hello I'm John Watson
            </h1>
            <p class="text-xl mt-2 md:mt-4 tracking-wide">
              Designer - Developer - Freelancer
            </p>
          </div>
          <p class="mt-4 text-sm md:w-[52%] tracking-wide leading-7">
            Tailblocks provides best Tailwind CSS components. Visit our website
            and feel free to give feedback. With the help of Tailblocks, a user
            can build a website in a much lesser time.
          </p>
          <div class="space-x-3 mt-6 md:mt-4">
            <a href="#">
              {" "}
              <i class="fa-brands fa-facebook-f bg-blue-600 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center "></i>
            </a>
            <a href="#">
              {" "}
              <i class="fa-brands fa-twitter bg-blue-600 hover:text-red-500 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
            </a>
            <a href="#">
              {" "}
              <i class="fa-brands fa-linkedin bg-blue-600 hover:text-yellow-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center"></i>
            </a>
            <a href="#">
              {" "}
              <i class="fa-brands fa-chrome bg-blue-600 hover:text-indigo-600 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
            </a>
          </div>
          <div class="flex mt-10 space-x-5">
            <button class="bg-white text-blue-600 px-6 py-2 hover:brightness-105 font-semibold">
              Read More
            </button>
            <button class="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {/* <script src="https://cdn.tailwindcss.com"></script> */}
      {/* <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script> */}
    </div>
  );
}

export default Header;
