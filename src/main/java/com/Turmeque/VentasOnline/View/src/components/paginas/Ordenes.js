import React from 'react';
import { Link } from 'react-router-dom';

const Ordenes = () => {
    return(
        <>
           

             <h1 className='text-3xl font-light mb-4 text-center text-red-700'>Mi Perfil</h1>
            <table class="md:border-separate border border-gray-400 ...">
                <thead>
                    <tr>
                    <th class="border border-gray-300 ..."></th>
                    <th class="border border-gray-300 ...">Categoría</th>
                    <th class="border border-gray-300 ...">Talla</th>
                    <th class="border border-gray-300 ...">Descripción</th>
                    <th class="border border-gray-300 ...">Disponibilidad</th>
                    <th class="border border-gray-300 ...">Precio</th>
                    <th class="border border-gray-300 ...">Cantidad</th>
                    <th class="border border-gray-300 ...">Imagen</th>
                    <th class="border border-gray-300 ...">accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="border border-gray-300 ...">AP-901</td>
                    <td class="border border-gray-300 ...">DAMA</td>
                    <td class="border border-gray-300 ...">M</td>
                    <td class="border border-gray-300 ...">PANTALON DRIL DAMA. CALIDAD Y BUEN PRECIO</td>
                    <td class="border border-gray-300 ...">SI</td>
                    <td class="border border-gray-300 ...">10000</td>
                    <td class="border border-gray-300 ...">10</td>
                    <td class="border border-gray-300 ...">https://www.avasoluciones.com/uploads/2021/09/910-006127.jpg</td>
                    <td>
                    <Link to="/nuevo-producto" className = "bg-green-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Editar
                    </Link>
                    <Link to="" className = "bg-red-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Eliminar
                    </Link>
                    </td>
                    </tr>
                    <tr>
                    <td class="border border-gray-300 ...">AP-902</td>
                    <td class="border border-gray-300 ...">DAMA</td>
                    <td class="border border-gray-300 ...">L</td>
                    <td class="border border-gray-300 ...">PANTALON DRIL DAMA. CALIDAD Y BUEN PRECIO</td>
                    <td class="border border-gray-300 ...">SI</td>
                    <td class="border border-gray-300 ...">12000</td>
                    <td class="border border-gray-300 ...">20</td>
                    <td class="border border-gray-300 ...">https://www.avasoluciones.com/uploads/2021/09/910-006127.jpg</td>
                    <td>
                    <Link to="/nuevo-producto" className = "bg-green-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Editar
                    </Link>
                    <Link to="" className = "bg-red-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
                        Eliminar
                    </Link>
                    </td>
                    </tr>
                    <tr>
                    <td class="border border-gray-300 ...">AP-903</td>
                    <td class="border border-gray-300 ...">HOMBRE</td>
                    <td class="border border-gray-300 ...">XL</td>
                    <td class="border border-gray-300 ...">PANTALON DRIL HOMBRE. CALIDAD Y BUEN PRECIO</td>
                    <td class="border border-gray-300 ...">NO</td>
                    <td class="border border-gray-300 ...">30000</td>
                    <td class="border border-gray-300 ...">0</td>
                    <td class="border border-gray-300 ...">https://www.avasoluciones.com/uploads/2021/09/910-006127.jpg</td>
                    <td>
                    <Link to="/nuevo-producto" className = "bg-green-500 hover:bg-blue-700, inline-block mb-5 p-2 text-while uppercase">
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

export default Ordenes;