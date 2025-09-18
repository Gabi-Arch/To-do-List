import { useState } from 'react' 

const TodoForm = ({ addTodo }) => { 
    //Gerenciar os inputs para criar nova tarefa 
    const [value, setValue] = useState(""); 
    const [category, setCategory] = useState(""); 
    const handleSubmit = (e) => { e.preventDefault(); 
        
        //Se os valores não forem preenchidos 
        if(!value || !category) return; addTodo(value, category); 
        //Se preenchidos, adicionar to-do e limpar os campos 
        setValue(""); 
        setCategory(""); 
    }; 
    
    return ( 
        <div className='todo-form'> 
            <h2>Create Task</h2> 
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder='Enter the title' value={value} onChange={(e) => setValue(e.target.value)}/> 
                <select value={category} onChange={(e) => setCategory(e.target.value)}> 
                    <option value="">Select a category.</option> 
                    <option value="💼 Work">💼 Work</option> 
                    <option value="🏋️ Health">🏋️ Health</option> 
                    <option value="📚 Studies">📚 Studies</option> 
                    <option value="🎬 Entertainment">🎬 Entertainment</option> 
                    <option value="👤 Personal">👤 Personal</option> 
                    <option value="📦 Others">📦 Others</option> 
                </select> 
                <button type='submit'>Create task</button> 
            </form> 
        </div> 
    ); 
} 

export default TodoForm