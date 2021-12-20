import React from "react";
import { Routes, Route } from 'react-router';

import Ordenes from './components/paginas/Ordenes';
import Usuarios from './components/paginas/Usuarios';
import Productos from './components/paginas/Productos';
import Asesores from './components/paginas/Asesores';
import Coordinadores from './components/paginas/Coordinadores';

import Sidebar from './components/ui/Sidebar';

import DetalleOrdenes from "./components/paginas/DetalleOrdenes";
import DetalleProductos from "./components/paginas/DetalleProductos";
import DetalleUsuarios from "./components/paginas/DetalleUsuarios";
import ConsultaFecha from "./components/paginas/ConsultaFecha";
import DetallePedidoAsesores from "./components/paginas/DetallePedidoAsesor";
import Cumpleanos from "./components/paginas/Cumpleanos";
import ListadoOrden from "./components/paginas/ListadoOrden";


function App() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
     <div className="md:w-2/5 xl:w-4/5 p-6">
      <Routes>
          <Route path="/" element = { <Ordenes /> } />
          <Route path="/usuarios" element = { <Usuarios /> } />
          <Route path="/productos" element = { <Productos /> } />
          <Route path="/nueva-orden" element = { <DetalleOrdenes/>  } />
          <Route path="/nuevo-producto" element = { <DetalleProductos/>  } />
          <Route path="/nuevo-usuario" element = { <DetalleUsuarios/>  } />
          <Route path="/asesores" element = { <Asesores /> } />
          <Route path="/coordinadores" element = { <Coordinadores /> } />
          <Route path="/consulta-fecha" element = { <ConsultaFecha /> } />
          <Route path="/detalle-pedido" element = { <DetallePedidoAsesores /> } />
          <Route path="/detalle-cumpleanos" element = { <Cumpleanos /> } />
          <Route path="/listado-orden" element = { <ListadoOrden /> } />
      </Routes>
     </div>
    </div>
  );
}

export default App;
