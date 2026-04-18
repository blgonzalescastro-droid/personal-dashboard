import React from 'react';

export const TodoItem = ({ todo }) => {
    return (
        <div>
            <ul>
                {todo.map((todo) => (
                    <li> - {todo.text}</li>
                ))}
            </ul>

        </div>
    );
};