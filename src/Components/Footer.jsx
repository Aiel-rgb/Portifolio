function Footer() {
    return (
        <footer>
            <div className="bg-dark-gray h-[220px]">
                <p className="text-white text-center font-bold">© 2025 Neves.py. Todos os direitos reservados.</p>
                <div className="grid grid-cols-3">
                    <div>
                    <h1 className="text-2xl text-primary font-bold px-20 py-4"><i className="fa-brands fa-python fa-2xl"></i>Neves.py</h1>
                    <p className="text-tertiary text-center font-bold w-[270px] ml-20">
                        Esse é meu portifolio com React e tailwind, essa é a segunda vez q uso essas ferramentas e estou bem feliz por estar entendendo. Rumo ao topo
                    </p>
                    </div>
                    <div>
                    <ul className="flex justify-between flex-col gap-4 mt-5">
                        <li><a href="https://github.com/Aiel-rgb" target="_blank" className="text-tertiary font-bold"><i className="fa-brands fa-github fa-2xl text-black"></i>GITHUB</a></li>
                        <li><a href="https://www.linkedin.com/in/gabrielnevesf/" target="_blank" className="text-tertiary font-bold"><i className="fa-brands fa-linkedin fa-2xl text-blue-500"></i>LINKEDIN</a></li>
                        <li><a href="https://www.instagram.com/nevesz.15/" target="_blank" className="text-tertiary font-bold"><i className="fa-brands fa-instagram fa-2xl text-pink-500"></i>INSTAGRAM</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer