import './App.css';
import { FoodDashboard } from './components/FoodDashboard';
import { Footer } from './components/Footer';
import { MainImage } from './components/MainImage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        <MainImage />
        <FoodDashboard />
        </main>
        <Footer />
    </div>
  );
}

export default App;
