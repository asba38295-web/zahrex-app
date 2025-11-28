import react from "react";
import Link from "next/link";


export default function SignupFlex() {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Left: Auth Panel */}
      <div className="bg-white px-8 py-10 sm:px-12 lg:px-16 xl:px-24 flex items-center">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-12">
            <img  src="logoz.svg" className="tracking-tight" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Earning,
            <br />
            Made Easy
          </h1>
          <p className="text-[#7E7E7E] text-[20px]  mb-8">Sign up to start your 30 days free trial</p>

          {/* Google Sign In */}
          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-xl  px-4 py-3 text-xs font-semibold tracking-wide text-slate-700 hover:bg-slate-50 transition mb-8"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center">
              {/* Google G */}
              <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.6 29.4 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 5.1 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.3-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.5 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 5.1 29.3 3 24 3 15.5 3 8.2 7.8 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 45c5.3 0 10-2 13.5-5.3l-6.2-5.2C29.2 35.8 26.8 36 24 36c-5.3 0-9.8-3.4-11.4-8.1l-6.6 5.1C8 40.2 15.4 45 24 45z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.3-3.6 5.8-6.8 7.1l6.2 5.2C36.2 41.9 42 37 44.6 30.5c.9-2.2 1.4-4.7 1.4-7.5 0-1.2-.1-2.3-.4-3.5z"/>
              </svg>
            </span>
            <span className="uppercase tracking-wider">Sign in with Google</span>
          
          </button>

          {/* Form */}
          <form className="space-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[16px] text-[#686868]">Name<span className="text-[#686868]">*</span></label>
              <input id="name" type="text" placeholder="Enter your name" required className="w-full rounded-2xl border border-[#D9D9D9] bg-white px-4 py-3 outline-none ring-indigo-500/10 focus:ring-4 placeholder:text-[#CBCBCB] text-[12px]" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-[#686868]">Email<span className="text-[#686868]">*</span></label>
              <input id="email" type="email" placeholder="Enter your email" required className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-indigo-500/10 focus:ring-4 placeholder:text-[#CBCBCB] text-[12px]" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm text-[#686868]">Password<span className="text-[#686868]">*</span></label>
              <input id="password" type="password" placeholder="Enter your pass" required className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-indigo-500/10 focus:ring-4 placeholder:text-[#CBCBCB] text-[12px]" />
            </div>
            <Link href="/verificationCode" className="btn">

            <button  
            //type="submit" 
            className="w-full rounded-2xl px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-300/40 hover:opacity-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30" style={{background:'radial-gradient(148.33% 134.05% at 102.58% 36.49%, #060410 0%, #424AFF 45.51%, #9A9EFF 64.53%)'}}>
              Create Account
            </button>
            </Link >
          </form>





          <p className="mt-6 text-sm text-slate-600">
            Already have an account?{' '}
            <a href="#" className="font-semibold text-slate-900 underline underline-offset-4 hover:text-indigo-600">Login Here</a>
          </p>
        </div>
      </div>

      {/* Right: Visual Panel without absolute positioning */}
      <div
        className="hidden md:flex h-full w-full  bg-center bg-cover"
        style={{ backgroundImage: "url('/bgz.png')" }}
      >
        {/* Content wrapper uses flex & gaps only */}
        <div className="flex h-screen w-full overflow-y-scroll flex-col items-center justify-center p-6 sm:p-8 lg:p-12">
          {/* Top stack */}
          <div className="flex flex-col gap-6 w-full max-w-md">
            {/* Tiny dual blocks card */}
            <div className="rounded-[40px] bg-white/70  w-[368px] h-[435px] backdrop-blur-md p-4 shadow-xl">
              <div className="grid grid-cols-2 gap-3">
                <div className="h-28 rounded-xl bg-slate-900/80 grid place-items-center">
                  <span className="text-white text-lg font-semibold">45K</span>
                </div>
                <div className="h-28 rounded-xl bg-indigo-500 grid place-items-center">
                  <span className="text-white text-lg font-semibold">60K</span>
                </div>
              </div>
            </div>


            <div className="rounded-[40px] bg-white/70  w-[368px] h-[435px] backdrop-blur-md p-4 shadow-xl">
              <div className="grid grid-cols-2 gap-3">
                <div className="h-28 rounded-xl bg-slate-900/80 grid place-items-center">
                  <span className="text-white text-lg font-semibold">45K</span>
                </div>
                <div className="h-28 rounded-xl bg-indigo-500 grid place-items-center">
                  <span className="text-white text-lg font-semibold">60K</span>
                </div>
              </div>
            </div>

            {/* Engagement card */}
            <div className="rounded-[40px] bg-white w-[368px] h-[435px] backdrop-blur-md p-6 ">
              <p className="text-xs font-semibold text-slate-500">ENGAGEMENT</p>
              <p className="text-3xl font-bold mt-1">+89.45%</p>
              <div className="mt-6 flex items-end gap-3 h-24">
                {[18, 32, 42, 36, 28, 60].map((h, i) => (
                  <div key={i} className="flex-1 bg-indigo-400 rounded-t-xl" style={{ height: h }} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom sales card */}
            <div className="rounded-[40px]  w-[368px] h-[435px]   max-w-md flex flex-col gap-4">
              <div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
