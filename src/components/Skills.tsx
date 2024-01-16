import { Element } from "react-scroll";

export const Skills = () => {
  return (
    <>
      <img
        className="w-full col-start-2 bg-primary-2"
        src="/wave-vector-2.png"
        alt=""
      />
      <div className="col-start-2 p-4 min-h-screen-80 bg-primary">
        <Element name="section-skills" className="py-16">
          <div className="">
            <h2 className="p-4 text-4xl font-bold text-center text-white">
              Tecnologias
            </h2>
            <section className="flex flex-wrap items-center justify-center max-w-screen-md gap-8 mx-auto mt-8 text-white ">
              <SkillItem name="HTML" imgUrl={"/html.png"} />
              <SkillItem name="CSS" imgUrl={"/css3.png"} />
              <SkillItem name="Javascript" imgUrl={"/javascript.webp"} />
              <SkillItem name="React" imgUrl={"/react.png"} />
              <SkillItem name="Nodejs" imgUrl={"/nodejs.png"} />
              <SkillItem name="Typeorm" imgUrl={"/typeorm.png"} />
              <SkillItem name="Mysql" imgUrl={"/mysql.png"} />
              <SkillItem name="Postgress" imgUrl={"/postgress.webp"} />
              <SkillItem name="Flutter" imgUrl={"/flutter.png"} />
              <SkillItem name="Sass" imgUrl={"/sass.png"} />
              <SkillItem name="Tailwind" imgUrl={"/tailwind.png"} />
              <SkillItem name="Git" imgUrl={"/git.png"} />
              <SkillItem name="Github" imgUrl={"/github.png"} />
            </section>
          </div>
        </Element>
      </div>
    </>
  );
};

function SkillItem({ name, imgUrl }: { name: string; imgUrl: string }) {
  return (
    <article className="flex flex-col gap-4">
      <img className="object-contain w-16 h-16 mx-auto" src={imgUrl} alt="" />
      <p className="p-4 bg-secundary rounded-2xl">{name}</p>
    </article>
  );
}
