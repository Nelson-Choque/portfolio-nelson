import { ReactNode, useEffect, useRef } from "react";

import { Link } from "react-scroll";

export const Navbar = () => {
  const inputMenu = useRef<HTMLInputElement>(null);
  const menu = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!menu.current) {
      return;
    }

    const $menu: HTMLUListElement = menu.current;

    $menu.addEventListener("click", () => {
      if (!inputMenu.current) {
        return;
      }
      const $inputMenu: HTMLInputElement = inputMenu.current;

      $inputMenu.checked = false;
    });
  }, []);

  return (
    <nav className="sticky top-0 z-10 p-4 text-white bg-primary sm:min-h-screen sm:bg-transparent sm:flex sm:items-center sm:p-4 md:p-8">
      <div className="container grid items-center grid-cols-2 sm:grid-cols-1 ">
        <h2 className="font-semibold sm:hidden">Ncode</h2>
        <input
          ref={inputMenu}
          className="absolute invisible input-menu sm:hidden"
          type="checkbox"
          name=""
          id="menu"
        />
        <label className="place-self-end sm:hidden" htmlFor="menu">
          <i className="p-1 fa-solid fa-bars icon"></i>{" "}
        </label>
        <ul
          ref={menu}
          className="hidden col-span-2 sm:p-2 menu sm:flex sm:col-span-1 sm:gap-10 sm:place-self-end sm:flex-col sm:rounded-full sm:py-8"
        >
          <ItemNavbar title="Inicio" linkTo="section-main">
            <i className="hidden sm:block fa-solid fa-house icon"></i>
          </ItemNavbar>

          <ItemNavbar title="Sobre mí" linkTo="section-about-me">
            <i className="hidden sm:block fa-solid fa-user icon"></i>
          </ItemNavbar>
          <ItemNavbar title="Tecnologias" linkTo="section-skills">
            <i className="hidden sm:block fa-solid fa-code-merge icon"></i>
          </ItemNavbar>
          <ItemNavbar title="Proyectos" linkTo="section-projects">
            <i className="hidden sm:block fa-solid fa-briefcase icon"></i>
          </ItemNavbar>
          {/* <ItemNavbar title="Contactame" linkTo="">
            <i className="hidden sm:block fa-solid fa-phone icon"></i>
          </ItemNavbar> */}
        </ul>
      </div>
    </nav>
  );
};

function ItemNavbar({
  children,
  title,
  linkTo,
}: {
  children: ReactNode;
  title: string;
  linkTo: string;
}) {
  return (
    <Link to={linkTo}>
      <li className="relative flex items-center gap-2 py-4 cursor-pointer navbar-li sm:p-4 sm:py-2 sm:rounded-full sm:hover:bg-cyan-900 group">
        {children}
        <p className="sm:absolute sm:p-4 sm:ml-4 sm:rounded-full sm:hidden left-full bg-cyan-900 w-max group-hover:block">
          {title}
        </p>
      </li>
    </Link>
  );
}
