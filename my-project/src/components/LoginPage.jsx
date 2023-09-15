// import React from 'react'

// function LoginPage() {
//   return (
//     <div>
//         <div class="bg-white py-6 sm:py-8 lg:py-12">
//   <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
//     <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>

//     <form class="mx-auto max-w-lg rounded-lg border">
//       <div class="flex flex-col gap-4 p-4 md:p-8">
//         <div>
//           <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>

//           <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring place-content-center" />

//           {/* absolute inset-y-0 end-0 grid place-content-center px-4 */}

//         </div>

//         <div>
//           <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
//           <input name="password" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
//         </div>

//         <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>

//         <div class="relative flex items-center justify-center">
//           <span class="absolute inset-x-0 h-px bg-gray-300"></span>
//           <span class="relative bg-white px-4 text-sm text-gray-400">Log in with social</span>
//         </div>

//         <button class="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
//           <svg class="h-5 w-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 0C5.37273 0 0 5.37273 0 12C0 18.0164 4.43182 22.9838 10.2065 23.8516V15.1805H7.23764V12.0262H10.2065V9.92727C10.2065 6.45218 11.8996 4.92655 14.7878 4.92655C16.1711 4.92655 16.9025 5.02909 17.2489 5.076V7.82945H15.2787C14.0525 7.82945 13.6244 8.99182 13.6244 10.302V12.0262H17.2178L16.7302 15.1805H13.6244V23.8773C19.4815 23.0825 24 18.0747 24 12C24 5.37273 18.6273 0 12 0Z" fill="white" />
//           </svg>

//           Continue with Facebook
//         </button>

//         <button class="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
//           <svg class="h-5 w-5 shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z" fill="#4285F4" />
//             <path d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z" fill="#34A853" />
//             <path d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z" fill="#FBBC05" />
//             <path d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z" fill="#EA4335" />
//           </svg>

//           Continue with Google
//         </button>

//       </div>

//       <div class="flex items-center justify-center bg-gray-100 p-4">
//         <p class="text-center text-sm text-gray-500">Don't have an account? <a href="_blank" target="/login" class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Register</a></p>
//       </div>
//     </form>
//   </div>
// </div>

// {/* <section className="relative flex flex-wrap lg:h-screen lg:items-center">
//   <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24"> */}
//     {/* <div className="mx-auto max-w-lg text-center">
//       <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

//       <p className="mt-4 text-gray-500">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
//         eaque error neque ipsa culpa autem, at itaque nostrum!
//       </p>
//     </div> */}

//     {/* <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4"> */}
//       {/* <div>
//         <label htmlFor="email" className="sr-only">Email</label> */}

//         {/* <div className="relative"> */}
//           {/* <input
//             type="email"
//             className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//             placeholder="Enter email"
//           /> */}

//           {/* <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//               />
//             </svg>
//           </span> */}
//         {/* </div> */}
//       {/* </div> */}

//       {/* <div>
//         <label htmlFor="password" className="sr-only">Password</label>

//         <div className="relative"> */}
//           {/* <input
//             type="password"
//             className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
//             placeholder="Enter password"
//           /> */}

//           {/* <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//               />
//             </svg>
//           </span> */}
//         {/* </div> */}
//       {/* </div> */}

//       {/* <div className="flex items-center justify-between"> */}
//         {/* <p className="text-sm text-gray-500">
//           No account?
//           <a className="underline" href="">Sign up</a>
//         </p> */}

//         {/* <button
//           type="submit"
//           className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
//         >
//           Sign in
//         </button> */}
//       {/* </div> */}
//     {/* </form> */}
//   {/* </div> */}

//   {/* <div className="relative h-64 medium-full w-full sm:h-96 lg:h-full">
//     <img
//       alt="Welcome"
//       src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
//       className="absolute inset-0 h-full w-full object-cover"
//     />
//   </div> */}
//   <div className="relative h-screen w-screen">
//     <img
//       alt="Welcome"
//       src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
//       className="absolute inset-0 h-full w-full object-cover"
//     />
// </div>

//   {/* <div className="relative h-64 medium-full w-full sm:h-96 lg:h-full">
//     <img
//       alt="Welcome"
//       src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
//       className="absolute inset-0 h-full w-full object-cover"
//     />
// </div> */}
// {/* // </section> */}
//     </div>
//   )
// }

// export default LoginPage;

// import React from 'react';

// function LoginPage() {
//   return (
//     <div className="flex min-h-screen">
//       {/* Left Section (Image) */}
//       <div className="flex-1 bg-cover relative">
//         <img
//           alt="Welcome"
//           src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//       </div>

//       {/* Right Section (Login Form) */}
//       <div className="flex-1 flex items-center justify-center">
//         <div className="bg-white py-6 sm:py-8 lg:py-12 mx-auto max-w-screen-md px-4 md:px-8">
//           <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>
//           <form className="rounded-lg border">
//             {/* Your form content here */}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React from "react";
import llogo from "../assets/llogo.png";

function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      <div className="md:flex-1 flex items-center justify-center">
        <div className="bg-white py-6 sm:py-8 lg:py-12 mx-auto max-w-screen-md px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Login
          </h2>
          <form className="rounded-lg border">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  for="email"
                  class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Email
                </label>

                <input
                  name="email"
                  placeholder="aryansh0004@gmail.com"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring place-content-center "
                />

                
              </div>

              <div>
                <label
                  for="password"
                  class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="xxxxxxxx"
                  class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                Log in
              </button>

              <div class="relative flex items-center justify-center">
                <span class="absolute inset-x-0 h-px bg-gray-300"></span>
                
              </div>

              <button class="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
                <svg
                  class="h-5 w-5 shrink-0"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            <div class="flex items-center justify-center bg-gray-100 p-4">
              <p class="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <a
                  href="_blank"
                  target="/login"
                  class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="md:flex-1 bg-cover relative">
        <img
          alt="Welcome"
          src={llogo}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default LoginPage;



{/* <section class="bg-white">
<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
  <section
    class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
  >
    <img
      alt="Night"
      src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      class="absolute inset-0 h-full w-full object-cover opacity-80"
    />

    <div class="hidden lg:relative lg:block lg:p-12">
      <a class="block text-white" href="/">
        <span class="sr-only">Home</span>
        <svg
          class="h-8 sm:h-10"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        Welcome to Squid 🦑
      </h2>

      <p class="mt-4 leading-relaxed text-white/90">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
        dolorum aliquam, quibusdam aperiam voluptatum.
      </p>
    </div>
  </section>

  <main
    class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
  >
    <div class="max-w-xl lg:max-w-3xl">
      <div class="relative -mt-16 block lg:hidden">
        <a
          class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
          href="/"
        >
          <span class="sr-only">Home</span>
          <svg
            class="h-8 sm:h-10"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
              fill="currentColor"
            />
          </svg>
        </a>

        <h1
          class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Welcome to Squid 🦑
        </h1>

        <p class="mt-4 leading-relaxed text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          nam dolorum aliquam, quibusdam aperiam voluptatum.
        </p>
      </div>

      <form action="#" class="mt-8 grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label
            for="FirstName"
            class="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>

          <input
            type="text"
            id="FirstName"
            name="first_name"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label
            for="LastName"
            class="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>

          <input
            type="text"
            id="LastName"
            name="last_name"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div class="col-span-6">
          <label for="Email" class="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            id="Email"
            name="email"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label
            for="Password"
            class="block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <input
            type="password"
            id="Password"
            name="password"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label
            for="PasswordConfirmation"
            class="block text-sm font-medium text-gray-700"
          >
            Password Confirmation
          </label>

          <input
            type="password"
            id="PasswordConfirmation"
            name="password_confirmation"
            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div class="col-span-6">
          <label for="MarketingAccept" class="flex gap-4">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
            />

            <span class="text-sm text-gray-700">
              I want to receive emails about events, product updates and
              company announcements.
            </span>
          </label>
        </div>

        <div class="col-span-6">
          <p class="text-sm text-gray-500">
            By creating an account, you agree to our
            <a href="#" class="text-gray-700 underline">
              terms and conditions
            </a>
            and
            <a href="#" class="text-gray-700 underline">privacy policy</a>.
          </p>
        </div>

        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          >
            Create an account
          </button>

          <p class="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <a href="#" class="text-gray-700 underline">Log in</a>.
          </p>
        </div>
      </form>
    </div>
  </main>
</div>
</section> */}