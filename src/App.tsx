import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './views/Pages/Routes';

import './styles/custom-bulma.scss';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
