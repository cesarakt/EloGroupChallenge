import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './views/Pages/Routes';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import './styles/custom-bulma.scss';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Routes />
      </Router>
    </DndProvider>
  );
}

export default App;
