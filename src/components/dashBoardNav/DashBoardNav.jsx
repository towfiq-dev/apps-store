import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { AppsContext } from '../contexts/AppsContext';

const DashBoardNav = () => {
  const {installApps, appsData} = useContext(AppsContext)
  const unInstallApps = appsData.length - installApps.length
  const data = [
  { name: 'Install', value: installApps.length, fill: '#0088FE' },
  { name: 'UnInstall', value: unInstallApps, fill: '#00C49F' }
];
  return (
    <div className='mt-7 mb-4 shadow-md rounded-xl border border-gray-300 max-w-280 mx-auto'>
      <h1 className='text-3xl font-semibold text-center mt-3'>Install & UnInstall App</h1>
      <PieChart 
      style={
        { width: '100%', 
        maxWidth: '500px', 
        maxHeight: '80vh', 
        margin: 'auto',
        marginTop: '20px', 
        aspectRatio: 1 }
        } responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
        
      />
      <Legend/>
      <Tooltip/>
    </PieChart>
    </div>
  );
};

export default DashBoardNav;