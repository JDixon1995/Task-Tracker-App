import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

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

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
}

 //Delete Task
 const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !== id))
 }

 // Toggle Reminder 
 const toggleReminder = (id) => {
   setTasks(
     tasks.map((task) => 
     task.id === id ? {...task, reminder: 
      !task.reminder } : task
    )
   )
 }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} />) : 
      ('No Tasks To Complete.') }
    </div>
  );
}

export default App;
