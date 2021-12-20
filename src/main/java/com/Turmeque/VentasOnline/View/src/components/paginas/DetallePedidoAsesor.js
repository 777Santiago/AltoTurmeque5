import React from 'react';
import { Link } from 'react-router-dom';

const DetallePedidoAsesores = () => {
    return(
        <>
            <h1 className='text-3xl font-light mb-4'>Mi Perfil</h1>
            <table class="border-collapse border border-gray-400 hover:border-collapse bg-blue-600">
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
            <h1 className='text-3xl font-light mb-4'>Orden de Pedido</h1>
            <table class="border-collapse border border-gray-400 hover:border-collapse bg-blue-200">
                <thead>
                    <tr>
                    <th class="border border-gray-300 mb-5 p-2">Fecha</th>
                    <th class="border border-gray-300">No. de Pedido</th>
                    <th class="border border-gray-300">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300">15/11/2021</td>
                        <td class="border border-gray-300">98775563</td>
                        <td class="border border-gray-300 text-blue-600">Pendiente</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <table class="border-collapse border border-gray-400 hover:border-collapse bg-blue-100">
                <thead>
                    <tr>
                    <th class="border border-gray-300 mb-5 p-2">Imagen</th>
                    <th class="border border-gray-300">Nombre</th>
                    <th class="border border-gray-300">Categoria</th>
                    <th class="border border-gray-300">Descripción</th>
                    <th class="border border-gray-300">Precio</th>
                    <th class="border border-gray-300">Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300"><img  src='https://i.pinimg.com/originals/69/51/d3/6951d3a58296c1e2886972c9f187478c.jpg' width="60" /></td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">AP-901</td>
                        <td class="border border-gray-300">DAMA</td>
                        <td class="border border-gray-300">PANTALON DRIL DAMA. CALIDAD Y BUEN PRECIO</td>
                        <td class="border border-gray-300">$ 50.000</td>
                        <td class="border border-gray-300">50</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300"><img  src='https://yoyojeans.vteximg.com.br/arquivos/ids/170605-1100-1200/Pantalon-Tiro-Alto-con-Cargaderas-38013117-Rayas-Oscuro_3.jpg' width="60" /></td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">AP-902</td>
                        <td class="border border-gray-300">NIÑA</td>
                        <td class="border border-gray-300">PANTALON DRIL NIÑA BUEN PRECIO</td>
                        <td class="border border-gray-300">$ 40.000</td>
                        <td class="border border-gray-300">5</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300"><img  src='https://img.freepik.com/foto-gratis/pantalones_1203-8093.jpg?size=338&ext=jpg' width="60" /></td>
                        <td class="border border-gray-300 text-red-700 text-decoration-line: underline">AP-903</td>
                        <td class="border border-gray-300">HOMBRE</td>
                        <td class="border border-gray-300">PANTALON DRIL HOMBRE</td>
                        <td class="border border-gray-300">$ 50.000</td>
                        <td class="border border-gray-300">15</td>
                    </tr>
                </tbody>
            </table>

            
            <br />
          
        </>
    );
}

export default DetallePedidoAsesores;