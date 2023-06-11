import { Row, Col } from 'react-bootstrap';

import Layout from './Layout';
import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';
import TodoViewMode from './TodoViewMode';
import useTodoActions from '../hooks/useTodoActions';

const TodoApp: React.FC = () => {
	const { todos, viewOption, changeViewOption, addTodo, removeTodo, toggleTodoStatus } =
		useTodoActions();

	return (
		<Layout>
			<Row className='justify-content-center'>
				<Col
					sm={8}
					md={6}
					className='p-3 d-flex flex-column border border-muted rounded'
					style={{ height: '75vh' }}
				>
					<CreateTodoForm addTodo={addTodo} />
					<TodoList
						todos={todos}
						viewOption={viewOption}
						toggleTodoStatus={toggleTodoStatus}
						removeTodo={removeTodo}
					/>
					<TodoViewMode changeViewOption={changeViewOption} />
				</Col>
			</Row>
		</Layout>
	);
};

export default TodoApp;
