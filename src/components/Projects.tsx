import { Element } from "react-scroll";

export const Projects = () => {
  return (
    <>
      <img className="w-full col-start-2" src="/wave-vector.png" alt="" />
      <div className="col-start-2 p-4 min-h-screen-80 bg-primary-2">
        <Element name="section-projects" className="py-16">
          <h2 className="p-4 text-4xl font-bold text-center text-white">
            Proyectos
          </h2>

          <section className="grid max-w-screen-lg gap-8 mx-auto mt-8 md:grid-cols-2 ">
            {/* // */}
            <article>
              <div className="overflow-hidden bg-white border-4 rounded-2xl border-sky-900">
                <img
                  className="object-cover h-full"
                  src="/images/multienda.PNG"
                  alt=""
                />
              </div>
              <div className="mt-4 text-white">
                <h2 className="text-2xl font-semibold ">Multienda</h2>
                <p className="mt-2">
                  Multienda es una plataforma que ayuda a emprendedores y
                  negocios a crear, gestionar sus tiendas virtuales.{" "}
                </p>
              </div>
              <a
                href="https://multiendas.netlify.app/"
                className="inline-block mt-4 text-white btn bg-primary"
                target="_blank"
              >
                Visitar Pagina
              </a>
            </article>
            <article>
              <div className="overflow-hidden bg-white border-4 h-80 rounded-2xl border-sky-900">
                <img className="object-cover h-full" src="/cianse.png" alt="" />
              </div>
              <div className="mt-4 text-white">
                <h2 className="text-2xl font-semibold ">Cianse</h2>
                <p className="mt-2">
                  Cianse, es una Empresa especialista en maquila de empaques
                </p>
              </div>
              <a
                href="https://cianse.net/"
                className="inline-block mt-4 text-white btn bg-primary"
                target="_blank"
              >
                Visitar Pagina
              </a>
            </article>
            <article>
              <div className="overflow-hidden bg-white border-4 h-80 rounded-2xl border-sky-900">
                <img
                  className="object-cover h-full"
                  src="/images/buscador-gifts.PNG"
                  alt=""
                />
              </div>
              <div className="mt-4 text-white">
                <h2 className="text-2xl font-semibold ">BeGifs</h2>
                <p className="mt-2">
                  BeGifs, es una pagina diseñada para que las personas puedan
                  buscar gifs de manera facil y rapida.
                </p>
              </div>
              <a
                href="https://begifs.netlify.app/"
                className="inline-block mt-4 text-white btn bg-primary"
                target="_blank"
              >
                Visitar Pagina
              </a>
            </article>
            {/* //object 2 */}
          </section>
          <h2 className="p-4 text-4xl font-bold text-center text-white">
            Diseños
            <section className="grid max-w-screen-lg gap-4 mx-auto mt-8 sm:rounded-none sm:gap-0 sm:grid-cols-2 ">
              <img
                className="transition-transform hover:scale-110 rounded-2xl sm:rounded-none"
                src="/images/img-ncode.PNG"
                alt=""
              />
              <img
                className="transition-transform hover:scale-110 rounded-2xl sm:rounded-none"
                src="/images/img-ham.PNG"
                alt=""
              />
              <img
                className="transition-transform hover:scale-110 rounded-2xl sm:rounded-none"
                src="/images/img-sooke.PNG"
                alt=""
              />
              <img
                className="transition-transform hover:scale-110 rounded-2xl sm:rounded-none"
                src="/images/img-jimcat.PNG"
                alt=""
              />
              <img
                className="transition-transform hover:scale-110 rounded-2xl sm:rounded-none"
                src="/images/img-drinks.PNG"
                alt=""
              />
              <img
                className="transition-transform hover:scale-110 rounded-2xl sm:rounded-none"
                src="/images/img-pokemon.PNG"
                alt=""
              />
            </section>
          </h2>
        </Element>
      </div>
    </>
  );
};
