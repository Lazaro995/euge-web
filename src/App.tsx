import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Navbar from "./components/NavBar"

const App: React.FC = () => {
  
  return (
    <div
      className="bg-secondary text-white min-h-screen">
      <Navbar />
      <header
        className="text-center py-10"
      >
        <h1 className="text-4xl font-bold text-highlight uppercase">Hola, soy Eugenia</h1>
        <p className="text-xl">Mira mis cursos</p>
      </header>
      <main
        className="container mx-auto py-10"
      >
        <Carousel />
        <section
          id="about"
          className="py-10">
            <h2 className="text-2xl font-bold text-highlight">About</h2>
<p>Informacion sobre los cursos de gimnasia</p>
        </section>
        <section
        id="youtube"
        className="py-10">
          <h2 className="text-2xl font-bold text-highlight">Videos</h2>
          <p>ACA VA EL COMPONENTE DEL VIDEO</p>
{/* ACA IRIA EL COMPONENTE YOUTUBEPLAYER */}
        </section>
      </main>
<Footer/>
    </div>
  )
}


export default App
