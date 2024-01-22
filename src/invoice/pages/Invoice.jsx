import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from 'recharts';
import Navbar from '../../components/Navbar';

// Datos de ejemplo para los gráficos
const dataVolumeByClient = [
     { name: 'Mexico', volumenP: 20, meta: 15 },
     { name: 'Colombia', volumenP: 30, meta: 35 },
     { name: 'Chile', volumenP: 50, meta: 45 },
     { name: 'Argentina', volumenP: 10, meta: 20 },
     { name: 'Peru', volumenP: 40, meta: 30 },
     { name: 'Brasil', volumenP: 5, meta: 10 }
   ];
   const dataPerformanceBreakdown = [
     { name: 'Inyección', unidadesP: 3000, pv: 2400, amt: 2400 },
     { name: 'Prensa', unidadesP: 2000, pv: 1398, amt: 2210 },
     { name: 'Pintura', unidadesP: 2780, pv: 3908, amt: 2000 },
     { name: 'Flowpack', unidadesP: 10000, pv: 4800, amt: 2181 }
     ];   
   
   // Función para obtener el color de la línea de meta basado en el nombre del cliente
   const getMetaLineColor = (clientName) => {
     const colors = {
       'Mexico': 'green',
       'Colombia': 'black',
       'Chile': 'red',
       'Argentina': 'blue',
       'Peru': '',
       'Brasil': 'yellow'
     };
     return colors[clientName] || 'grey'; // Color por defecto si no se encuentra el cliente
};

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Nuevo estado para la barra activa

  const handleMouseEnter = (index) => {
    setActiveIndex(index); // Activar la barra en la que el mouse está encima
  };

  const handleMouseLeave = () => {
    setActiveIndex(null); // Desactivar todas las barras cuando el mouse sale
  };

  return (
    <div>
      <Navbar />
      <div className="mb-6">
        <h2 className="text-gray-700 text-lg py-4 m-3">Volumen por cliente</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataVolumeByClient} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="volumenP" fill="#10B981" onMouseEnter={(data, index) => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              {
                dataVolumeByClient.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.volumenP >= entry.meta ? "#10B981" : "#FF4136"} />
                ))
              }
            </Bar>
            {
              dataVolumeByClient.map((entry, index) => (
                activeIndex === index ? // Mostrar ReferenceLine solo si esta barra está activa
                <ReferenceLine key={`ref-${index}`} y={entry.meta} stroke={getMetaLineColor(entry.name)} strokeDasharray="3 3" /> : null
              ))
            }
          </BarChart>
        </ResponsiveContainer>
      </div>
                     {/* Desglose por rendimiento */}
                     <div className="mb-6">
                    <h2 className="text-gray-700 text-lg py-4 m-3">Desglose por rendimiento</h2>
                    <ResponsiveContainer width="100%" height={300}>
                         <BarChart data={dataPerformanceBreakdown} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="unidadesP" fill="#10B981" />
                         </BarChart>
                    </ResponsiveContainer>
               </div>

    </div>
  );
};

export default Dashboard;