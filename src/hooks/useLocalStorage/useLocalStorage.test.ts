import useLocalStorage from './useLocalStorage';
import { Todo } from '../../types';

const LOCALSTORAGE_KEY = 'todos-text-to-not-overlap-another-todoapp-localdata';
const TEST_TODOS: Todo[] = [
	{ id: 1, text: 'Task 1', completed: true },
	{ id: 2, text: 'Task 2', completed: false },
];

class LocalStorageMock {
	private store: { [key: number | string]: string };

	constructor() {
		this.store = {};
	}
	clear() {
		this.store = {};
	}

	getItem(key: keyof typeof this.store) {
		return this.store[key] || null;
	}

	setItem(key: keyof typeof this.store, value: string) {
		this.store[key] = value.toString();
	}

	removeItem(key: keyof typeof this.store) {
		delete this.store[key];
	}

	get length() {
		return Object.keys(this.store).length;
	}

	key(index: number) {
		const keys = Object.keys(this.store);
		return keys[index] || null;
	}
}

global.localStorage = new LocalStorageMock();

describe('useLocalStorage', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('Save array of todos to localStorage', () => {
		const { saveToLocalStorage } = useLocalStorage();

		const todos = TEST_TODOS;
		saveToLocalStorage(todos);

		const savedTodos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '');
		expect(savedTodos).toEqual(todos);
	});

	it('Returns array of todos from localStorage', () => {
		const { getFromLocalStorage } = useLocalStorage();

		const todos = TEST_TODOS;
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));

		const retrievedTodos = getFromLocalStorage();
		expect(retrievedTodos).toEqual(todos);
	});

	it('Returns an empty array if there is no todos in localStorage', () => {
		const { getFromLocalStorage } = useLocalStorage();

		const retrievedTodos = getFromLocalStorage();
		expect(retrievedTodos).toEqual([]);
	});
});
