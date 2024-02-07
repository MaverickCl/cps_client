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
     { name: 'Mexico', volumen: 20, meta: 15 },
     { name: 'Colombia', volumen: 30, meta: 35 },
     { name: 'Chile', volumen: 50, meta: 45 },
     { name: 'Argentina', volumen: 10, meta: 20 },
     { name: 'Peru', volumen: 40, meta: 30 },
     { name: 'Brasil', volumen: 5, meta: 10 }
   ];
   const dataPerformanceBreakdown = [
    { name: 'Inyección', volumen: 4382, meta: 5879 },
    { name: 'Flowpack', volumen: 1050, meta: 1050 },
    { name: 'Prensa', volumen: 4000, meta: 7022 },
    { name: 'Pintura', volumen: 0, meta: 0 },
  ];
   // Función para obtener el color de la línea de meta basado en el nombre del cliente
   const getMetaLineColor = (lineName) => {
     const colors = {
       'Inyección': 'green',
       'Flowpack': 'black',
       'Prensa': 'black',
       'Pintura': 'blue',
     };
     return colors[lineName] || 'grey'; // Color por defecto si no se encuentra el cliente
    };
    const getMetaColor = (clientName) => {
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
            <Bar dataKey="volumen" fill="#10B981" onMouseEnter={(data, index) => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              {
                dataVolumeByClient.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.volumen >= entry.meta ? "#10B981" : "#FF4136"} />
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
        <h2 className="text-gray-700 text-lg py-4 m-3">Volumen por cliente</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={dataPerformanceBreakdown} margin={{ top: 6, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="volumen" fill="#10B981" onMouseEnter={(data, index) => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              {
                dataPerformanceBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.volumen >= entry.meta ? "#10B981" : "#FF4136"} />
                ))
              }
            </Bar>
            {
              dataPerformanceBreakdown.map((entry, index) => (
                activeIndex === index ? // Mostrar ReferenceLine solo si esta barra está activa
                <ReferenceLine key={`ref-${index}`} y={entry.meta} stroke={getMetaColor(entry.name)} strokeDasharray="3 3" /> : null
              ))
            }
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Dashboard;