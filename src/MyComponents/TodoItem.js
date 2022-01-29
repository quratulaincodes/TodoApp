import React from 'react';

export const TodoItem = ({todo, onDelete}) => {
  return( <div className='todo-row'>
     <h4>
        {todo.title}

     </h4>
     <p>{todo.desc}</p>

     <button className="btndlt " onClick={ () => onDelete(todo)}> Done</button>
  </div>)
}
