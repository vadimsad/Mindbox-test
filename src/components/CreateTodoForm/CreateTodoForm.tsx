import { memo, SyntheticEvent, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import { Todo } from '../../types';

type Props = {
	addTodo: (todo: Todo) => void;
};

const CreateTodoForm: React.FC<Props> = ({ addTodo }) => {
	const [newTodoText, setNewTodoText] = useState('');

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();

		if (newTodoText.trim() === '') return;

		const newTodo: Todo = {
			id: Date.now(),
			text: newTodoText,
			completed: false,
		};

		addTodo(newTodo);
		setNewTodoText('');
	};

	return (
		<Form onSubmit={handleSubmit} className='mb-3'>
			<Form.Group controlId='formCreateTask'>
				<Row>
					<Col xs={9} md={9} lg={10}>
						<Form.Control
							type='text'
							inputMode='text'
							placeholder='What needs to be done?'
							value={newTodoText}
							onChange={(event) => setNewTodoText(event.target.value)}
						/>
					</Col>
					<Col xs={3} md={3} lg={2}>
						<Button variant='primary' type='submit' className='w-100'>
							Post
						</Button>
					</Col>
				</Row>
			</Form.Group>
		</Form>
	);
};

export default memo(CreateTodoForm);
