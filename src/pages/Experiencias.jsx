
function Experiencias() {
    return (
        <div className="flex-1 bg-tertiary m-0 p-8">
            <h1 className="text-4xl text-primary font-bold border-b-4 border-secondary w-[260px] flex justify-center mb-6">Experiencias</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-12">
                    <div className="rounded-lg border-4 border-secondary p-4 bg-primary hover:scale-110 transition-all">
                        <h1 className="text-2xl text-tertiary font-bold">Exemplo 1:</h1>
                        <p className="text-tertiary">Empresa 1</p>
                        <p className="text-tertiary">Periodo: 2022 - 2023</p>
                        <p className="text-tertiary">Descrição: Desenvolvimento de software</p>
                    </div>
                    <div className="rounded-lg border-4 border-secondary p-4 bg-primary hover:scale-110 transition-all">
                        <h1 className="text-2xl text-tertiary font-bold">Exemplo 2:</h1>
                        <p className="text-tertiary">Empresa 2</p>
                        <p className="text-tertiary">Periodo: 2022 - 2023</p>
                        <p className="text-tertiary">Descrição: Desenvolvimento de software</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiencias