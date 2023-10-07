import logo from './logo.svg';
import './App.css';
import QuoteCard from './QuoteCard';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <div className="App">
      
      <QuoteCard/>
    </div>
  );
}

export default App;
