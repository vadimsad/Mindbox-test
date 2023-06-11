import { Todo } from '../types';

const useLocalStorage = () => {
	const saveToLocalStorage = (todos: Todo[]) => {
		localStorage.setItem(
			'todos-text-to-not-overlap-another-todoapp-localdata',
			JSON.stringify(todos),
		);
	};
	const getFromLocalStorage: () => Todo[] = () => {
		const savedTodos = localStorage.getItem('todos-text-to-not-overlap-another-todoapp-localdata');

		if (savedTodos === null) return [];
		return JSON.parse(savedTodos);
	};

	return { saveToLocalStorage, getFromLocalStorage };
};

export default useLocalStorage;
