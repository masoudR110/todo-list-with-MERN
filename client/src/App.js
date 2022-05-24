import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.css';

function App() {
  const [tasks, setTasks] = useState(false);

  useEffect(() => { getTasks() }, []);

  function getTasks() {
    axios.get('http://localhost:4000/')
      .then(response => setTasks(response.data))
  }
  return (
    <Fragment>
      <Tasks getTasks={getTasks()} tasks={tasks} setTasks={setTasks} />
      <AddTask getTasks={getTasks()} />
    </Fragment>

  );
}

export default App;
