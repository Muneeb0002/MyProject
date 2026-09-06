import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  // Task Add karne ka function
  const addTask = () => {
    if (input.trim() === '') return
    setTasks([...tasks, input])
    setInput('')
  }

  // Task Delete karne ka function
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h2>My Simple To-Do App 📝</h2>

      {/* Input Box and Add Button */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Koi task likho..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '8px', fontSize: '16px' }}
        />
        <button 
          onClick={addTask} 
          style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li 
            key={index} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '10px', 
              borderBottom: '1px solid #ccc',
              alignItems: 'center'
            }}
          >
            <span>{task}</span>
            <button 
              onClick={() => deleteTask(index)}
              style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
            >
              Done / Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App