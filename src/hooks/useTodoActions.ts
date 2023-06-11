import { useState, useEffect, useCallback } from 'react';

import { Todo, ViewOptions } from '../types';
import useLocalStorage from './useLocalStorage';

const useTodoActions = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [viewOption, setViewOption] = useState<ViewOptions>(ViewOptions.ALL);

	const { saveToLocalStorage, getFromLocalStorage } = useLocalStorage();

	useEffect(() => {
		const savedTodos = getFromLocalStorage();
		setTodos(savedTodos);
	}, []);

	useEffect(() => {
		saveToLocalStorage(todos);
	}, [todos]);

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
		if (option === null) return;
		setViewOption(option as ViewOptions);
	}, []);

	return { todos, viewOption, changeViewOption, addTodo, removeTodo, toggleTodoStatus };
};

export default useTodoActions;
