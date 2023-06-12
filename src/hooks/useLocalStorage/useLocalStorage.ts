import { Todo } from '../../types';

const LOCALSTORAGE_KEY = 'todos-text-to-not-overlap-another-todoapp-localdata';

const useLocalStorage = () => {
	const saveToLocalStorage = (todos: Todo[]) => {
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
	};
	const getFromLocalStorage: () => Todo[] = () => {
		const savedTodos = localStorage.getItem(LOCALSTORAGE_KEY);

		if (savedTodos === null) return [];
		return JSON.parse(savedTodos);
	};

	return { saveToLocalStorage, getFromLocalStorage };
};

export default useLocalStorage;
