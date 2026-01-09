import { Routes, Route } from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import HomePage from "./pages/HomePage"
import Experiencias from "./pages/Experiencias"
import Projetos from "./pages/Projetos"
import Contato from "./pages/Contato"

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-tertiary m-0 flex flex-col justify-center items-center">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experiencias" element={<Experiencias />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
