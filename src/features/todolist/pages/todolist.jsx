import { useState, useEffect } from "react";
import { TodoItem } from "../components/TodoItem";
import { TodoInput } from "../components/TodoInput";
import { initialTodos } from "../data/initial-todos";

export function TodoListPage() {
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const handleToggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="p-10">
            <div className="inline-block bg-white rounded-xl shadow-md p-6 min-w-80">
                <h1 className="text-2xl font-bold mb-4">To do List</h1>
                <TodoInput onAddTodo={handleAddTodo} />
                <TodoItem todo={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
            </div>
        </div>
    );



}