import React from 'react';
import { ListGroup } from 'react-bootstrap';

import { Todo, ViewOptions } from '../types';
import TodoItem from './TodoItem';

type TodoListProps = {
	todos: Todo[];
	viewOption: ViewOptions;
	toggleTodoStatus: (id: number) => void;
	removeTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, viewOption, toggleTodoStatus, removeTodo }) => {
	const filteredTodos = todos.filter((todo) => {
		switch (viewOption) {
			case ViewOptions.ACTIVE: {
				return !todo.completed;
			}
			case ViewOptions.COMPLETED: {
				return todo.completed;
			}
			default: {
				return true;
			}
		}
	});

	return (
		<ListGroup className='mb-3 overflow-auto flex-grow-1'>
			{filteredTodos.length === 0 ? (
				<h6 className='d-flex h-100 justify-content-center align-items-center text-danger'>
					No todos were found :(
				</h6>
			) : (
				filteredTodos.map((todo) => (
					<ListGroup.Item
						as='a'
						onClick={() => toggleTodoStatus(todo.id)}
						variant={todo.completed ? 'secondary' : ''}
						key={todo.id}
						action
					>
						<TodoItem {...todo} removeTodo={() => removeTodo(todo.id)} />
					</ListGroup.Item>
				))
			)}
		</ListGroup>
	);
};

export default TodoList;
