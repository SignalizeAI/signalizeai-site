"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
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
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setNavbarOpen(false);
      }
    }
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-0 z-[999] flex w-full justify-center px-4">
        <div
          className={`border-stroke/10 relative flex w-full max-w-5xl items-center justify-between rounded-full border bg-white/80 px-4 py-2 pl-6 backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-[#0a0a0a]/80 ${
            sticky
              ? "shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              : "shadow-[0_4px_15px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_15px_rgba(0,0,0,0.25)]"
          }`}
        >
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-7 w-7">
                <Image
                  src="/images/logo/logo-dark.png"
                  alt="SignalizeAI Logo"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/images/logo/logo-white.png"
                  alt="SignalizeAI Logo"
                  fill
                  className="hidden object-contain dark:block"
                />
              </div>

              <span className="text-l hidden font-bold tracking-tight text-slate-800 sm:block dark:text-white">
                Signalize
                <span className="text-primary dark:text-accent">AI</span>
              </span>
            </Link>
          </div>

          <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul className="flex items-center gap-x-8">
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    href={menuItem.path || "#"}
                    onClick={(e) => handleNavClick(e, menuItem.path || "")}
                    className="text-dark/70 hover:text-primary text-sm font-medium transition-colors dark:text-gray-300 dark:hover:text-white"
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggler />

            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="bg-primary hover:bg-primary/90 hidden items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white transition lg:flex dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Get Started
            </Link>

            <button
              onClick={navbarToggleHandler}
              aria-label="Mobile Menu"
              className="text-dark flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 lg:hidden dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              <span className="relative block h-5 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-full transform bg-current transition-all duration-300 ${
                    navbarOpen ? "top-2.5 rotate-45" : "top-1"
                  }`}
                />
                <span
                  className={`absolute top-2.5 left-0 block h-0.5 w-full bg-current transition-all duration-300 ${
                    navbarOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-full transform bg-current transition-all duration-300 ${
                    navbarOpen ? "top-2.5 -rotate-45" : "top-4"
                  }`}
                />
              </span>
            </button>
          </div>

          <div
            className={`border-stroke/10 absolute top-full left-0 mt-2 w-full transform rounded-3xl border bg-white/95 p-4 shadow-xl backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden dark:border-white/10 dark:bg-[#0a0a0a]/95 ${
              navbarOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-4 opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-2">
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    href={menuItem.path || "#"}
                    onClick={(e) => handleNavClick(e, menuItem.path || "")}
                    className="text-dark flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-gray-100 pt-2 dark:border-white/10">
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold text-white transition dark:bg-white dark:text-black"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

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
