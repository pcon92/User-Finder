
import './App.css';


// Import components
import Board from './components/Board.js';
import Title from './components/Title.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Title />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
