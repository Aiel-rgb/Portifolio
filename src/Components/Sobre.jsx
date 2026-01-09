function Sobre() {
    return (
        <main>
            <div>
                <article>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="rounded-full bg-secondary text-white h-8 w-64 px-6 m-4 text-center shadow-lg shadow-secondary border-primary border-2 font-bold text- hover:scale-110 transition-all" >_python</p>
                            <p className="text-4xl font-bold m-6">CODANDO <br />PENSAMENTOS</p>
                            <p className="text-2xl font-bold m-6 text-primary border-b-4 border-secondary w-[680px] flex justify-center">
                                Olá Devs!, me chamo Gabriel e estou
                                Começando a desenvolver na área de fullstack.
                                Atualmente estou fazendo projetos web e estudando Data Science por livros e Amazon Web Services (AWS) pela Escola da nuvem.
                            </p>
                        </div>
                        <div>
                            <img 
                            src="./public/foto.png" 
                            alt="Foto minha" 
                            className="w-96 ml-64 m-6 rounded-full border-4 border-secondary hover:border-primary hover:scale-110 transition-all"
                            /> 
                        </div>
                    </div >
                    <div className="">
                        <h2 className="text-2xl font-bold m-6 text-secondary border-b-4 border-secondary w-[180px] flex justify-center">Minhas stacks</h2>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-3 gap-2">
                                <p className="rounded-full bg-secondary text-white h-12 w-64 px-6 m-4 text-center shadow-lg shadow-secondary border-primary border-2 font-bold text- hover:scale-110 transition-all hover:text-blue-800 hover:shadow-lg hover:shadow-blue-800 hover:border-blue-800"><i className="fa-brands fa-python fa-2xl mt-5"></i>Python</p>
                                <p className="rounded-full bg-secondary text-white h-12 w-64 px-6 m-4 text-center shadow-lg shadow-secondary border-primary border-2 font-bold text- hover:scale-110 transition-all hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400 hover:border-blue-400"><i className="fa-brands fa-react fa-2xl mt-5"></i>React</p>
                                <p className="rounded-full bg-secondary text-white h-12 w-64 px-6 m-4 text-center shadow-lg shadow-secondary border-primary border-2 font-bold text- hover:scale-110 transition-all hover:text-blue-700 hover:shadow-lg hover:shadow-blue-700 hover:border-blue-700"><i className="fa-brands fa-css3-alt fa-2xl mt-5"></i>CSS</p>
                                <p className="rounded-full bg-secondary text-white h-12 w-64 px-6 m-4 text-center shadow-lg shadow-secondary border-primary border-2 font-bold text- hover:scale-110 transition-all hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400 hover:border-blue-400"><i className="fa-brands fa-css3-alt fa-2xl mt-5"></i>Tailwind</p>
                                <p className="rounded-full bg-secondary text-white h-12 w-64 px-6 m-4 text-center shadow-lg shadow-secondary border-primary border-2 font-bold text- hover:scale-110 transition-all hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400 hover:border-yellow-400"><i className="fa-brands fa-js fa-2xl mt-5"></i>JS</p>
                                <p className="rounded-full bg-secondary text-white h-12 w-64 px-6 m-4 text-center shadow-lg shadow-secondary border-primary border-2 font-bold text- hover:scale-110 transition-all hover:text-red-600 hover:shadow-lg hover:shadow-red-600 hover:border-red-600"><i className="fa-brands fa-html5 fa-2xl mt-5"></i>HTML</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    )
}

export default Sobre