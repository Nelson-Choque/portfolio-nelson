import { Element } from "react-scroll";

export const AboutMe = () => {
  return (
    <>
      <img className="w-full col-start-2" src="/wave-vector.png" alt="" />
      <div className="col-start-2 p-4 min-h-screen-80 bg-primary-2">
        <Element name="section-about-me" className="py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="p-4 text-4xl font-bold text-center text-white">
              Sobre mi
            </h2>
            <p className="mt-4 text-white ">
              Soy desarrollador web con solidos conocimientos en diseño y
              programación. Mi enfoque proactivo y versatilidad me permiten
              abordar proyectos de manera efectiva. Estoy comprometido a
              continuar aprendiendo y en busca de nuevas oportunidades para
              crecer profesionalmente.
            </p>
            <h3 className="mt-4 text-2xl font-bold text-white">Educacion</h3>
            <div className="mt-2 text-white">
              <p className="text-lg font-medium">
                Tecnico | Desarrollo de sistemas de informacion | IDAT
              </p>
              <p>Egresado</p>
              <p> 2020 - 2023 </p>
            </div>
            <a
              href="/cv-choque-nelson.pdf"
              target="_blank"
              className="inline-block mx-auto mt-8 text-white btn bg-primary"
            >
              Descargar Cv
            </a>
          </div>
        </Element>
      </div>
    </>
  );
};
