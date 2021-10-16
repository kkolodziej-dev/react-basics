import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from "react"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Dupa wołowa',
    day: 'Z krowy',
    reminder: false
},
{
    id: 2,
    text: 'Dupa wieprzowa',
    day: 'Ze świniaka',
    reminder: false
}])

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

//Toggle reminder
const togglereminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header title='Lista dup' onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0  ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={togglereminder}/> : 'Nie ma dup do pokazania'}
    </div>
  );
}

export default App;
