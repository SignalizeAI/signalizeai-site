"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Marker state
  const [markerStyle, setMarkerStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = useRef<HTMLUListElement>(null);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // 1. Scroll Logic
  useEffect(() => {
    const handleStickyNavbar = () => {
      if (window.scrollY >= 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // 2. Marker Logic
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!navRef.current) return;
    const parentRect = navRef.current.getBoundingClientRect();
    const targetRect = e.currentTarget.getBoundingClientRect();

    setMarkerStyle({
      left: targetRect.left - parentRect.left,
      width: targetRect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMarkerStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const sectionId = path.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
        setNavbarOpen(false);
      }
    }
  };

  return (
    <>
      <style jsx global>{`
        :root {
          --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.1);
          --ease-smooth: cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        @media (min-width: 1024px) {
          .nav-morph {
            transition:
              top 0.5s var(--ease-smooth),
              max-width 0.5s var(--ease-smooth),
              width 0.5s var(--ease-smooth),
              padding 0.5s var(--ease-smooth),
              border-radius 0.5s var(--ease-smooth),
              background-color 0.4s ease,
              backdrop-filter 0.4s ease,
              box-shadow 0.4s ease,
              border 0.4s ease;
          }
        }

        .marker-transition {
          transition:
            left 0.3s var(--ease-spring),
            width 0.3s var(--ease-spring),
            opacity 0.2s ease-out;
        }

        .marker-glow::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 15%;
          width: 70%;
          height: 8px;
          background: rgba(255, 80, 80, 0.4);
          filter: blur(8px);
          opacity: 0.6;
          z-index: -1;
        }
      `}</style>

      <header
        className={`nav-morph fixed left-1/2 z-[999] flex w-full -translate-x-1/2 items-center justify-between border border-transparent bg-white/80 backdrop-blur-md dark:bg-slate-950/80 ${
          sticky
            ? "top-0 border-b border-gray-200 px-4 py-4 lg:top-6 lg:max-w-5xl lg:rounded-full lg:border-white/10 lg:px-6 lg:py-2.5 lg:shadow-2xl dark:border-gray-800 lg:dark:bg-slate-900/80"
            : "top-0 max-w-full rounded-none border-b border-gray-100 px-4 py-4 lg:px-8 dark:border-white/5"
        }`}
      >
        {/* ^^^ FIX IS HERE: Changed 'px-8' to 'px-4' in the else block above, added 'lg:px-8' for desktop only */}

        {/* LOGO */}
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo/logo-dark.png"
                alt="Logo"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/images/logo/logo-white.png"
                alt="Logo"
                fill
                className="hidden object-contain dark:block"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-black transition-all duration-300 dark:text-white">
              Signalize<span className="text-primary dark:text-accent">AI</span>
            </span>
          </Link>
        </div>

        {/* DESKTOP NAV - CENTERED */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul
            ref={navRef}
            className="relative flex items-center p-1"
            onMouseLeave={handleMouseLeave}
          >
            {/* THE MARKER */}
            <div
              className="marker-transition marker-glow pointer-events-none absolute top-1 bottom-1 rounded-full bg-gray-200/50 dark:bg-white/10"
              style={{
                left: markerStyle.left,
                width: markerStyle.width,
                opacity: markerStyle.opacity,
              }}
            />

            {menuData.map((menuItem, index) => (
              <li key={index} className="relative z-10">
                <Link
                  href={menuItem.path || "#"}
                  onClick={(e) => handleNavClick(e, menuItem.path || "")}
                  onMouseEnter={handleMouseEnter}
                  className={`block px-5 py-1.5 text-sm font-medium transition-colors duration-200 ${sticky ? "text-slate-600 dark:text-slate-300" : "text-slate-800 dark:text-slate-200"} hover:text-black dark:hover:text-white`}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden gap-2 lg:flex">
            <Link
              href="https://discord.gg/signalizeai"
              target="_blank"
              className="rounded-full p-2 text-slate-500 transition hover:bg-gray-100 hover:text-black dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <span className="sr-only">Discord</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.007-.12a10.149 10.149 0 0 0 .372-.294a.07.07 0 0 1 .073-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .074.009c.12.098.246.198.373.294a.072.072 0 0 1-.006.12a12.296 12.296 0 0 1-1.873.892a.07.07 0 0 0-.037.099a14.97 14.97 0 0 0 1.293 2.1a.078.078 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.079.079 0 0 0 .033-.057c.57-4.564-.956-8.526-4.05-12.055a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.96-2.157 2.157-2.157c1.202 0 2.169.964 2.157 2.157c0 1.19-.955 2.157-2.157 2.157zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.96-2.157 2.157-2.157c1.202 0 2.169.964 2.157 2.157c0 1.19-.955 2.157-2.157 2.157z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/SignalizeAI"
              target="_blank"
              className="rounded-full p-2 text-slate-500 transition hover:bg-gray-100 hover:text-black dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <ThemeToggler />
          </div>

          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className={`hidden items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg lg:flex ${
              sticky ? "bg-primary hover:bg-primary/90" : "bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
            }`}
          >
            Get Started
          </Link>

          {/* MOBILE THEME TOGGLE */}
          <div className="lg:hidden">
            <ThemeToggler />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={navbarToggleHandler}
            aria-label="Toggle Mobile Menu"
            className="p-2 text-slate-800 lg:hidden dark:text-white"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ${navbarOpen ? "top-2.5 rotate-45" : "top-1"}`}
              />
              <span
                className={`absolute top-2.5 left-0 block h-0.5 w-full bg-current transition-all duration-300 ${navbarOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ${navbarOpen ? "top-2.5 -rotate-45" : "top-4"}`}
              />
            </span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`absolute top-full left-0 mt-4 w-full px-4 transition-all duration-300 lg:hidden ${
            navbarOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }`}
        >
          <div className="w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-slate-950">
            <ul className="flex flex-col gap-2">
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    href={menuItem.path || "#"}
                    onClick={(e) => handleNavClick(e, menuItem.path || "")}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-white/5"
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}

              {/* Social Links */}
              <li className="mt-2">
                <Link
                  href="https://discord.gg/signalizeai"
                  target="_blank"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-white/5"
                >
                  <span>Discord</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/SignalizeAI"
                  target="_blank"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-white/5"
                >
                  <span>GitHub</span>
                </Link>
              </li>

              <li className="border-t border-gray-100 pt-3 dark:border-gray-800">
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="bg-primary hover:bg-opacity-90 flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-bold text-white transition"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* BACKDROP FOR MOBILE */}
      {navbarOpen && (
        <div
          className="fixed inset-0 z-[998] bg-transparent"
          onClick={() => setNavbarOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
