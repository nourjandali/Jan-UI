import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";

const NavigationMenuItems = [
  { title: "Link One", href: "/linkone" },
  { title: "Link Two", href: "/linktwo" },
  { title: "Link Three", href: "/linkthree" },
  { title: "Link Four", href: "/linkfour" },
];

const DesktopNavMenu = ({ items }: any) => (
  <nav className="hidden md:flex items-center justify-center text-center ">
    {items.map(({ href, title }: any) => (
      <Button
        key={href}
        className="button-sm bg-transparent border-none text-black hover:bg-transparent dark:bg-transparent dark:text-white dark:hover:bg-transparent"
      >
        <a href={href}>{title}</a>
      </Button>
    ))}
    <div className="flex items-center gap-4">
      <Button variant="outline" size="sm">
        Login
      </Button>
      <Button size="sm">Get started</Button>
    </div>
  </nav>
);

const NavItem = ({ href, title, onClick }: any) => (
  <Button
    className="h-fit w-fit p-0 border-none hover:bg-transparent"
    variant="ghost"
    onClick={onClick}
  >
    <a href={href}>{title}</a>
  </Button>
);

const MobileNavMenu = ({ isOpen, closeNav }: any) =>
  isOpen && (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={closeNav}
      />
      <nav className="fixed top-0 left-0 h-full w-full bg-white z-20 px-global">
        <div className="pt-[18px]">
          <h1 className="text-3xl font-bold text-left">Logo</h1>
          <Separator className="my-[18px] bg-black w-full" />
          <div className="flex flex-col gap-8">
            {NavigationMenuItems.map((item) => (
              <NavItem key={item.href} {...item} onClick={closeNav} />
            ))}
            <div className="flex flex-col items-center justify-center text-center gap-6 w-full">
              <Button variant="outline" size="sm" className="w-full">
                Login
              </Button>
              <Button className="w-full" size="sm">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );

export default function Navbar1() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleBodyOverflow = (isOpen: any) => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    handleBodyOverflow(isNavOpen);
    return () => handleBodyOverflow(false);
  }, [isNavOpen]);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return (
    <main>
      <header className="flex items-center justify-between w-full h-auto min-h-[4.5rem] px-global">
        <h1 className="text-3xl font-bold text-left">Logo</h1>

        <div className="flex items-center gap-4 md:hidden">
          <Button className="z-30" size="icon" onClick={toggleNav}>
            {isNavOpen ? "×" : "☰"}
          </Button>
        </div>
        <MobileNavMenu isOpen={isNavOpen} closeNav={closeNav} />
        <DesktopNavMenu items={NavigationMenuItems} />
      </header>
      <Separator className="bg-black" />
    </main>
  );
}
