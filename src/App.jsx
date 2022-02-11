import React, { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');


  function AddTask(e) {
    const newTask = {
      name: text,
      id: Date.now()
    }
    setTasks([...new Set([...tasks, newTask])]);
    setText('');

    localStorage.setItem('task', JSON.stringify(tasks))

    e.preventDefault();
  }

  return (
    <div>
      <ul>
      {tasks.map((tasks) => {
        return(
          <li key={tasks.id}>
            {tasks.name}
          </li>
        );
      })}
      </ul>
      <form onSubmit={AddTask}>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <button type='Submit'>Adcionar tarefa</button>
      </form>
    </div>
  )
}

export default App