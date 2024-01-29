import { Element, Link } from "react-scroll";

export default function Main() {
  return (
    <>
      <Element name="section-main" className="py-16">
        <div className="grid p-4 mx-auto text-white min-h-screen-70 w-fit place-content-center text-start sm:min-h-screen-90 ">
          <h2 className="text-4xl font-bold sm:text-6xl">Nelson Choque</h2>
          <h3 className="mt-2 text-2xl font-medium sm:text-3xl text-acid">
            Desarrollador de software
          </h3>
          <section className="flex ">
            <article className="p-2 pl-0">
              <a href="https://github.com/Nelson-Choque/" target="_blank">
                <i className="fa-brands fa-github icon"></i>
              </a>
            </article>
            <article className="p-2">
              <a
                href="https://www.linkedin.com/in/nelson-choque-huallpa-b6b4252b0/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin icon"></i>
              </a>
            </article>
          </section>

          <section className="flex gap-4 mt-4">
            <Link to="section-about-me">
              <button className="btn bg-secundary ">Sobre mí</button>
            </Link>
            <Link to="section-projects">
              <button className="btn bg-secundary">Proyectos</button>
            </Link>
          </section>
        </div>
      </Element>
    </>
  );
}
