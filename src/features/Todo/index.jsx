import React from 'react';
import TodoForm from './component/TodoForm';


function TodoFeature(props) {
    const handleTodoFormSubmit=(values)=>{
console.log(values);
    }
    return (
        <div>
            <h3>what to do ?</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
        </div>
    );
}

export default TodoFeature;