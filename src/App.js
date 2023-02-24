// import './App.css';
import { ARR } from './components/ARR';
import { AverageBasketSize } from './components/AverageBasketSize';
import { AverageOrderValue } from './components/AverageOrderValue';
import { ChurnRate } from './components/ChurnRate';
import { CustomerRetentionRate } from './components/CustomerRetentionRate';
import { DailyActiveUsers } from './components/DailyActiveUsers';
import { DailyActiveUsers2 } from './components/DailyActiveUsers2';
import { GrossMargin } from './components/GrossMargin';
import { GrossProfit } from './components/GrossProfit';
import { MRR } from './components/MRR';
import { NetBurn } from './components/NetBurn';

function App() {
  return (
    <div className="App">
    <h1>Chart Visualizations!</h1>
        <GrossMargin/>
        <NetBurn/>
        <ARR/>
        <DailyActiveUsers/>
        <DailyActiveUsers2/>
        <AverageBasketSize/>
        <GrossProfit/>
        <ChurnRate/>
        <AverageOrderValue/>
        <CustomerRetentionRate/>
        <MRR/>
    </div>
  );
}

export default App;
