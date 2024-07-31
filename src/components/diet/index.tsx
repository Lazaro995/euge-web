import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

export type ChartContainerProps = {
  children: ReactNode,
  title: string
}

const strengthData = [
  { name: 'Julio', fuerza: 100 },
  { name: 'Agosto', fuerza: 130 },
  { name: 'Septiembre', fuerza: 150 },
];

const weightData = [
  { name: 'Julio', peso: 80 },
  { name: 'Agosto', peso: 78 },
  { name: 'Septiembre', peso: 75 },
];

const caloriesData = [
  { name: 'Proteínas', value: 30 },
  { name: 'Carbohidratos', value: 45 },
  { name: 'Grasas', value: 25 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ChartContainer = ({ children, title } : ChartContainerProps) => (
  <motion.div 
    className="bg-yellow-500/30 rounded-lg shadow-lg py-10 px-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    {children}
  </motion.div>
);

export const DietSection = () => {
  return (
    <section className='px-12 py-32'>
      <motion.header 
        className='text-massive font-display font-bold mb-12'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Observá tus resultados
      </motion.header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ChartContainer title="Progreso de Fuerza">
          <BarChart width={300} height={300} data={strengthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="fuerza" fill="#8884d8" />
          </BarChart>
        </ChartContainer>
        
        <ChartContainer title="Pérdida de Peso">
          <LineChart width={300} height={300} data={weightData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="peso" stroke="#82ca9d" />
          </LineChart>
        </ChartContainer>
        
        <ChartContainer title="Distribución de Calorías">
          <PieChart width={300} height={300}>
            <Pie
              data={caloriesData}
              cx={150}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {caloriesData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ChartContainer>
      </div>
    </section>
  );
};
