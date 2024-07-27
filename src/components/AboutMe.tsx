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
              Soy desarrollador de software con formación en Ingeniería
              Empresarial y Sistemas, He trabajado en diversos proyectos que
              abarcan desde el desarrollo Frontend hasta la creación de
              aplicaciones completas. Mi experiencia laboral incluye roles en
              tanto como Full Stack Developer como Frontend Developer,
              contribuyendo al mantenimiento y desarrollo de componentes,
              endpoints, y la integración de APIs con tecnologías como Next.js,
              React, y Python
            </p>
            <h3 className="mt-4 text-2xl font-bold text-white">Educacion</h3>
            <div className="mt-2 text-white">
              <p className="text-lg font-medium">
                Universitario | Ingenieria Empresarial y Sitemas | USIL
              </p>
              <p>Estudiante</p>
              <p> 2024 - actualmente </p>
            </div>
            <div className="mt-2 text-white">
              <p className="text-lg font-medium">
                Tecnico | Desarrollo de sistemas de informacion | IDAT
              </p>
              <p>Egresado</p>
              <p> 2020 - 2023 </p>
            </div>
            <a
              href="/cv-nelson-choque-huallpa.pdf"
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
