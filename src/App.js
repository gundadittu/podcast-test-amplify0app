import './App.css';
import { 
  Podcasts
} from './ui-components';
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Podcasts />
      </header>
    </div>
  );
}

export default App;
