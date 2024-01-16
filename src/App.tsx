import { AboutMe } from "./components/AboutMe";
import Main from "./components/Main";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Navbar } from "./layout/Navbar";
import "./styles/app.scss";

function App() {
  return (
    <>
      <main className="min-h-screen bg-primary">
        <section className="main ">
          <Navbar />

          <Main />

          <AboutMe />
          <Skills />
          <Projects />
        </section>

        <footer className="p-8 text-center text-white ">
          <p>hecho por nelson choque | 2024</p>
        </footer>
      </main>
    </>
  );
}

export default App;
