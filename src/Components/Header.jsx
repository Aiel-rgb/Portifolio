import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="font-bold flex justify-between px-20 py-4 bg-primary border-b-4 border-secondary">
                <h1 className="text-2xl text-tertiary hover:scale-110 transition-all"> <i className="fa-brands fa-python fa-2xl"></i>Neves.py</h1>
                <nav>
                    <ul className="text-2xl flex gap-6">
                        <li><Link to="/" className=" text-secondary hover:text-tertiary ">def Sobre():</Link></li>
                        <li><Link to="/experiencias" className=" text-secondary hover:text-tertiary ">def Experiencias():</Link></li>
                        <li><Link to="/projetos" className=" text-secondary hover:text-tertiary ">def Projetos():</Link></li>
                       
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header