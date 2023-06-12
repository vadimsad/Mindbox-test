import { useState, useCallback } from 'react';

import { Todo, ViewOptions } from '../../types';

const useTodoActions = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [viewOption, setViewOption] = useState<ViewOptions>(ViewOptions.ALL);

	const addTodo = useCallback((todo: Todo) => {
		setTodos((prevTodos) => [...prevTodos, todo]);
	}, []);

	const removeTodo = useCallback((id: number) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	}, []);

	const toggleTodoStatus = useCallback((id: number) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
		);
	}, []);

	const changeViewOption = useCallback((option: null | string) => {
		if (option && option in ViewOptions) {
			setViewOption(option as ViewOptions);
			return;
		}
		return;
	}, []);

	return { todos, viewOption, setTodos, changeViewOption, addTodo, removeTodo, toggleTodoStatus };
};

export default useTodoActions;
