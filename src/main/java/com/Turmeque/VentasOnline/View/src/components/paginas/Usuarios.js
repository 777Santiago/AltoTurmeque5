import React from 'react';
import { Link } from 'react-router-dom';
//import FormularioUsuario from '../ui/FormularioUsuario';

const Usuarios = () => {
    return(
        <>
            <h1 className='text-3xl font-light mb-4'>Módulo de Usuarios</h1>
            <Link to="/nuevo-usuario" className = "bg-blue-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                Agregar Usuario
            </Link>
            <br /><br />

            <h1 className='text-3xl font-light mb-4 text-center text-red-700'>Listado de Usuarios</h1>
            <table class="md:border-separate border border-gray-400 ...">
                <thead>
                    <tr>
                    <th class="border border-gray-300 ...">Identificación</th>
                    <th class="border border-gray-300 ...">Nombre</th>
                    <th class="border border-gray-300 ...">Mes Nacimiento</th>
                    <th class="border border-gray-300 ...">Email</th>
                    <th class="border border-gray-300 ...">Contraseña</th>
                    <th class="border border-gray-300 ...">Zona</th>
                    <th class="border border-gray-300 ...">Tipo</th>
                    <th class="border border-gray-300 ...">accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border border-gray-300 ...">80477899</td>
                    <td class="border border-gray-300 ...">Fernando Andres Ballesteros</td>
                    <td class="border border-gray-300 ...">12</td>
                    <td class="border border-gray-300 ...">fernando82@gmail.com</td>
                    <td class="border border-gray-300 ...">********</td>
                    <td class="border border-gray-300 ...">Comunidad 1 Norte</td>
                    <td class="border border-gray-300 ...">COORD</td>
                    <td>
                    <Link to="/nuevo-usuario" className = "bg-green-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Editar
                    </Link>
                    <Link to="" className = "bg-red-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Eliminar
                    </Link>
                    </td>
                    </tr>
                    <tr>
                    <td class="border border-gray-300 ...">51771880</td>
                    <td class="border border-gray-300 ...">Andrea Zuluaga</td>
                    <td class="border border-gray-300 ...">07</td>
                    <td class="border border-gray-300 ...">Andreazulu@gmail.com</td>
                    <td class="border border-gray-300 ...">********</td>
                    <td class="border border-gray-300 ...">Comunidad 17 Mutis</td>
                    <td class="border border-gray-300 ...">ASE</td>
                    <td>
                    <Link to="/nuevo-usuario" className = "bg-green-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Editar
                    </Link>
                    <Link to="" className = "bg-red-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Eliminar
                    </Link>
                    </td>
                    </tr>
                    <tr>
                    <td class="border border-gray-300 ...">52111553</td>
                    <td class="border border-gray-300 ...">Diana Hernandez</td>
                    <td class="border border-gray-300 ...">06</td>
                    <td class="border border-gray-300 ...">diana12@hotmail.com</td>
                    <td class="border border-gray-300 ...">********</td>
                    <td class="border border-gray-300 ...">Comunidad 15 Centro</td>
                    <td class="border border-gray-300 ...">ADMIN</td>
                    <td>
                    <Link to="/nuevo-usuario" className = "bg-green-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Editar
                    </Link>
                    <Link to="" className = "bg-red-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Eliminar
                    </Link>
                    </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Usuarios;