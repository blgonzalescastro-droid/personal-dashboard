import React from 'react';

export const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <ul className="mt-4 space-y-2">
            {todo.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => onToggle(item.id)}
                        className="w-4 h-4 cursor-pointer"
                    />
                    <span className={item.completed ? 'line-through text-gray-400' : ''}>
                        {item.text}
                    </span>
                    <button
                        onClick={() => onDelete(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 text-sm"
                    >
                        Eliminar
                    </button>
                </li>
            ))}
        </ul>
    );
};

