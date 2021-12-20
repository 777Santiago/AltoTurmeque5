import React from 'react';
import { Link } from 'react-router-dom';

const Coordinadores = () => {
    return(
        <>
            <h1 className='text-3xl font-light mb-4'>Mi Perfil</h1>
            <br />
            <table class="md:border-separate border border-gray-400 ...">
                <thead>
                    <tr>
                    <th class="border border-gray-300 mb-5 p-2">Identificación</th>
                    <th class="border border-gray-300">Nombre</th>
                    <th class="border border-gray-300">Email</th>
                    <th class="border border-gray-300">Perfil</th>
                    <th class="border border-gray-300">Zona</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300">80477899</td>
                        <td class="border border-gray-300">Fernando Andres Ballesteros</td>
                        <td class="border border-gray-300">fernando82@gmail.com</td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">Coordinador</td>
                        <td class="border border-gray-300">Comunidad 1 Norte</td>
                    </tr>
                </tbody>
            </table>

            <br /><br />
            <h1 className='text-3xl font-light mb-4'>Validación de Tareas</h1>

            <div class="bg-gray-800 py-20 flex items-center justify-center">
                <div class="bg-white rounded-lg shadow-2xl w-1/5 pt-6">
                    <header class="bg-gray-100 rounded-t-lg py-3 px-8 text-xl font-extrabold">Módulo de Registro</header>
                    <div class="p-8">
                        <p>Clic para ir a registrar</p><br/>
                        <Link to="/nueva-orden" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline">
                            Procesar Orden
                        </Link>
                    </div>
                </div>&nbsp; &nbsp; 

                <div class="bg-white rounded-lg shadow-2xl w-1/4 pt-6">
                    <header class="bg-gray-100 rounded-t-lg py-3 px-8 text-xl font-extrabold">Módulo de Consultas</header>
                    <div class="p-8">
                        <div class="mt-10">
                        <Link to="/consulta-fecha" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline">
                            Consultar por Fecha
                        </Link>
                        </div>
                        <div class="mt-10">
                        <Link to="/consulta-fecha" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline ">
                            Consultar por Estado
                        </Link>
                        </div>
                    </div>
                </div>&nbsp; &nbsp; 

                <div class="bg-white rounded-lg shadow-2xl w-1/5 pt-6">
                    <header class="bg-gray-100 rounded-t-lg py-3 px-8 text-xl font-extrabold">Módulo Ordenes Asesor </header>
                    <div class="p-8">
                        <p>Clic para ver orden</p><br/>
                        <Link to="/listado-orden" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Listar Ordenes
                        </Link>
                    </div>
                </div>&nbsp; &nbsp; 

                <div class="bg-white rounded-lg shadow-2xl w-1/5 pt-5 px-4">
                    <header class="bg-gray-100 rounded-t-lg py-3 px-8 text-xl font-extrabold">Módulo Cumpleaños </header>
                    <div class="p-8">
                        <p>Clic para ver lista de cumpleaños</p><br/>
                        <Link to="/detalle-cumpleanos" className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Ver Fecha
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Coordinadores;