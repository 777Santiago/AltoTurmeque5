import React from 'react';
import { Link } from 'react-router-dom';

const ListadoOrden = () => {
    return(
        <>
            <h1 className='text-3xl font-light mb-4'>Mi Perfil</h1>
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
            <h1 className='text-3xl font-light mb-4'>Listado de ordenes creadas</h1>
            <table class="border-collapse border border-gray-400 hover:border-collapse bg-green-300">
                <thead>
                    <tr>
                    <th class="border border-gray-300 mb-5 p-2">No. Pedido</th>
                    <th class="border border-gray-300 mb-5 p-2">Fecha Creación</th>
                    <th class="border border-gray-300">Nombre</th>
                    <th class="border border-gray-300">Email</th>
                    <th class="border border-gray-300">Perfil</th>
                    <th class="border border-gray-300">Zona</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300">8879755</td>
                        <td class="border border-gray-300">19/11/2021</td>
                        <td class="border border-gray-300">Andrea Zuluaga</td>
                        <td class="border border-gray-300">Andreazulu@gmail.com</td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">ASESOR</td>
                        <td class="border border-gray-300">Comunidad 1 Norte</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300">1073255588</td>
                        <td class="border border-gray-300">19/11/2021</td>
                        <td class="border border-gray-300">Felipe Contreras</td>
                        <td class="border border-gray-300">felicontre@gmail.com</td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">ASESOR</td>
                        <td class="border border-gray-300">Comunidad 1 Norte</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300">8879755</td>
                        <td class="border border-gray-300">19/11/2021</td>
                        <td class="border border-gray-300">Juan Carlos Perez</td>
                        <td class="border border-gray-300">juan56@gmail.com</td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">ASESOR</td>
                        <td class="border border-gray-300">Comunidad 10 La Provenza</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300">51787883</td>
                        <td class="border border-gray-300">21/11/2021</td>
                        <td class="border border-gray-300">Patricia Hernandez</td>
                        <td class="border border-gray-300">patriciah21@gmail.com</td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">ASESOR</td>
                        <td class="border border-gray-300">Comunidad 15 Sur</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ListadoOrden;