import React from 'react';
import { Link } from 'react-router-dom';

const Cumpleanos = () => {
    return(
        <>
            <h1 className='text-3xl font-light mb-4 '>Mi Perfil</h1>
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
            <h1 className='text-3xl font-light mb-4'>Fechas de cumpleaños</h1>

            <table class="border-collapse border border-gray-400 hover:border-collapse bg-green-200">
                <thead>
                    <tr>
                    <th class="border border-gray-300 mb-5 p-2">Identificación</th>
                    <th class="border border-gray-300">Nombre</th>
                    <th class="border border-gray-300">Dirección</th>
                    <th class="border border-gray-300">Teléfono</th>
                    <th class="border border-gray-300">Email</th>
                    <th class="border border-gray-300">Zona</th>
                    <th class="border border-gray-300">Tipo</th>
                    <th class="border border-gray-300">Cumpleaños</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300">80147632 </td>
                        <td class="border border-gray-300">Juan Peinado</td>
                        <td class="border border-gray-300">KR 3 No. 7-82</td>
                        <td class="border border-gray-300">2305010</td>
                        <td class="border border-gray-300">juanP@hotmail.com</td>
                        <td class="border border-gray-300">Comunidad 15 Centro </td>
                        <td class="border border-gray-300">ASE</td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">01/04/1980</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300">51744888 </td>
                        <td class="border border-gray-300">Lina Aristizabal</td>
                        <td class="border border-gray-300">calle 23 No. 70 - 50</td>
                        <td class="border border-gray-300">320141594</td>
                        <td class="border border-gray-300">lina15568@gmail.com</td>
                        <td class="border border-gray-300">Comunidad 4 Occidental</td>
                        <td class="border border-gray-300">ASE</td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">09/04/1980</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300">80147632 </td>
                        <td class="border border-gray-300">Juan Gabriel Rodriguez</td>
                        <td class="border border-gray-300">KR 3 No. 82</td>
                        <td class="border border-gray-300">2309871</td>
                        <td class="border border-gray-300">juanRodri@hotmail.com</td>
                        <td class="border border-gray-300">Comunidad 11 Sur </td>
                        <td class="border border-gray-300">ASE</td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">10/04/1980</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300">80477899 </td>
                        <td class="border border-gray-300">Fernando Ballesteros</td>
                        <td class="border border-gray-300">calle 23 No. 70 - 50</td>
                        <td class="border border-gray-300">3202221144</td>
                        <td class="border border-gray-300">fernando82@gmail.com</td>
                        <td class="border border-gray-300">Comunidad 17 Mutis</td>
                        <td class="border border-gray-300">ASE</td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">15/04/1980</td>
                    </tr>
                   
                </tbody>
            </table>
         

        
        </>
    );
}

export default Cumpleanos;