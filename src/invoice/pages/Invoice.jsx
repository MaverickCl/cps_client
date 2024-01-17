import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../../components/Navbar';
// Datos de ejemplo para los gráficos
const dataVolumeByClient = [
 { name: 'Sodimac', volumenP: 20 },
 { name: 'Construmart', volumenP: 30 },
 { name: 'Easy', volumenP: 50 },
 { name: 'Ikea', volumenP: 10 },
 { name: 'Walmart', volumenP: 40 },
 { name: 'Cencosud', volumenP: 5 }
];
const dataPerformanceBreakdown = [
 { name: 'Inyección', unidadesP: 3000, pv: 2400, amt: 2400 },
 { name: 'Prensa', unidadesP: 2000, pv: 1398, amt: 2210 },
 { name: 'Pintura', unidadesP: 2780, pv: 3908, amt: 2000 },
 { name: 'Flowpack', unidadesP: 3890, pv: 4800, amt: 2181 }
];
const Dashboard = () => {
 return (
  <div>
   <Navbar />
<div className="p-4">
     {/* Volumen por cliente */}
<div className="mb-6">
<h2 className="text-gray-700 text-lg mb-2">Volumen por cliente</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={dataVolumeByClient} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="volumenP" fill="#10B981" />
</BarChart>
</ResponsiveContainer>
</div>
     {/* Desglose por rendimiento */}
<div className="mb-6">
<h2 className="text-gray-700 text-lg mb-2">Desglose por rendimiento</h2>
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
</div>
 );
};
export default Dashboard;