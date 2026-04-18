import { useState } from 'react';

export const TodoInput = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;

        onAddTodo(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a new todo..." className='border px-2 py-0.5 rounded-md mr-2'
            />
            <button onClick={handleAddTodo} className='bg-blue-500 text-white px-4 py-1 rounded-md'>Add</button>
        </div>
    );
};