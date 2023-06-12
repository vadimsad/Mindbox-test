import { renderHook, act } from '@testing-library/react';
import { Todo, ViewOptions } from '../../types';
import useTodoActions from './useTodoActions';

const TEST_TODO: Todo = { id: 1, text: 'Task 1', completed: true };

describe('useTodoActions', () => {
	let hookResult: { current: ReturnType<typeof useTodoActions> };

	beforeEach(() => {
		const { result } = renderHook(() => useTodoActions());
		hookResult = result;
	});

	it('Should initialize todos and viewOption correctly', () => {
		expect(hookResult.current.todos).toEqual([]);
		expect(hookResult.current.viewOption).toEqual(ViewOptions.ALL);
	});

	it('Should add a new todo', () => {
		act(() => {
			hookResult.current.addTodo(TEST_TODO);
		});

		expect(hookResult.current.todos.length).toBe(1);
		expect(hookResult.current.todos[0]).toEqual(TEST_TODO);
	});

	it('Should remove existing todo', () => {
		act(() => {
			hookResult.current.addTodo(TEST_TODO);
		});

		act(() => {
			hookResult.current.removeTodo(1);
		});

		expect(hookResult.current.todos.length).toBe(0);
	});

	it('Should not remove non-existing todo', () => {
		act(() => {
			hookResult.current.addTodo(TEST_TODO);
		});

		act(() => {
			hookResult.current.removeTodo(999);
		});

		expect(hookResult.current.todos.length).toBe(1);
		expect(hookResult.current.todos[0].id).toBe(TEST_TODO.id);
	});

	it('Should not change todos array when removing non-existing todo', () => {
		act(() => {
			hookResult.current.addTodo(TEST_TODO);
		});

		act(() => {
			hookResult.current.removeTodo(999);
		});

		expect(hookResult.current.todos.length).toBe(1);
		expect(hookResult.current.todos[0]).toEqual(TEST_TODO);
	});

	it('Should toggle todo status', () => {
		act(() => {
			hookResult.current.addTodo(TEST_TODO);
		});

		act(() => {
			hookResult.current.toggleTodoStatus(1);
		});

		expect(hookResult.current.todos[0].completed).toBe(!TEST_TODO.completed);
	});

	it('Should not toggle non-existing todo status', () => {
		act(() => {
			hookResult.current.addTodo(TEST_TODO);
		});

		act(() => {
			hookResult.current.toggleTodoStatus(999);
		});

		expect(hookResult.current.todos[0].completed).toBe(TEST_TODO.completed);
	});

	it('Should change viewOption', () => {
		act(() => {
			hookResult.current.changeViewOption(ViewOptions.ACTIVE);
		});

		expect(hookResult.current.viewOption).toBe(ViewOptions.ACTIVE);
	});

	it('Should not change viewOption that is not ViewOptions type', () => {
		act(() => {
			hookResult.current.changeViewOption('anything');
		});

		expect(hookResult.current.viewOption).toBe(ViewOptions.ALL);
	});
});
