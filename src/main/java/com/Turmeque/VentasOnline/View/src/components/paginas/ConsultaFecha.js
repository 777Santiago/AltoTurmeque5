import React from 'react';
import { Link } from 'react-router-dom';

const Asesores = () => {
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
                        <td class="border border-gray-300">51771880</td>
                        <td class="border border-gray-300">Andrea Zuluaga</td>
                        <td class="border border-gray-300">Andreazulu@gmail.com</td>
                        <td class="border border-gray-300 text-yellow-100 text-decoration-line: underline">Asesor Comercial</td>
                        <td class="border border-gray-300">Comunidad 17 Mutis</td>
                    </tr>
                </tbody>
            </table>
            <br /><br />
            <h1 className='text-3xl font-light mb-4'>Mis Ordenes de Pedido</h1>
            <br/>
            <table class="border-collapse border border-gray-400 hover:border-collapse bg-gray-500">
                <thead>
                    <tr>
                    <th class="border border-gray-300 mb-5 p-2">Filtrar Busqueda del pedido:</th>
                    <th class="border border-gray-300">
                    <input 
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="busqueda"
                            type="text"
                            placeholder='Ingresar Busqueda'
                        />
                    </th>
                    <th class="border border-gray-300"><button class="bg-gray-900 text-orange-200 hover:bg-gray-700 rounded-lg px-5">Buscar</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            
            <br />
            <table class="border-collapse border border-gray-400 hover:border-collapse bg-gray-400">
                <thead>
                    <tr>
                    <th class="border border-gray-300 mb-5 p-2">Fecha</th>
                    <th class="border border-gray-300">No. Pedido</th>
                    <th class="border border-gray-300">Estado</th>
                    <th class="border border-gray-300">Pedido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300">15/10/2021</td>
                        <td class="border border-gray-300">9875663</td>
                        <td class="border border-gray-300 text-green-700">Aprobado</td>
                        <td>
                            <Link to="/detalle-pedido" className = "bg-orange-400 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                                Ver Pedido
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td class="border border-gray-300">15/10/2021</td>
                        <td class="border border-gray-300">9875663</td>
                        <td class="border border-gray-300 text-blue-600">Pendiente</td>
                        <td>
                            <Link to="/detalle-pedido" className = "bg-orange-400 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                                Ver Pedido
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td class="border border-gray-300">15/10/2021</td>
                        <td class="border border-gray-300">9875663</td>
                        <td class="border border-gray-300 text-red-700">Rechazado</td>
                        <td>
                            <Link to="/detalle-pedido" className = "bg-orange-400 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                                Ver Pedido
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300">15/10/2021</td>
                        <td class="border border-gray-300">9875663</td>
                        <td class="border border-gray-300 text-green-700">Aprobado</td>
                        <td>
                            <Link to="/detalle-pedido" className = "bg-orange-400 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                                Ver Pedido
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td class="border border-gray-300">15/10/2021</td>
                        <td class="border border-gray-300">9875663</td>
                        <td class="border border-gray-300 text-blue-600">Pendiente</td>
                        <td>
                            <Link to="/detalle-pedido" className = "bg-orange-400 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                                Ver Pedido
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td class="border border-gray-300">15/10/2021</td>
                        <td class="border border-gray-300">9875663</td>
                        <td class="border border-gray-300 text-red-700">Rechazado</td>
                        <td>
                            <Link to="/detalle-pedido" className = "bg-orange-400 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                                Ver Pedido
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Asesores;