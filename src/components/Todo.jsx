import React from "react";

//Criar os componentes 
//Fazer as propriedades para acessar os to-dos 
const Todo = ({ todo, removeTodo, completeTodo }) => { 
    return ( 
        <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}> 
            <div className='content'> 
                <p className='text'>{todo.text}</p> 
                <p className='category'>{todo.category}</p> 
            </div> 
            <div className='button'> 
                <button className='complete' onClick={() => completeTodo(todo.id)}>Complete</button> 
                <button className='remove'onClick={() => removeTodo(todo.id)}>X</button> 
            </div> 
        </div> 
    ); 
} 

export default Todo

