import { useState, useEffect } from "react";
import { TodoItem } from "../components/TodoItem";
import { TodoInput } from "../components/TodoInput";
import { initialTodos } from "../data/initial-todos";

export function TodoListPage() {
    const [todos, setTodos] = useState([initialTodos]);

    const handleAddTodo = (text) => {
        const newTodo = { id: Date.now(), text };
        setTodos([...todos, newTodo]);
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">To do List</h1>
            <TodoInput onAddTodo={handleAddTodo} />
            <TodoItem todo={todos} />

        </div>

    );



}