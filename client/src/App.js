import { Fragment } from 'react';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.css';

function App() {
  return (
    <Fragment>
      <Tasks />
      <AddTask />
    </Fragment>
    
  );
}

export default App;
