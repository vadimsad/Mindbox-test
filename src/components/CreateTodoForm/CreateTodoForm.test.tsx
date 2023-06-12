import { render, fireEvent } from '@testing-library/react';

import CreateTodoForm from './CreateTodoForm';

describe('CreateTodoForm', () => {
	test('Should call addTodo with correct data when form is submitted', () => {
		const addTodoMock = jest.fn();
		const { getByPlaceholderText, getByText } = render(<CreateTodoForm addTodo={addTodoMock} />);

		const input = getByPlaceholderText('What needs to be done?') as HTMLInputElement;
		const submitButton = getByText('Post');

		fireEvent.change(input, { target: { value: 'New Todo' } });
		fireEvent.click(submitButton);

		expect(addTodoMock).toHaveBeenCalledTimes(1);
		expect(addTodoMock).toHaveBeenCalledWith({
			id: expect.any(Number),
			text: 'New Todo',
			completed: false,
		});
	});

	test('Should update newTodoText state when input value changes', () => {
		const addTodoMock = jest.fn();
		const { getByPlaceholderText } = render(<CreateTodoForm addTodo={addTodoMock} />);
		const input = getByPlaceholderText('What needs to be done?') as HTMLInputElement;

		fireEvent.change(input, { target: { value: 'New Todo' } });

		expect(input.value).toBe('New Todo');
	});

	test('Should not call addTodo and reset newTodoText when form is submitted with empty input', () => {
		const addTodoMock = jest.fn();
		const { getByPlaceholderText, getByText } = render(<CreateTodoForm addTodo={addTodoMock} />);

		const input = getByPlaceholderText('What needs to be done?') as HTMLInputElement;
		const submitButton = getByText('Post');

		fireEvent.click(submitButton);

		expect(addTodoMock).not.toHaveBeenCalled();
		expect(input.value).toBe('');
	});
});
