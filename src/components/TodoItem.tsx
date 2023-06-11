import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import { Todo } from '../types';

type TodoItemProps = Todo & { removeTodo: () => void };

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, removeTodo }) => {
	return (
		<Row>
			<Col xs={9} sm={10} className='d-flex align-items-center overflow-auto'>
				<p className={`m-0 xs:fs-5 fs-6 ${completed ? 'text-decoration-line-through' : ''}`}>
					{text}
				</p>
			</Col>
			<Col xs={3} sm={2}>
				<Button onClick={removeTodo} className='w-100' variant='danger' size='sm'>
					✕
				</Button>
			</Col>
		</Row>
	);
};

export default TodoItem;
