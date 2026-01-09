

function Projetos() {
    return (
        <div className="flex-1 bg-tertiary m-0 p-8">
            <h1 className="text-4xl text-primary font-bold border-b-4 border-secondary w-[260px] flex justify-center mb-6">Projetos</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-12">
                    <div>
                        <img src="./public/lista.png" alt="Lista_de_desejos_python" />
                        <p className="w-[600px] mb-4 mt-2">
                            <b className="text-primary text-2xl border-b-2 border-secondary">🎯 Lista de Desejos com SQLite</b> <br />
                            Este é um projeto simples desenvolvido em Python com o objetivo de praticar Programação Orientada a Objetos (POO) e banco de dados SQLite.
                            A aplicação permite gerenciar listas de desejos através de um menu interativo no terminal.
                        </p>
                        <button className="border-2 border-black rounded-md p-2 bg-black text-white hover:scale-110 transition"><i className="fa-brands fa-github"></i><a href="https://github.com/Aiel-rgb/lista-de-desejos.git" target="_blank"> Ver projeto</a></button>
                    </div>
                    <div>
                        <img src="./public/drip_store.png" alt="Drip_store" className="h-[275px]"/>
                        <p className="w-[600px] mb-4 mt-2">
                            <b className="text-primary text-2xl border-b-2 border-secondary">👟 Drip Store</b> <br />
                            Bem-vindo ao Drip Store! Este é um projeto de e-commerce moderno e responsivo focado em moda e calçados, desenvolvido para proporcionar uma experiência de compra fluida e visualmente atraente.
                            Nota: Este projeto está atualmente em desenvolvimento. Funcionalidades adicionais e integrações podem ser adicionadas futuramente.
                        </p>
                        <button className="border-2 border-black rounded-md p-2 bg-black text-white hover:scale-110 transition"><i className="fa-brands fa-github"></i><a href="https://github.com/Aiel-rgb/Drip-store.git" target="_blank"> Ver projeto</a></button>
                    </div>
                    <div>
                        <img src="./public/home.png" alt="Drip_store" className="h-[275px]"/>
                        <p className="w-[600px] mb-4 mt-2">
                            <b className="text-primary text-2xl border-b-2 border-secondary">🔊 Subtitle Forge</b> <br />
                            Subtitle Forge é uma aplicação multiplataforma para criar, editar e incorporar legendas de forma automática em vídeos. Utiliza modelos de IA (Whisper) para gerar transcrições com alta precisão, seguindo princípios de Clean Code e arquitetura modular.
                        </p>
                        <button className="border-2 border-black rounded-md p-2 bg-black text-white hover:scale-110 transition"><i className="fa-brands fa-github"></i><a href="https://github.com/Aiel-rgb/subtitle-forge-main.git" target="_blank"> Ver projeto</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projetos
