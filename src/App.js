import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';

const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Wash car.' ,
        day: 'Nov 1st at 2:30 PM',
        reminder: false,
    },
    {
        id: 2,
        text: 'Go to gym class',
        day: 'Nov 4th at 5:30 PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Help son finish homework',
        day: 'Nov 7th at 6:30 PM',
        reminder: true,
    }
])

 //Delete Task
 const deleteTask = (id) => {
   console.log('delete', id);
 }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
