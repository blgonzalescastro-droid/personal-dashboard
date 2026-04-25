import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../../common/providers/user-provider";
import { UserSection } from "./user-section";


import iconoHogar from "../../../assets/hogar.png";
import iconoUsuario from "../../../assets/usuario.png";
import iconoEditar from "../../../assets/editar.png";
import iconoJuegos from "../../../assets/consola.png";




export default function Sidebar() {
    const { user } = useContext(UserContext);

    return (
        <aside className="lg:w-80 lg:min-h-screen bg-white/85 backdrop-blur-xl border-white/10 border-b lg:border-r lg:border-b-0">
            <div className="flex h-full flex-col justify-between px-5 py-6 lg:px-6">
                <div className="mt-8">
                    <h2 className="px-3 text-xs font-medium uppercase text-gray-800">
                        Navigation
                    </h2>

                    <nav className="mt-4 space-y-2 gap-4 flex lg:flex-col">
                        <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100">
                            <img src={iconoHogar} alt="Home" className="h-5 w-5" />
                            Home
                        </Link>

                        <Link to="about" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100">
                            <img src={iconoUsuario} alt="About Me" className="h-5 w-5" />
                            About Me
                        </Link>

                        <Link to="todolist" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100">
                            <img src={iconoEditar} alt="To do List" className="h-5 w-5" />
                            To do List
                        </Link>

                        <Link to="pokemon" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100">
                            <img src={iconoJuegos} alt="Pokemon" className="h-5 w-5" />
                            Pokemon
                        </Link>
                    </nav>
                </div>
                <UserSection />
            </div>
        </aside>
    );
}